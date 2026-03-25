'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Icon } from '@/components/ui';
import { useLanguage } from '@/lib/i18n';

const AUTO_CLOSE_MS = 6000;

export default function NewsBanner() {
  const { t } = useLanguage();
  const [closed, setClosed] = useState(false);

  // Auto-close after AUTO_CLOSE_MS
  useEffect(() => {
    const timer = setTimeout(() => setClosed(true), AUTO_CLOSE_MS);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {!closed && (
        <motion.div
          initial={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.35, ease: 'easeInOut' }}
          className="overflow-hidden"
        >
          <div className="relative flex items-center justify-center bg-primary-500 py-3 px-12">
            <p className="text-sm font-semibold leading-5 text-secondary-900">
              {t.newsBanner.message}
            </p>
            <button
              onClick={() => setClosed(true)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-secondary-900 hover:opacity-70 transition-opacity cursor-pointer"
              aria-label="Close banner"
            >
              <Icon name="x" size={24} />
            </button>

            {/* Countdown progress bar */}
            <motion.div
              className="absolute bottom-0 left-0 h-[2px] bg-secondary-900/20"
              initial={{ width: '100%' }}
              animate={{ width: '0%' }}
              transition={{ duration: AUTO_CLOSE_MS / 1000, ease: 'linear' }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
