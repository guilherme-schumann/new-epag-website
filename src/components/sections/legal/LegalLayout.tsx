'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useLegalHover } from './LegalHoverContext';
import { useContent } from '@/hooks/useContent';
import { legalContent } from '@/content';

function useScrollSpy(ids: string[], enabled: boolean) {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    if (!enabled) return;

    function calculate() {
      const threshold = window.innerHeight * 0.4; // 40% da tela
      let current: string | null = null;

      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top;
        if (top <= threshold) {
          current = id; // continua iterando — pega o último que passou o threshold
        }
      }

      setActiveId(current);
    }

    calculate(); // estado inicial
    window.addEventListener('scroll', calculate, { passive: true });
    return () => window.removeEventListener('scroll', calculate);
  }, [ids, enabled]);

  return activeId;
}

export default function LegalLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isHub = pathname === '/legal';
  const { hoveredId } = useLegalHover();
  const c = useContent(legalContent);
  
  // IDs observáveis na página hub
  const HUB_SECTION_IDS = c.overview.documents.map((d) => d.id);

  const activeSection = useScrollSpy(HUB_SECTION_IDS, isHub);
  
  const navItems = [
    { label: c.nav.overview, href: '/legal', sectionId: null },
    { label: c.nav.termsUsers, href: '/legal/terms-for-users', sectionId: 'terms-users' },
    { label: c.nav.termsMerchants, href: '/legal/terms-for-merchants', sectionId: 'terms-merchants' },
    { label: c.nav.privacy, href: '/legal/privacy-policy', sectionId: 'privacy' },
    { label: c.nav.imprint, href: '/legal/imprint', sectionId: 'imprint' },
    { label: c.nav.prohibited, href: '/legal/prohibited-products-and-services', sectionId: 'prohibited' },
  ];

  function isActive(item: typeof navItems[number]) {
    if (isHub) {
      // na hub: "Visão Geral" ativo quando nenhuma seção está em foco
      if (item.sectionId === null) return activeSection === null;
      return activeSection === item.sectionId;
    }
    // nas subpáginas: match por pathname
    return pathname === item.href;
  }

  return (
    <section className="page-section bg-background">
      <div className="page-container">
        <div className="flex flex-col gap-10 lg:flex-row lg:gap-16">

          {/* Sidebar — 25% */}
          <aside className="lg:w-1/4 lg:shrink-0">
            <div className="sticky top-24">
              <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-light-gray">
                {c.nav.title}
              </p>
              <nav aria-label={c.nav.title}>
                <ul className="space-y-1">
                  {navItems.map((item) => {
                    const active = isActive(item);
                    const hovered = isHub && item.sectionId !== null && item.sectionId === hoveredId;
                    const highlight = active || hovered;
                    
                    // "Visão Geral" na hub: scroll pro topo
                    if (isHub && item.sectionId === null) {
                      return (
                        <li key={item.href}>
                          <button
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                            data-active={highlight}
                            className={`w-full text-left block text-sm py-1.5 transition-colors hover:text-primary-500 ${
                              highlight ? 'font-semibold text-primary-500' : 'text-dark-gray'
                            }`}
                          >
                            {item.label}
                          </button>
                        </li>
                      );
                    }
                    
                    // na hub, itens que não são "Visão Geral" fazem scroll suave ao invés de navegar
                    const isHubAnchor = isHub && item.sectionId !== null;
                    return (
                      <li key={item.href}>
                        {isHubAnchor ? (
                          <button
                            onClick={() => {
                              const el = document.getElementById(item.sectionId!);
                              if (el) {
                                const top = el.getBoundingClientRect().top + window.scrollY - 150;
                                window.scrollTo({ top, behavior: 'smooth' });
                              }
                            }}
                            className={`w-full text-left block text-sm py-1.5 transition-colors hover:text-primary-500 ${
                              highlight ? 'font-semibold text-primary-500' : 'text-dark-gray'
                            }`}
                          >
                            {item.label}
                          </button>
                        ) : (
                          <Link
                            href={item.href}
                            className={`block text-sm py-1.5 transition-colors hover:text-primary-500 ${
                              highlight ? 'font-semibold text-primary-500' : 'text-dark-gray'
                            }`}
                          >
                            {item.label}
                          </Link>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </div>
          </aside>

          {/* Content — 75% */}
          <main className="min-w-0 flex-1">
            {children}
          </main>

        </div>
      </div>
    </section>
  );
}
