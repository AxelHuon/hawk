'use client';
import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

interface CustomQueryClientProviderProps {
  children: React.ReactNode;
}

const CustomQueryClientProvider: React.FC<CustomQueryClientProviderProps> = ({ children }) => {
  const queryClient = new QueryClient();
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};

export default CustomQueryClientProvider;
