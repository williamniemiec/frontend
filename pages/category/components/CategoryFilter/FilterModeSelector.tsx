'use client';

import React from 'react';
import { RadioButton } from './RadioButton';

interface FilterModeSelectorProps {
  filterMode: 'all' | 'favorites';
  onFilterModeChange: (mode: 'all' | 'favorites') => void;
}

export const FilterModeSelector: React.FC<FilterModeSelectorProps> = ({
  filterMode,
  onFilterModeChange,
}) => (
  <div className="px-4 py-4 mb-8 flex flex-row items-center gap-2">
    <RadioButton
      label="All categories"
      isSelected={filterMode === 'all'}
      onPress={() => onFilterModeChange('all')}
    />
    <RadioButton
      label="Favorite categories"
      isSelected={filterMode === 'favorites'}
      onPress={() => onFilterModeChange('favorites')}
    />
  </div>
);

