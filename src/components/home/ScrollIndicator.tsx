'use client';

import { motion } from 'motion/react';

const DRIFT = 14;
const SCALE = 0.9;
const GAP = 5;

const chevronAnim = {
  y: [0, 0, DRIFT, DRIFT, DRIFT, DRIFT, 0],
  opacity: [0, 1, 1, 0.6, 0.85, 0, 0],
};

const chevronTransition = {
  duration: 1.8,
  repeat: Infinity,
  repeatType: 'loop' as const,
  ease: 'easeInOut' as const,
  times: [0, 0.167, 0.5, 0.583, 0.667, 0.833, 1],
};

const glowDark = {
  filter: [
    'drop-shadow(0 0 0px rgba(255,255,255,0))',
    `drop-shadow(0 0 ${(2 * SCALE).toFixed(1)}px rgba(255,255,255,0.35))`,
    `drop-shadow(0 0 ${(2 * SCALE).toFixed(1)}px rgba(255,255,255,0.2))`,
    `drop-shadow(0 0 ${(4 * SCALE).toFixed(1)}px rgba(255,255,255,0.4))`,
    `drop-shadow(0 0 ${(4 * SCALE).toFixed(1)}px rgba(255,255,255,0.4))`,
    'drop-shadow(0 0 0px rgba(255,255,255,0))',
    'drop-shadow(0 0 0px rgba(255,255,255,0))',
  ],
};

const glowLight = {
  filter: [
    'drop-shadow(0 0 0px rgba(23,195,250,0))',
    `drop-shadow(0 0 ${(2 * SCALE).toFixed(1)}px rgba(23,195,250,0.5))`,
    `drop-shadow(0 0 ${(2 * SCALE).toFixed(1)}px rgba(23,195,250,0.3))`,
    `drop-shadow(0 0 ${(4 * SCALE).toFixed(1)}px rgba(23,195,250,0.6))`,
    `drop-shadow(0 0 ${(4 * SCALE).toFixed(1)}px rgba(23,195,250,0.6))`,
    'drop-shadow(0 0 0px rgba(23,195,250,0))',
    'drop-shadow(0 0 0px rgba(23,195,250,0))',
  ],
};

interface ScrollIndicatorProps {
  targetId?: string;
  variant?: 'dark' | 'light';
}

export default function ScrollIndicator({ targetId, variant = 'dark' }: ScrollIndicatorProps) {
  const handleClick = () => {
    if (targetId) {
      document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollBy({ top: window.innerHeight * 0.85, behavior: 'smooth' });
    }
  };

  const colorClass = variant === 'light' ? 'text-theme-secondary' : 'text-light';

  return (
    <motion.button
      onClick={handleClick}
      aria-label="Scroll down"
      animate={variant === 'light' ? glowLight : glowDark}
      transition={chevronTransition}
      className={`flex cursor-pointer flex-col items-center ${colorClass}`}
      style={{ gap: GAP }}
    >
      {[0, 1].map((i) => (
        <motion.svg
          key={i}
          animate={chevronAnim}
          transition={chevronTransition}
          width={18 * SCALE}
          height={9 * SCALE}
          viewBox="0 0 18 9"
          fill="none"
        >
          <path
            d="M1.5 1.5L9 7.5L16.5 1.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </motion.svg>
      ))}
    </motion.button>
  );
}
