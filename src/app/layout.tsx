import type { Metadata } from 'next';
import React from 'react';
import './reset.css';
import StyledComponentsRegistry from '../../lib/registry';
import Navbar from '../components/Organisms/NavBar/NavBar';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

export const metadata: Metadata = {
  title: 'Hawk',
  description: 'Hawk is a espion game support.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const queryClient = new QueryClient();

  return (
    <html lang="fr">
      <body>
        <QueryClientProvider client={queryClient}>
          <StyledComponentsRegistry>
            <Navbar />
            {children}
          </StyledComponentsRegistry>
        </QueryClientProvider>
      </body>
    </html>
  );
}
