'use client';

import { useState, useEffect } from 'react';

/**
 * Custom hook to track screen width and determine if screen is small (mobile)
 */
export const useScreenSize = () => {
  // Start with a default that matches server-side (assume desktop by default to avoid hydration mismatch)
  const [screenWidth, setScreenWidth] = useState(1024);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
    // Set initial screen width
    if (globalThis.window !== undefined) {
      setScreenWidth(globalThis.window.innerWidth);
    }

    const handleResize = () => {
      if (globalThis.window !== undefined) {
        setScreenWidth(globalThis.window.innerWidth);
      }
    };

    if (globalThis.window !== undefined) {
      globalThis.window.addEventListener('resize', handleResize);
      return () => globalThis.window.removeEventListener('resize', handleResize);
    }
  }, []);

  const isSmallScreen = screenWidth < 768;

  return { screenWidth, isSmallScreen, isHydrated };
};

