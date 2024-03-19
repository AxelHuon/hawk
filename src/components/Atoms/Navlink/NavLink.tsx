/*
 * NavLink Component
 * -----------------
 * Usage:
 * This component is used for navigation links within the application.
 * It renders a styled link primarily used in the HomeHero section.
 *
 * Props:
 * - `to`: The destination URL of the link.
 * - `label`: The visible text of the link.
 */

'use client';
import React from 'react';

import { StyledLink } from './NavLink.style';

interface NavLinkProps {
  to: string;
  label: string;
}

const NavLink: React.FC<NavLinkProps> = ({ to, label }) => {
  return (
    <StyledLink href={to} className="nav-link">
      {label}
    </StyledLink>
  );
};

export default NavLink;
