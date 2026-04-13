'use client';

import { createContext, useContext, useState } from 'react';

type LegalHoverContextType = {
  hoveredId: string | null;
  setHoveredId: (id: string | null) => void;
};

const LegalHoverContext = createContext<LegalHoverContextType>({
  hoveredId: null,
  setHoveredId: () => {},
});

export function LegalHoverProvider({ children }: { children: React.ReactNode }) {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  return (
    <LegalHoverContext.Provider value={{ hoveredId, setHoveredId }}>
      {children}
    </LegalHoverContext.Provider>
  );
}

export function useLegalHover() {
  return useContext(LegalHoverContext);
}
