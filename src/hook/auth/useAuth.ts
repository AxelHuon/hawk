'use client';
import { useState } from 'react';

/* The `useAuth` hook is designed to manage authentication state. It provides a set of functionalities
 * to handle login, logout, and to retrieve the current user's information. The hook utilizes local storage to persist user data
 * across sessions, offering a simplified mock authentication flow. It defines an interface for its return type and for the parameters
 * it expects. The hook internally manages an error state to handle authentication errors and a current user state to keep track of the
 * logged-in user.
 */

interface useAuthProps {
  handleLogin: (userParams: handleLoginProps) => void;
  error: string | null;
  getCurrentUser: () => User | null;
  handleLogout: () => void;
}

export const useAuth = (): useAuthProps => {
  const [error, setError] = useState<string | null>(null);
  const [currentUser, setCurrentUser] = useState<User | null>();

  // The `handleLogin` function asynchronously validates user credentials against a mock data file.
  // Upon successful validation, it stores the user data in local storage and updates the state.
  // In case of failure, it sets an error message.
  const handleLogin = async (userParams: handleLoginProps) => {
    const response = await import('@/data/users/users');
    const userFound = response.users.find(
      (user) => user.email === userParams.email && user.password === userParams.password,
    );
    if (userFound) {
      console.log('login');
      setError(null);
      localStorage.setItem('userData', JSON.stringify(userFound));
      return;
    } else {
      setError("L'email ou le mot de passe n'est pas bon");
      return;
    }
  };

  // The `getCurrentUser` function checks if a user is already set in the state,
  // otherwise, it attempts to retrieve the user's information from local storage.
  // This allows the application to persist the user's logged-in state across sessions.
  const getCurrentUser = (): User | null => {
    if (currentUser) {
      return currentUser;
    } else {
      const userData = localStorage?.getItem('userData');
      if (userData) {
        return JSON.parse(userData);
      }
    }
    return null;
  };

  // The `handleLogout` function clears the current user from the state and removes
  // the user data from local storage, effectively logging the user out.
  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem('userData');
  };

  return {
    handleLogin,
    error,
    getCurrentUser,
    handleLogout,
  };
};
