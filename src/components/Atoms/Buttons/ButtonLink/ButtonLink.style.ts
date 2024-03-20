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
 */

import styled, { css } from 'styled-components';
import { themeType } from '../Button.t';

export const StyledButton = styled.button<{ theme: themeType }>`
  padding: 10px;
  cursor: pointer;
  border: none;
  font-family: 'ModernWarfare', sans-serif;
  width: fit-content;

  margin: 0 auto;

  a {
    text-decoration: none;
  }

  ${(props) =>
    props.theme === 'primary' &&
    css`
      background-color: #760a0a;
      a {
        color: #fff;
      }
    `}
  ${(props) =>
    props.theme === 'secondary' &&
    css`
      background-color: transparent;
      a {
        color: #fff;
      }
    `}
  &:hover {
    opacity: 0.8;
  }
`;
