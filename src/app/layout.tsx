import type { Metadata } from 'next';
import React from 'react';
import './reset.css';
import StyledComponentsRegistry from '../../lib/registry';
export const metadata: Metadata = {
  title: 'Hawk',
  description: 'Hawk is a espion game support.',
};

import Navbar from '../components/Organisms/Navbar/NavBar';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <StyledComponentsRegistry>
        <body>
          <Navbar />
          {children}
        </body>
      </StyledComponentsRegistry>
    </html>
  );
}
