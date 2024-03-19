/*
 * StyledNavbar Styled Component
 * -----------------------------
 * Description:
 * This file defines the StyledNavbar component using styled-components. It is designed to style the Navbar
 * component, giving it a fixed position at the top of the viewport with a flexible and centered layout.
 * The styling ensures that navigation links within the Navbar are evenly spaced and aligned, contributing
 * to a clean and intuitive user interface.
 *
 * Usage:
 * To apply this styled component, import `StyledNavbar` into your Navbar component file and use it as a wrapper
 * for the Navbar's content. This approach separates the concerns of styling and functionality, allowing for
 * easier maintenance and adjustments.
 */

import styled from 'styled-components';

export const StyledNavbar = styled.nav`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 30px 10px 10px 10px;
  color: #fff;
  gap: 40px;
`;
