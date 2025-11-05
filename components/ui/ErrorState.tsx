'use client';

import React from 'react';

interface ErrorStateProps {
  message: string;
}

export const ErrorState: React.FC<ErrorStateProps> = ({ message }) => (
  <div className="flex-1 flex justify-center items-center bg-white min-h-screen">
    <p className="text-base text-red-600 text-center p-5">Error: {message}</p>
  </div>
);

