'use client';

import { useEffect, useRef } from 'react';
import { sanitizeHtml } from '@/lib/sanitize';

type Props = {
  value: string;
  onChange: (val: string) => void;
};

export default function RichTextEditor({ value, onChange }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  // Sanitize and sync whenever value changes externally (e.g. locale switch)
  useEffect(() => {
    const safe = sanitizeHtml(value);
    if (ref.current && ref.current.innerHTML !== safe) {
      ref.current.innerHTML = safe;
    }
  }, [value]);

  return (
    <div className="rounded-panel border border-secondary-900/20 overflow-hidden">
      {/* Toolbar */}
      <div className="flex flex-wrap gap-1 border-b border-secondary-900/10 bg-background px-2 py-1.5">
        {[
          { cmd: 'bold', label: 'B', style: 'font-bold' },
          { cmd: 'italic', label: 'I', style: 'italic' },
          { cmd: 'underline', label: 'U', style: 'underline' },
        ].map(({ cmd, label, style }) => (
          <button
            key={cmd}
            type="button"
            onMouseDown={(e) => {
              e.preventDefault();
              document.execCommand(cmd);
            }}
            className={`rounded px-2 py-0.5 text-sm text-dark-gray hover:bg-secondary-100 transition-colors ${style}`}
          >
            {label}
          </button>
        ))}
        <div className="w-px bg-secondary-900/10 mx-1" />
        {[
          { cmd: 'insertUnorderedList', label: '• List' },
          { cmd: 'insertOrderedList', label: '1. List' },
        ].map(({ cmd, label }) => (
          <button
            key={cmd}
            type="button"
            onMouseDown={(e) => {
              e.preventDefault();
              document.execCommand(cmd);
            }}
            className="rounded px-2 py-0.5 text-sm text-dark-gray hover:bg-secondary-100 transition-colors"
          >
            {label}
          </button>
        ))}
        <div className="w-px bg-secondary-900/10 mx-1" />
        {(['h2', 'h3'] as const).map((tag) => (
          <button
            key={tag}
            type="button"
            onMouseDown={(e) => {
              e.preventDefault();
              document.execCommand('formatBlock', false, tag);
            }}
            className="rounded px-2 py-0.5 text-sm text-dark-gray hover:bg-secondary-100 transition-colors"
          >
            {tag.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Editable area */}
      <div
        ref={ref}
        contentEditable
        suppressContentEditableWarning
        onInput={() => {
          if (ref.current) onChange(ref.current.innerHTML);
        }}
        className="min-h-[240px] px-3 py-2 text-sm text-dark-gray outline-none leading-relaxed [&_h2]:text-xl [&_h2]:font-bold [&_h2]:my-2 [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:my-2 [&_ul]:list-disc [&_ul]:pl-5 [&_ol]:list-decimal [&_ol]:pl-5"
      />
    </div>
  );
}
