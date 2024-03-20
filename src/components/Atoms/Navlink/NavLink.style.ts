/*
 * StyledLink Style Component
 * --------------------------
 * Description:
 * This file contains the styles for the NavLink component, used for navigation links within the application.
 * It defines the basic visual style of the links, including color, decoration, padding, and transitions.
 */

import styled from 'styled-components';

export const StyledLink = styled.div`
  a {
    color: #fff;
    text-decoration: none;
    padding: 1rem;
    transition: 0.5s;
    font-family: 'ModernWarfare', sans-serif;

    &:hover {
      color: #000;
    }
  }
`;
