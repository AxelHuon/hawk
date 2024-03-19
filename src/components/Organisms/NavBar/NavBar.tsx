/*
 * Navbar Component
 * ----------------
 * Description:
 * The Navbar component serves as the main navigation bar for the application. It utilizes the NavLink component
 * for navigation links and displays a central logo. The Navbar is styled using the StyledNavbar styled component,
 * ensuring a consistent and appealing visual presentation. This component is typically placed at the top of the
 * page layout and provides users with easy access to key areas of the application such as playing a game or
 * logging in.
 *
 * Props:
 * The Navbar component does not currently accept any props. It is designed for simplicity and ease of use,
 * with predefined navigation links and a logo image.
 *
 * Usage:
 * To integrate the Navbar into your application, simply import it and include it in your component structure,
 * typically at the top of your page layout or within your application's shell component.
 */

'use client';

import React from 'react';

import NavLink from '../../Atoms/Navlink/NavLink';
import Image from 'next/image';

import { StyledNavbar } from './NavBar.style';

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <StyledNavbar>
      <NavLink to="/play" label="play" />

      <Image src="/images/logo.svg" alt="logo" width={333} height={86} draggable="false" />

      <NavLink to="/login" label="login" />
    </StyledNavbar>
  );
};

export default Navbar;
