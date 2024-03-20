/*
 * LoginForm Styles
 * ----------------
 * Description:
 * This file (`LoginForm.styles.ts`) contains styled-components for the LoginForm component, defining the visual
 * appearance and layout of the login form and its elements. The styling aims to create a user-friendly, aesthetically
 * pleasing login interface, with a focus on readability, ease of use, and thematic consistency with the application's design.
 */

import styled from 'styled-components';

export const LoginFormContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;

  background-image: url('/images/background-login.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  z-index: 1;

  width: 100%;
  height: 100vh;
`;
export const LoginFormForm = styled.form`
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  background-color: #111;

  h2 {
    color: #fff;
    font-size: 16px;
    font-family: 'ModernWarfare', sans-serif;
  }
`;

export const LoginFormInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  width: 100%;
  max-width: 80%;
  margin: 0 auto;
  gap: 8px;

  label {
    color: #760a0a;
    font-size: 12px;
    font-family: 'ModernWarfare', sans-serif;
  }
`;

export const LoginFormInput = styled.input`
  padding: 8px;
  border: none;
  background-color: rgba(105, 105, 105, 0.35);
  color: #fff;
  font-size: 12px;

  letter-spacing: 3px;

  &:focus {
    outline: none;
  }
`;
