/*
 * ButtonLink Component
 * --------------------
 * Description:
 * The ButtonLink component is a versatile UI element that can function both as a clickable button and as a link for navigation within a Next.js application. It supports theming, user interaction, and conditional rendering based on its props. Styled with styled-components, it offers customization with 'primary' or 'secondary' themes. This component is designed for flexibility and seamless integration across various parts of an application, ensuring consistent styling and behavior.
 *
 * Props:
 * - `theme`: Optional. Specifies the button's theme, with 'primary' or 'secondary' as possible values. Defaults to 'primary'.
 * - `onClick`: Optional. A callback function that is invoked when the button is clicked. Useful for button actions.
 * - `children`: Required. Defines the content inside the button, which can include text, icons, or any React nodes.
 * - `href`: Optional. The URL to navigate to when the component is used as a link. Requires `isNextLink` to be `true`.
 * - `isNextLink`: Optional. A boolean that determines whether the component should render as a Next.js link. Defaults to `true`. When set to `true` and `href` is provided, the component renders using Next.js's `Link` component for client-side navigation.
 */

'use client';
import React from 'react';
import Link from 'next/link';
import { StyledButton } from './ButtonLink.style';
import { themeType } from '../Button.t';

type ButtonProps = {
  theme?: themeType;
  onClick?: () => void;
  children: React.ReactNode;
  href?: string;
  isNextLink?: boolean;
};

const ButtonLink: React.FC<ButtonProps> = ({
  theme = 'primary',
  onClick,
  children,
  href,
  isNextLink = true,
}) => {
  if (isNextLink && href) {
    return (
      <Link href={href} passHref>
        <StyledButton theme={theme} onClick={onClick}>
          {children}
        </StyledButton>
      </Link>
    );
  }

  return (
    <StyledButton theme={theme} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default ButtonLink;
