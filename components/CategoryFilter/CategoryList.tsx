'use client';

import { Category } from '@/types/Category';
import React from 'react';
import { CategoryButton } from '../CategoryButton';

interface CategoryListProps {
  categories: Category[];
  selectedCategory: string | null;
  onCategorySelect: (categoryId: string | null) => void;
  onToggleFavorite: (categoryId: string) => void;
}

export const CategoryList: React.FC<CategoryListProps> = ({
  categories,
  selectedCategory,
  onCategorySelect,
  onToggleFavorite,
}) => (
  <div className="px-4 pb-4">
    {categories.map((category) => (
      <CategoryButton
        key={category.id}
        name={category.name}
        isActive={selectedCategory === category.id}
        isFavorite={category.favorite}
        onPress={() =>
          onCategorySelect(
            selectedCategory === category.id ? null : category.id
          )
        }
        onToggleFavorite={() => onToggleFavorite(category.id)}
      />
    ))}
  </div>
);

