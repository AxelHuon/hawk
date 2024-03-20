/**
 * This file defines a React component, CustomQueryClientProvider, which serves as a customized wrapper for the QueryClientProvider from React Query.
 * The purpose of this component is to encapsulate the setup and provision of a QueryClient instance to the React component tree.
 * By using this custom provider, any React component within this provider's tree can utilize React Query's features like fetching,
 * caching, and updating data in a declarative way without having to directly manage the QueryClient instance.
 *
 * The CustomQueryClientProvider takes `children` as a prop, allowing it to be used at any level in the component hierarchy to wrap
 * a part or the whole application. This design makes it incredibly flexible and reusable across different parts of the application.
 * Inside, it initializes a new QueryClient instance, which is then provided to all child components via the QueryClientProvider component
 * from React Query. This setup ensures that all components have access to a shared QueryClient, enabling consistent data management
 * practices and efficient data fetching strategies throughout the application.
 *
 * In essence, this component abstracts away the boilerplate needed to set up React Query in a React application, promoting code
 * reuse and simplifying the process of implementing data fetching and state synchronization across the component tree.
 */

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
