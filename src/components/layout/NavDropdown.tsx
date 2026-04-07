'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Icon } from '@/components/ui';

export type DropdownItem = {
  label: string;
  href?: string;
  bold?: boolean;
  children?: Omit<DropdownItem, 'children'>[];
};

export type DropdownColumn = {
  title: string;
  items: DropdownItem[];
};

export type DropdownFeature = {
  title: string;
  description: string;
  href: string;
};

export type DropdownData = {
  columns: DropdownColumn[];
  feature?: DropdownFeature;
};

interface NavDropdownProps {
  data: DropdownData;
}

function ExpandableItem({ item }: { item: DropdownItem }) {
  const [open, setOpen] = useState(false);

  if (!item.children?.length) {
    return (
      <Link
        href={item.href ?? '#'}
        className={`text-sm leading-6 text-dark-gray transition-colors hover:text-theme-secondary ${
          item.bold ? 'font-semibold' : 'font-normal'
        }`}
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div>
      <button
        onClick={() => setOpen((v) => !v)}
        className={`flex w-full cursor-pointer items-center justify-between gap-2 text-sm leading-6 text-dark-gray transition-colors hover:text-theme-secondary ${
          item.bold ? 'font-semibold' : 'font-normal'
        }`}
      >
        <span>{item.label}</span>
        <Icon
          name="chevron-down"
          size={16}
          className={`shrink-0 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>

      {open && (
        <ul className="mt-1.5 flex flex-col gap-1 border-l-2 border-theme-middle-blue/30 pl-3">
          {item.children.map((child) => (
            <li key={child.label}>
              <Link
                href={child.href ?? '#'}
                className="text-sm font-semibold leading-6 text-dark-gray transition-colors hover:text-theme-secondary"
              >
                {child.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default function NavDropdown({ data }: NavDropdownProps) {
  return (
    <div className="w-max min-w-[420px] rounded-2xl border border-secondary-100 bg-light px-8 py-6 shadow-[0_8px_32px_rgba(0,0,0,0.12)]">

      <div
        className="grid gap-8"
        style={{ gridTemplateColumns: `repeat(${data.columns.length}, minmax(0, 1fr))` }}
      >
        {data.columns.map((col) => (
          <div key={col.title}>
            <p className="mb-4 flex items-center gap-2 text-sm font-bold text-theme-secondary">
              <span className="inline-block h-4 w-4 rounded bg-theme-secondary/10 ring-1 ring-theme-secondary/20" />
              {col.title}
            </p>
            <ul className="flex flex-col gap-2">
              {col.items.map((item) => (
                <li key={item.label}>
                  <ExpandableItem item={item} />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {data.feature && (
        <div className="mt-6 border-t border-secondary-100 pt-5">
          <Link href={data.feature.href} className="group inline-flex flex-col gap-1">
            <span className="text-sm font-bold text-theme-secondary transition-colors group-hover:text-secondary-500">
              {data.feature.title}
            </span>
            <span className="text-sm text-dark-gray">{data.feature.description}</span>
          </Link>
        </div>
      )}

    </div>
  );
}
