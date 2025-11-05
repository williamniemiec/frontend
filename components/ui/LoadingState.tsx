'use client';

import React from 'react';

interface LoadingStateProps {
  message?: string;
}

export const LoadingState: React.FC<LoadingStateProps> = ({ message = 'Loading...' }) => (
  <div className="flex-1 flex justify-center items-center bg-white min-h-screen">
    <div className="flex flex-col items-center">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-dark-green"></div>
      <p className="mt-2.5 text-base text-gray-600">{message}</p>
    </div>
  </div>
);

