'use client';

import { motion } from 'motion/react';

// Color values derived from design tokens (needed for JS motion animation interpolation)
// primary-500: #17C3FA | secondary-500: #30A6E9 | theme-middle-blue: #019FD1
const COLOR_1 = 'rgba(23, 195, 250, 0.35)';   // primary-500 @ 35%
const COLOR_2 = 'rgba(48, 166, 233, 0.22)';   // secondary-500 @ 22%
const COLOR_3 = 'rgba(1, 159, 209, 0.28)';    // theme-middle-blue @ 28%

const BLUR = 80;
const SPEED = 1;
const COLOR_DURATION = 12;

export default function AmbientBackground() {
  return (
    <div
      className="absolute inset-0 overflow-hidden"
      style={{ isolation: 'isolate' }}
      aria-hidden="true"
    >
      {/* Blob 1 — top-left drift */}
      <motion.div
        style={{
          position: 'absolute',
          borderRadius: '50%',
          opacity: 0.7,
          width: '80%',
          height: '80%',
          top: '10%',
          left: '10%',
          backgroundColor: COLOR_1,
        }}
        animate={{
          x: [-30, 30],
          y: [-30, 30],
          scale: [1, 1.1],
          backgroundColor: [COLOR_1, COLOR_2, COLOR_3],
        }}
        transition={{
          x: { duration: 7 * SPEED, ease: 'easeInOut', repeat: Infinity, repeatType: 'mirror' },
          y: { duration: 7 * SPEED, ease: 'easeInOut', repeat: Infinity, repeatType: 'mirror' },
          scale: { duration: 7 * SPEED, ease: 'easeInOut', repeat: Infinity, repeatType: 'mirror' },
          backgroundColor: { duration: COLOR_DURATION, ease: 'easeInOut', repeat: Infinity, repeatType: 'mirror' },
        }}
      />

      {/* Blob 2 — top-right drift */}
      <motion.div
        style={{
          position: 'absolute',
          borderRadius: '50%',
          opacity: 0.6,
          width: '70%',
          height: '70%',
          top: '15%',
          right: '15%',
          backgroundColor: COLOR_2,
        }}
        animate={{
          x: [50, -50],
          y: [100, -20],
          backgroundColor: [COLOR_2, COLOR_3, COLOR_1],
        }}
        transition={{
          x: { duration: 5 * SPEED, ease: 'easeInOut', repeat: Infinity, repeatType: 'mirror' },
          y: { duration: 5 * SPEED, ease: 'easeInOut', repeat: Infinity, repeatType: 'mirror' },
          backgroundColor: { duration: COLOR_DURATION, ease: 'easeInOut', repeat: Infinity, repeatType: 'mirror' },
        }}
      />

      {/* Blob 3 — bottom-left drift */}
      <motion.div
        style={{
          position: 'absolute',
          borderRadius: '50%',
          opacity: 0.6,
          width: '60%',
          height: '60%',
          bottom: '10%',
          left: '20%',
          backgroundColor: COLOR_3,
        }}
        animate={{
          x: [-20, 80],
          y: [100, 50],
          backgroundColor: [COLOR_3, COLOR_1, COLOR_2],
        }}
        transition={{
          x: { duration: 6 * SPEED, ease: 'easeInOut', repeat: Infinity, repeatType: 'mirror' },
          y: { duration: 6 * SPEED, ease: 'easeInOut', repeat: Infinity, repeatType: 'mirror' },
          backgroundColor: { duration: COLOR_DURATION, ease: 'easeInOut', repeat: Infinity, repeatType: 'mirror' },
        }}
      />

      {/* Blur overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backdropFilter: `blur(${BLUR}px)`,
          WebkitBackdropFilter: `blur(${BLUR}px)`,
          pointerEvents: 'none',
          zIndex: 10,
        }}
      />

      {/* White wash — keeps the background feeling bright */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(255, 255, 255, 0.55)',
          pointerEvents: 'none',
          zIndex: 11,
        }}
      />
    </div>
  );
}
