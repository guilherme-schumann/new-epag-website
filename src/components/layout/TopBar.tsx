import { Icon } from '@/components/ui';

const topLinks = [
  { label: 'Login Admin', href: '/admin' },
  { label: 'Help Center', href: '/help' },
];

export default function TopBar() {
  return (
    <div className="page-x hidden items-center justify-end bg-secondary-900 py-2.5 lg:flex">
      <div className="flex items-center gap-3">
        {topLinks.map((link, i) => (
          <div key={link.label} className="flex items-center gap-3">
            <a
              href={link.href}
              className="text-sm font-semibold leading-5 text-secondary-100 hover:text-light transition-colors whitespace-nowrap"
            >
              {link.label}
            </a>
            {i < topLinks.length - 1 && (
              <span className="h-5 w-px bg-secondary-100/30" />
            )}
          </div>
        ))}

        <span className="h-5 w-px bg-secondary-100/30" />

        {/* Language Selector */}
        <button className="flex items-center gap-1 text-sm font-semibold leading-5 text-secondary-100 hover:text-light transition-colors cursor-pointer">
          <Icon name="globe" size={16} />
          <span>English</span>
          <Icon name="chevron-down" size={16} />
        </button>
      </div>
    </div>
  );
}
