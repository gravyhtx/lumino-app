// hooks/useBreakpoint.ts
import { useState, useEffect } from 'react'

export const useBreakpoint = () => {
  const [width, setWidth] = useState<number | null>(null);

  useEffect(() => {
    const updateSize = () => setWidth(window.innerWidth);
    updateSize(); // call on mount

    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  return {
    isMobile: width !== null && width < 768,
    isTablet: width !== null && width >= 768 && width < 1024,
    isDesktop: width !== null && width >= 1024,
    ready: width !== null, // ✅ used for conditional rendering
  };
}