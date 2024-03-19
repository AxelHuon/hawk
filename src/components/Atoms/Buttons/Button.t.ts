/*
 * Common Button Types
 * -------------------
 * Description:
 * This file (`button.t.ts`) defines common types and interfaces used across different button components within the application.
 * By centralizing these definitions, the file ensures consistency and reusability of button-related properties such as themes.
 *
 * Types:
 * - `themeType`: Defines the possible theme options for buttons. This type is used to specify the visual
 *    theme of a button, allowing components to be customized with 'primary' or 'secondary' styling.
 *    The `themeType` is widely used in button components to apply consistent styling and behavior
 *    based on the theme selected.
 */

export type themeType = 'primary' | 'secondary';
