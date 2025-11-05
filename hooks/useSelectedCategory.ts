'use client';

import { useState, useEffect } from 'react';
import { getStoredCategory, setStoredCategory } from '@/lib/utils/localStorage';

/**
 * Custom hook to manage selected category with localStorage persistence
 */
export const useSelectedCategory = (initialValue?: string | null) => {
  // Initialize with server value to avoid hydration mismatch
  const [selectedCategory, setSelectedCategory] = useState<string | null>(initialValue ?? null);
  const [isHydrated, setIsHydrated] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);

  // After hydration, check localStorage and use it if available (localStorage takes precedence)
  useEffect(() => {
    setIsHydrated(true);
    const stored = getStoredCategory();
    if (stored) {
      // Use stored value from localStorage, it takes precedence over server value
      setSelectedCategory(stored);
    }
    // Mark as initialized after checking localStorage
    setIsInitialized(true);
  }, []); // Only run once after mount

  // Persist selected category to storage
  useEffect(() => {
    if (isHydrated) {
      setStoredCategory(selectedCategory);
    }
  }, [selectedCategory, isHydrated]);

  return [selectedCategory, setSelectedCategory, isInitialized] as const;
};

