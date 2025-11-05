'use client';

import { CategoryFilter } from '@/pages/category/components/CategoryFilter';
import { PostList } from '@/pages/category/components/PostList';
import { LoadingState } from '@/components/ui/LoadingState';
import { ErrorState } from '@/components/ui/ErrorState';
import { HamburgerButton } from '@/components/ui/HamburgerButton';
import { useSelectedCategory } from '@/pages/category/hooks/useSelectedCategory';
import { useScreenSize } from '@/hooks/useScreenSize';
import { usePosts } from '@/pages/category/hooks/usePosts';
import { updateCategoryFavorite } from '@/services/posts';
import { Category } from '@/types/Category';
import { Post } from '@/types/Post';
import React, { useMemo, useState } from 'react';
import { useRouter } from 'next/router';

interface HomeScreenClientProps {
  readonly initialCategories: Category[];
  readonly initialSelectedCategory?: string | null;
  readonly initialPosts?: Post[];
}

export default function HomeScreenClient({
  initialCategories,
  initialSelectedCategory: propSelectedCategory,
  initialPosts,
}: HomeScreenClientProps) {
  const router = useRouter();
  const [categories, setCategories] = useState<Category[]>(initialCategories);
  const [selectedCategory, , isCategoryInitialized] = useSelectedCategory(propSelectedCategory);
  const [filterMode, setFilterMode] = useState<'all' | 'favorites'>('all');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isSmallScreen, isHydrated } = useScreenSize();
  const { posts, loading: postsLoading, error: postsError } = usePosts(
    selectedCategory,
    initialPosts,
    propSelectedCategory
  );

  const handleToggleFavorite = async (categoryId: string) => {
    const category = categories.find(cat => cat.id === categoryId);
    if (!category) return;

    try {
      const updatedCategory = await updateCategoryFavorite(categoryId, !category.favorite, category.name);
      setCategories(prevCategories =>
        prevCategories.map(cat =>
          cat.id === categoryId ? updatedCategory : cat
        )
      );
    } catch (err) {
      console.error('Error toggling favorite:', err);
    }
  };

  const handleCategorySelect = (categoryId: string | null) => {
    if (categoryId) {
      router.push(`/category/${categoryId}`);
    }
    if (isSmallScreen) {
      setIsMenuOpen(false);
    }
  };

  const filteredCategories = useMemo(() => {
    if (filterMode === 'favorites') {
      return categories.filter((cat) => cat.favorite);
    }
    return categories;
  }, [categories, filterMode]);

  const renderPostsContent = () => {
    // Only show posts after the initial selected category is loaded
    if (!isCategoryInitialized) {
      return null;
    }

    if (postsLoading) {
      return <LoadingState message="Loading posts..." />;
    }

    if (postsError) {
      return <ErrorState message={postsError} />;
    }

    return (
      <PostList
        posts={posts}
        categories={categories}
        selectedCategory={selectedCategory}
      />
    );
  };

  // Only show mobile-specific UI after hydration to avoid hydration mismatch
  // Default to desktop layout (category filter always visible) until hydration
  const shouldShowMobileUI = isHydrated && isSmallScreen;
  const categoryFilterOpen = shouldShowMobileUI ? isMenuOpen : true;
  
  // Only show categories after the initial selected category is loaded
  const shouldShowCategories = isCategoryInitialized;

  return (
    <div className="flex-1 flex flex-row bg-white min-h-screen">
      {shouldShowMobileUI && (
        <HamburgerButton
          isSmallScreen={isSmallScreen}
          isMenuOpen={isMenuOpen}
          onToggle={() => setIsMenuOpen(!isMenuOpen)}
        />
      )}
      {shouldShowCategories && (
        <CategoryFilter
          categories={filteredCategories}
          selectedCategory={selectedCategory}
          filterMode={filterMode}
          onFilterModeChange={setFilterMode}
          onCategorySelect={handleCategorySelect}
          onToggleFavorite={handleToggleFavorite}
          isOpen={categoryFilterOpen}
          onClose={() => setIsMenuOpen(false)}
          isSmallScreen={shouldShowMobileUI}
        />
      )}
      {shouldShowMobileUI && isMenuOpen && (
        <button
          onClick={() => setIsMenuOpen(false)}
          className="absolute inset-0 bg-black/50 z-40 border-none cursor-pointer"
          style={{ position: 'fixed' }}
          aria-label="Close menu"
          type="button"
        />
      )}
      {renderPostsContent()}
    </div>
  );
}

