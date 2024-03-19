/*
 * ButtonList Component
 * --------------------
 * Description:
 * The ButtonList component dynamically renders a list of buttons based on provided props. Each button
 * can have its own label and theme ('primary' or 'secondary'), allowing for a diverse range of buttons
 * within a single cohesive component. This component is particularly useful for grouping actions or
 * choices in a consistent, visually appealing manner.
 *
 * Props:
 * - `buttons`: An array of objects, where each object represents a button to be rendered. Each object
 *   includes a `label` for the button's visible text and an optional `theme` that can be 'primary' or
 *   'secondary' to specify the button's styling.
 *
 * Usage:
 * This component can be utilized wherever a collection of actions or navigational links is required.
 * By providing an array of button configurations, ButtonList simplifies the process of rendering
 * multiple buttons with varied functionalities or appearances.
 *
 */

'use client';
import React from 'react';
import { StyledButtonList } from './ButtonList.style';

import Button from '../../Atoms/Button/Button';

interface ButtonListProps {
  buttons: Array<{
    label: string;
    theme?: 'primary' | 'secondary';
  }>;
}

const ButtonList: React.FC<ButtonListProps> = ({ buttons }) => {
  return (
    <StyledButtonList>
      {buttons.map((button, index) => (
        <Button key={index} theme={button.theme}>
          {button.label}
        </Button>
      ))}
    </StyledButtonList>
  );
};

export default ButtonList;
