'use client';

import Link from 'next/link';

export type DropdownItem = {
  label: string;
  href: string;
  bold?: boolean;
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

export default function NavDropdown({ data }: NavDropdownProps) {
  return (
    <div className="w-max min-w-[420px] rounded-xl bg-light px-8 py-6 shadow-navbar">

      {/* Columns */}
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
                  <Link
                    href={item.href}
                    className={`text-sm leading-6 text-dark-gray transition-colors hover:text-theme-secondary ${
                      item.bold ? 'font-semibold' : 'font-normal'
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Feature row */}
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
