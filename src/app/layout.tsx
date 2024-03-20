import type { Metadata } from 'next';
import React from 'react';
import './reset.css';
import StyledComponentsRegistry from '../../lib/registry';
import Navbar from '../components/Organisms/NavBar/NavBar';
import { SessionProvider } from '@/contexts/SessionContext/SessionContext';

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
    <html lang="fr">
      <SessionProvider>
        <StyledComponentsRegistry>
          <body>
            <Navbar />
            {children}
          </body>
        </StyledComponentsRegistry>
      </SessionProvider>
    </html>
  );
}
