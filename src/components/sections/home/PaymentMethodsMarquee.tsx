'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useMotionValue, useAnimationFrame } from 'motion/react';
import { withBasePath } from '@/lib/base-path';

const PAYMENT_METHODS = [
  { label: 'PIX',                 file: 'pix.svg' },
  { label: 'OXXO',                file: 'OXXO.svg' },
  { label: 'SPEI',                file: 'SPEI.svg' },
  { label: 'Nequi',               file: 'Nequi.svg' },
  { label: 'Credit Card',         file: 'Credit Card.svg' },
  { label: 'Debit Card',          file: 'Debit Card.svg' },
  { label: 'Bank Transfer',       file: 'Bank Transfer.svg' },
  { label: 'Boleto',              file: 'bar_code.svg' },
  { label: 'PagoEfectivo',        file: 'PagoEfectivo.svg' },
  { label: 'PayCash',             file: 'PayCash.svg' },
  { label: 'PicPay',              file: 'picpay.svg' },
  { label: 'Deuna',               file: 'Deuna.svg' },
  { label: 'Mach',                file: 'Mach.svg' },
  { label: 'Tiendas & Farmacias', file: 'Tiendas Y Farmacias.svg' },
];

const SPEED = 28; // px/s

// Keeps value in [-half, 0) for a seamless 2-copy loop
function wrapX(value: number, half: number): number {
  return ((value % half) + half) % half - half;
}

function MarqueeRow({ reverse = false }: { reverse?: boolean }) {
  const x = useMotionValue(0);
  const innerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const lastPointerX = useRef(0);

  // Continuous scroll — pauses while dragging
  useAnimationFrame((_, delta) => {
    if (isDragging.current || !innerRef.current) return;
    const half = innerRef.current.scrollWidth / 2;
    if (half === 0) return;
    x.set(wrapX(x.get() + (reverse ? 1 : -1) * SPEED * (delta / 1000), half));
  });

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    isDragging.current = true;
    lastPointerX.current = e.clientX;
    (e.currentTarget as HTMLDivElement).setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging.current || !innerRef.current) return;
    const half = innerRef.current.scrollWidth / 2;
    const delta = e.clientX - lastPointerX.current;
    lastPointerX.current = e.clientX;
    x.set(wrapX(x.get() + delta, half));
  };

  const onPointerUp = () => { isDragging.current = false; };

  return (
    <div
      className="overflow-hidden cursor-grab active:cursor-grabbing select-none"
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerLeave={onPointerUp}
    >
      <motion.div ref={innerRef} style={{ x }} className="flex w-max flex-nowrap">
        {[0, 1].flatMap((copy) =>
          PAYMENT_METHODS.map((method) => (
            <span
              key={`${copy}-${method.label}`}
              className="mx-1.5 inline-flex shrink-0 items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-secondary-100/65"
            >
              <Image
                src={withBasePath(`/assets/payment_methods/${method.file}`)}
                alt={method.label}
                width={16}
                height={16}
                className="h-4 w-4 object-contain"
              />
              {method.label}
            </span>
          ))
        )}
      </motion.div>
    </div>
  );
}

export default function PaymentMethodsMarquee() {
  return (
    <div className="flex flex-col gap-3">
      <MarqueeRow />
      <MarqueeRow reverse />
    </div>
  );
}
