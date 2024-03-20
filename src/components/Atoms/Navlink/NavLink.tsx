/*
 * NavLink Component
 * -----------------
 * Description:
 * This component is used for navigation links within the application.
 * It renders a styled link primarily used in the HomeHero section.
 *
 * Props:
 * - `to`: The destination URL of the link.
 * - `label`: The visible text of the link.
 */

/* change component for use Link from next/link */

'use client';
import React from 'react';

import Link from 'next/link';

import { StyledLink } from './NavLink.style';

interface NavLinkProps {
  href: string;
  label: string;
}

const NavLink: React.FC<NavLinkProps> = ({ href, label }) => {
  return (
    <StyledLink>
      <Link href={href}>{label}</Link>
    </StyledLink>
  );
};

export default NavLink;
