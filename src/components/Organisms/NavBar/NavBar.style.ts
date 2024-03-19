/*
 * StyledNavbar Styled Component
 * -----------------------------
 * Description:
 * This file defines the StyledNavbar component using styled-components. It is designed to style the Navbar
 * component, giving it a fixed position at the top of the viewport with a flexible and centered layout.
 * The styling ensures that navigation links within the Navbar are evenly spaced and aligned, contributing
 * to a clean and intuitive user interface.
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
