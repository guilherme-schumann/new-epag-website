import AnimatedCounter from '@/components/shared/AnimatedCounter';

const stats = [
  { value: 670, suffix: 'M+', label: 'adult individuals reachable' },
  { value: 470, suffix: 'K+', label: 'points of sale' },
  { value: 140, suffix: '+', label: 'payment partners' },
  { value: 6, suffix: '', label: 'countries active' },
];

export default function StatsBar() {
  return (
    <div className="page-x pt-8">
      <div className="page-container">
        <div className="rounded-2xl bg-light shadow-card">
          <div className="grid grid-cols-2 divide-x divide-y divide-secondary-100 lg:grid-cols-4 lg:divide-y-0">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className={`flex flex-col items-center justify-center px-6 py-8 text-center ${
                  i === 0 ? 'rounded-tl-2xl' : ''
                } ${i === 1 ? 'rounded-tr-2xl lg:rounded-tr-none' : ''} ${
                  i === 2 ? 'rounded-bl-2xl lg:rounded-none' : ''
                } ${i === 3 ? 'rounded-br-2xl' : ''}`}
              >
                <p className="text-4xl font-extrabold text-secondary-900">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
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
