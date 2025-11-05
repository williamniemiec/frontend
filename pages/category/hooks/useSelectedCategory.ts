'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

/**
 * Custom hook to manage selected category from URL params
 */
export const useSelectedCategory = (initialValue?: string | null) => {
  const router = useRouter();
  const categoryIdFromUrl = router.query.categoryId as string | undefined;
  
  // Initialize with server value, then sync with URL
  const [selectedCategory, setSelectedCategory] = useState<string | null>(initialValue ?? null);
  const [isInitialized, setIsInitialized] = useState(false);

  // Sync with URL params after hydration
  useEffect(() => {
    if (categoryIdFromUrl) {
      setSelectedCategory(categoryIdFromUrl);
    } else if (initialValue) {
      setSelectedCategory(initialValue);
    }
    setIsInitialized(true);
  }, [categoryIdFromUrl, initialValue]);

  // Update selected category (this will be used for setting, but navigation should use router)
  const updateSelectedCategory = (categoryId: string | null) => {
    setSelectedCategory(categoryId);
  };

  return [selectedCategory, updateSelectedCategory, isInitialized] as const;
};

