import type { Metadata } from 'next';
import React from 'react';
import './reset.css';
import StyledComponentsRegistry from '../../lib/registry';
import Navbar from '../components/Organisms/NavBar/NavBar';
import { SessionProvider } from '@/providers/SessionProviders/SessionContext';
import CustomQueryClientProvider from '@/providers/CustomQueryClientProvider/CustomQueryClientProvider';

export const metadata: Metadata = {
  title: 'Hawk',
  description: 'Hawk is a espion game support.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <CustomQueryClientProvider>
      <html lang="fr">
        <body>
          <SessionProvider>
            <StyledComponentsRegistry>
              <Navbar />
              {children}
            </StyledComponentsRegistry>
          </SessionProvider>
        </body>
      </html>
    </CustomQueryClientProvider>
  );
}
