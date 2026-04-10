'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useLegalHover } from './LegalHoverContext';

type Section = {
  id: string;
  title: string;
  content: string;
};

type LegalDocumentLayoutProps = {
  title: string;
  sections: Section[];
  backLabel: string;
};

function useScrollSpy(ids: string[]) {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    function calculate() {
      const threshold = window.innerHeight * 0.4;
      let current: string | null = null;

      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top;
        if (top <= threshold) {
          current = id;
        }
      }

      setActiveId(current);
    }

    calculate();
    window.addEventListener('scroll', calculate, { passive: true });
    return () => window.removeEventListener('scroll', calculate);
  }, [ids]);

  return activeId;
}

export default function LegalDocumentLayout({
  title,
  sections,
  backLabel,
}: LegalDocumentLayoutProps) {
  const { hoveredId, setHoveredId } = useLegalHover();
  const sectionIds = sections.map((s) => s.id);
  const activeSection = useScrollSpy(sectionIds);

  return (
    <section className="page-section bg-background">
      <div className="page-container">
        <div className="flex flex-col gap-10 lg:flex-row lg:gap-16">

          {/* Sidebar — 25% */}
          <aside className="lg:w-1/4 lg:shrink-0">
            <div className="sticky top-24">
              <Link
                href="/legal"
                className="mb-6 flex items-center gap-2 text-sm text-primary-500 transition-colors hover:text-primary-600"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                {backLabel}
              </Link>

              <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-light-gray">
                {title}
              </p>

              <nav aria-label={title}>
                <ul className="space-y-1">
                  {sections.map((section) => {
                    const active = activeSection === section.id;
                    const hovered = section.id === hoveredId;
                    const highlight = active || hovered;

                    return (
                      <li key={section.id}>
                        <button
                          onClick={() => {
                            const el = document.getElementById(section.id);
                            if (el) {
                              const top = el.getBoundingClientRect().top + window.scrollY - 150;
                              window.scrollTo({ top, behavior: 'smooth' });
                            }
                          }}
                          className={`w-full text-left block text-sm py-1.5 transition-colors hover:text-primary-500 ${
                            highlight ? 'font-semibold text-primary-500' : 'text-dark-gray'
                          }`}
                        >
                          {section.title}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </div>
          </aside>

          {/* Content — 75% */}
          <main className="min-w-0 flex-1">
            <div className="space-y-12">
              {sections.map((section) => (
                <section
                  key={section.id}
                  id={section.id}
                  onMouseEnter={() => setHoveredId(section.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  className="scroll-mt-32"
                >
                  <h2 className="text-2xl font-extrabold text-secondary-900 mb-4">
                    {section.title}
                  </h2>
                  <div className="prose prose-sm max-w-none text-dark-gray leading-relaxed">
                    <p>{section.content}</p>
                  </div>
                </section>
              ))}
            </div>
          </main>

        </div>
      </div>
    </section>
  );
}
