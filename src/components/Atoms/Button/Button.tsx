/*
 * Button Component
 * ----------------
 * Description:
 * The Button component is a reusable UI element that supports theming and user interaction. It is styled
 * via styled-components and can be customized with a 'primary' or 'secondary' theme. The component is
 * designed to be flexible and easily integrated into various parts of an application.
 *
 * Props:
 * - `theme`: Optional. Determines the button's theme. Accepts 'primary' or 'secondary'. Defaults to 'primary'.
 * - `onClick`: Optional. A callback function that is called when the button is clicked.
 * - `children`: The content to be displayed inside the button. Can be text, icons, or any React node.
 */

'use client';
import React from 'react';
import { StyledButton } from './Button.style';

type ButtonProps = {
  theme?: 'primary' | 'secondary';
  onClick?: () => void;
  children: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({ theme = 'primary', onClick, children }) => {
  return (
    <StyledButton theme={theme} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default Button;
