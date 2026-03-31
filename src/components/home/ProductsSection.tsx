import Link from 'next/link';

const products = [
  {
    tag: 'Pay-in',
    tagColor: 'bg-primary-500/20 text-primary-500',
    title: 'Payment Processing',
    description:
      'Accept local credit & debit cards, cash vouchers, bank transfers, and instant payments via a single API. Go live with PIX, SPEI, OXXO, PSE, Nequi, and Boleto — without a local entity or per-market contracts.',
    href: '/solutions/payin',
    methods: ['PIX', 'SPEI', 'OXXO', 'PSE', 'Boleto', 'Cards'],
  },
  {
    tag: 'Pay-out',
    tagColor: 'bg-theme-dark-blue-400/20 text-theme-dark-blue-400',
    title: 'Real-time Payouts',
    description:
      'Disburse fully automated payouts to users, contractors, and partners in real time. PIX, SPEI, and digital wallet disbursements — with detailed tracking and effortless reconciliation.',
    href: '/solutions/payout',
    methods: ['PIX', 'SPEI', 'Wallets'],
  },
  {
    tag: 'Compliance',
    tagColor: 'bg-secondary-500/20 text-secondary-500',
    title: 'ID Validation',
    description:
      'Real-time CPF and CNPJ verification connected to multiple government databases. Required for payment processing, age verification, and regulatory compliance in Brazil. Pay-per-use model.',
    href: '/solutions/id-validation',
    methods: ['CPF', 'CNPJ', 'Multi-database'],
  },
];

export default function ProductsSection() {
  return (
    <section className="page-section">
      <div className="page-container">
        <div className="rounded-[32px] bg-secondary-900 px-6 py-14 sm:px-10 lg:px-16 lg:py-16 xl:px-20 xl:py-20">

          {/* Header */}
          <div className="mb-12 text-center">
            <p className="mb-3 text-xs font-bold uppercase tracking-widest text-primary-500">
              Our Products
            </p>
            <h2 className="text-3xl font-extrabold text-light sm:text-4xl">
              Everything your LatAm expansion needs
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-secondary-100/70">
              Pay-in, payouts, and compliance — all through one integration, one contract, and one
              technical team.
            </p>
          </div>

          {/* Product cards */}
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {products.map((product) => (
              <div
                key={product.title}
                className="flex flex-col rounded-2xl bg-light/5 p-6 ring-1 ring-white/10"
              >
                <span
                  className={`mb-4 inline-flex w-fit rounded-full px-3 py-1 text-xs font-semibold ${product.tagColor}`}
                >
                  {product.tag}
                </span>
                <h3 className="mb-3 text-lg font-semibold text-light">{product.title}</h3>
                <p className="mb-5 flex-1 text-sm leading-6 text-secondary-100/65">
                  {product.description}
                </p>

                {/* Methods */}
                <div className="mb-6 flex flex-wrap gap-2">
                  {product.methods.map((m) => (
                    <span
                      key={m}
                      className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-secondary-100/60"
                    >
                      {m}
                    </span>
                  ))}
                </div>

                <Link
                  href={product.href}
                  className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-primary-500 transition-colors hover:text-primary-600"
                >
                  Learn more
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-4 w-4">
                    <path fillRule="evenodd" d="M2 8a.75.75 0 0 1 .75-.75h8.69L8.22 4.03a.75.75 0 0 1 1.06-1.06l4.5 4.5a.75.75 0 0 1 0 1.06l-4.5 4.5a.75.75 0 0 1-1.06-1.06l3.22-3.22H2.75A.75.75 0 0 1 2 8Z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
