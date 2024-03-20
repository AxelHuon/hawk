'use client';
import { useState } from 'react';
import { useSession } from '@/providers/SessionProviders/SessionContext';
import { useRouter } from 'next/navigation';

/* The `useAuth` hooks is designed to manage authentication state. It provides a set of functionalities
 * to handle login and logout. The hooks utilize local storage to persist user data
 * across sessions, offering a simplified mock authentication flow. It defines an interface for its return type and for the parameters
 * it expects. The hooks internally manages an error state to handle authentication errors and a current user state to keep track of the
 * logged-in user.
 */

interface handleLoginProps {
  email: string;
  password: string;
}

interface useAuthProps {
  handleLogin: (userParams: handleLoginProps) => void;
  error: string | null;
  handleLogout: () => void;
}

export const useAuth = (): useAuthProps => {
  /*Import setUser dispatch function from useSession to setUser found in handleLogin or clear current user logged in handleLogout*/
  const { setUser } = useSession();
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  // The `handleLogin` function asynchronously validates user credentials against a mock data file.
  // Upon successful validation, it stores the user data in local storage and updates the state.
  // In case of failure, it sets an error message.a
  const handleLogin = async (userParams: handleLoginProps) => {
    const response = await import('@/data/users/users');
    const userFound = response.users.find(
      (user) => user.email === userParams.email && user.password === userParams.password,
    );
    if (userFound) {
      console.log('login');
      setError(null);
      localStorage.setItem('userData', JSON.stringify(userFound));
      setUser(userFound);
      router.push('/game');
      return;
    } else {
      setError("L'email ou le mot de passe n'est pas bon");
      return;
    }
  };

  // The `handleLogout` function clears the current user from the state and removes
  // the user data from local storage, effectively logging the user out.
  const handleLogout = () => {
    localStorage.removeItem('userData');
    setUser(null);
  };

  return {
    handleLogin,
    error,
    handleLogout,
  };
};
