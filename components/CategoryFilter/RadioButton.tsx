'use client';

import React from 'react';

interface RadioButtonProps {
  label: string;
  isSelected: boolean;
  onPress: () => void;
}

export const RadioButton: React.FC<RadioButtonProps> = ({
  label,
  isSelected,
  onPress
}) => (
  <button
    onClick={onPress}
    className="flex flex-row items-center cursor-pointer bg-transparent border-none"
  >
    <div className="w-4 h-4 rounded-full border-2 border-gray-400 mr-2 flex items-center justify-center">
      {isSelected && <div className="w-2 h-2 rounded-full bg-black" />}
    </div>
    <span className="text-xs">{label}</span>
  </button>
);

