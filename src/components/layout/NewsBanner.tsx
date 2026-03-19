'use client';

import { useState } from 'react';
import { Icon } from '@/components/ui';

interface NewsBannerProps {
  message: string;
}

export default function NewsBanner({ message }: NewsBannerProps) {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="relative flex items-center justify-center bg-primary-500 py-3 px-12">
      <p className="text-sm font-semibold leading-5 text-secondary-900">
        {message}
      </p>
      <button
        onClick={() => setVisible(false)}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-secondary-900 hover:opacity-70 transition-opacity cursor-pointer"
        aria-label="Close banner"
      >
        <Icon name="x" size={24} />
      </button>
    </div>
  );
}
