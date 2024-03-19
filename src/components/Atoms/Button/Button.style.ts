/*
 * StyledButton Styled Component
 * -----------------------------
 * Description:
 * This file defines the StyledButton component using styled-components. It supports theming with
 * 'primary' and 'secondary' options, allowing for visual differentiation based on usage context.
 * The component is designed to be flexible, providing a consistent look and feel across the application
 * while allowing for specific theming as needed.
 *
 * StyledButtonProps:
 * - `theme`: Determines the button's visual theme. This can be either 'primary' or 'secondary',
 *    affecting the button's background color and text color.
 *
 * Usage:
 * Import the StyledButton into your component to use it as a styled button element. The `theme` prop
 * controls the button's appearance, allowing for customization while maintaining consistency in design.
 */

import styled, { css } from 'styled-components';

interface StyledButtonProps {
  theme: 'primary' | 'secondary';
}

export const StyledButton = styled.button<StyledButtonProps>`
  padding: 10px;
  cursor: pointer;
  border: none;
  font-family: 'ModernWarfare', sans-serif;

  ${(props) =>
    props.theme === 'primary' &&
    css`
      background-color: #760a0a;
      color: #fff;
    `}
  ${(props) =>
    props.theme === 'secondary' &&
    css`
      background-color: transparent;
      color: #fff;
    `}
  &:hover {
    opacity: 0.8;
  }
`;
