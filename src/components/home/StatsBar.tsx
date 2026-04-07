'use client';

import { useContent } from '@/hooks/useContent';
import { homeContent } from '@/content';
import AnimatedCounter from '@/components/shared/AnimatedCounter';

const values = [670, 470, 140, 6];

export default function StatsBar() {
  const items = useContent(homeContent).stats.items;

  return (
    <div className="page-x pt-8">
      <div className="page-container">
        <div className="rounded-2xl bg-light shadow-card">
          <div className="grid grid-cols-2 divide-x divide-y divide-secondary-100 lg:grid-cols-4 lg:divide-y-0">
            {items.map((stat, i) => (
              <div
                key={stat.label}
                className={`flex flex-col items-center justify-center px-6 py-8 text-center ${
                  i === 0 ? 'rounded-tl-2xl' : ''
                } ${i === 1 ? 'rounded-tr-2xl lg:rounded-tr-none' : ''} ${
                  i === 2 ? 'rounded-bl-2xl lg:rounded-none' : ''
                } ${i === 3 ? 'rounded-br-2xl' : ''}`}
              >
                <p className="text-4xl font-extrabold text-secondary-900">
                  <AnimatedCounter value={values[i]} suffix={stat.suffix} />
                </p>
                <p className="mt-1 text-sm text-light-gray">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
