'use client';

import { Category } from '@/types/Category';
import React from 'react';
import { FilterHeader } from './FilterHeader';
import { FilterModeSelector } from './FilterModeSelector';
import { CategoryList } from './CategoryList';

interface CategoryFilterProps {
  categories: Category[];
  selectedCategory: string | null;
  filterMode: 'all' | 'favorites';
  onFilterModeChange: (mode: 'all' | 'favorites') => void;
  onCategorySelect: (categoryId: string | null) => void;
  onToggleFavorite: (categoryId: string) => void;
  isOpen?: boolean;
  onClose?: () => void;
  isSmallScreen?: boolean;
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({
  categories,
  selectedCategory,
  filterMode,
  onFilterModeChange,
  onCategorySelect,
  onToggleFavorite,
  isOpen = true,
  onClose,
  isSmallScreen = false,
}) => {
  const displayedCategories =
    filterMode === 'favorites'
      ? categories.filter((cat) => cat.favorite)
      : categories;

  // On small screens, render as overlay sidebar
  if (isSmallScreen) {
    const menuContent = (
      <div 
        className="w-80 bg-white h-full shadow-xl"
        style={{ minHeight: '100%' }}
      >
        <FilterHeader onClose={onClose} showCloseButton={true} />
        <FilterModeSelector
          filterMode={filterMode}
          onFilterModeChange={onFilterModeChange}
        />
        <CategoryList
          categories={displayedCategories}
          selectedCategory={selectedCategory}
          onCategorySelect={onCategorySelect}
          onToggleFavorite={onToggleFavorite}
        />
      </div>
    );

    return (
      <div
        className={`absolute left-0 top-0 h-full z-50 transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        style={{
          transform: isOpen ? 'translateX(0)' : 'translateX(-100%)',
        }}
      >
        {menuContent}
      </div>
    );
  }

  // On larger screens, render normally
  return (
    <div className="w-80 bg-white" style={{ minHeight: '100%' }}>
      <FilterHeader />
      <FilterModeSelector
        filterMode={filterMode}
        onFilterModeChange={onFilterModeChange}
      />
      <CategoryList
        categories={displayedCategories}
        selectedCategory={selectedCategory}
        onCategorySelect={onCategorySelect}
        onToggleFavorite={onToggleFavorite}
      />
    </div>
  );
};

