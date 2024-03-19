/*
 * StyledButtonList Styled Component
 * ----------------------------------
 * Description:
 * Defines the styling for the ButtonList component container. This styling is responsible for
 * arranging the Button components within the list, ensuring they are displayed in a flex row,
 * centered, and evenly spaced. It provides a visually consistent layout for groups of buttons.
 *
 * Usage:
 * To apply this styled component, import `StyledButtonList` into the file where the ButtonList component is defined.
 * Wrap the Button components with `StyledButtonList` to ensure they inherit the defined styling rules.
 */

import styled from 'styled-components';

export const StyledButtonList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
`;
