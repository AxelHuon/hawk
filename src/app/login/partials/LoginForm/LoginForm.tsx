/*
 * LoginForm Component
 * -------------------
 * Description:
 * The LoginForm component presents a user interface for login functionality, allowing users to enter their credentials
 * (username and password) and submit them. Styled with a cohesive and engaging design, the form aims to provide a
 * seamless and accessible user experience. This component uses styled-components for layout and aesthetics, ensuring
 * consistency with the application's overall design language.
 *
 * Structure:
 * - `LoginFormContainer`: A styled container that holds the entire form, providing a visually distinct area for user input.
 * - `LoginFormForm`: The actual form element that encapsulates input fields and the submit button, handling the form's layout.
 * - `LoginFormInputWrapper`: Wraps individual input fields, ensuring consistent styling for labels and inputs.
 * - `LoginFormInput`: Styled input fields for user credentials. Includes specialized styles for focus states to enhance usability.
 * - `ButtonLink`: A styled button that acts as the form's submission trigger. It is configured to visually represent the primary
 *   action and can be adapted to perform the login operation, potentially leveraging Next.js navigation capabilities if desired.
 */

'use client';
import React, { useState } from 'react';

import {
  ErrorText,
  LoginFormContainer,
  LoginFormForm,
  LoginFormInput,
  LoginFormInputsWrapper,
  LoginFormInputWrapper,
} from './LoginForm.style';
import ButtonLink from '../../../../components/Atoms/Buttons/ButtonLink/ButtonLink';

import { useAuth } from '../../../../hooks/auth/useAuth';

interface FormLoginProps {
  email: string;
  password: string;
}

const LoginForm: React.FC = () => {
  const [formLogin, setFormLogin] = useState<FormLoginProps>({ email: '', password: '' });
  const { handleLogin, error } = useAuth();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formLogin.email && formLogin.password) {
      handleLogin(formLogin);
    }
  };

  return (
    <LoginFormContainer>
      <LoginFormForm onSubmit={handleSubmit}>
        <h2>Welcome back agent</h2>
        <LoginFormInputsWrapper>
          <LoginFormInputWrapper>
            <label htmlFor="email">Email</label>
            <LoginFormInput
              type="email"
              name="email"
              onChange={(e) => setFormLogin({ ...formLogin, email: e.target.value })}
            />
          </LoginFormInputWrapper>
          <LoginFormInputWrapper>
            <label htmlFor="password">Password</label>
            <LoginFormInput
              type="password"
              name="password"
              onChange={(e) => setFormLogin({ ...formLogin, password: e.target.value })}
            />
          </LoginFormInputWrapper>
        </LoginFormInputsWrapper>
        <ButtonLink theme="primary" href="/login" type="submit">
          Login
        </ButtonLink>
        {error && <ErrorText>{error}</ErrorText>}
      </LoginFormForm>
    </LoginFormContainer>
  );
};

export default LoginForm;
