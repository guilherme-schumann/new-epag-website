'use client';

import Link from 'next/link';
import { useLegalHover } from './LegalHoverContext';
import { useContent } from '@/hooks/useContent';
import { legalContent } from '@/content';

export default function LegalOverview() {
  const { setHoveredId } = useLegalHover();
  const c = useContent(legalContent).overview;

  return (
    <div>
      <h2 className="text-2xl font-extrabold text-secondary-900 mb-2">
        {c.title}
      </h2>
      <p className="text-base text-light-gray mb-8 leading-relaxed">
        {c.description}
      </p>

      <div className="space-y-4">
        {c.documents.map((doc) => (
          <Link
            key={doc.id}
            id={doc.id}
            href={doc.href}
            onMouseEnter={() => setHoveredId(doc.id)}
            onMouseLeave={() => setHoveredId(null)}
            className="group flex flex-col gap-2 rounded-panel border border-secondary-900/10 bg-light p-6 shadow-card transition-shadow hover:shadow-md"
          >
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-base font-semibold text-secondary-900 group-hover:text-primary-500 transition-colors">
                {doc.title}
              </h3>
              <span className="shrink-0 rounded-full bg-secondary-100 px-3 py-0.5 text-xs font-semibold text-theme-secondary">
                {doc.tag}
              </span>
            </div>
            <p className="text-sm text-light-gray leading-relaxed">
              {doc.description}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
