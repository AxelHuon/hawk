'use client';
import { useState } from 'react';

interface useAuthProps {
  handleLogin: (userParams: handleLoginProps) => void;
  message: string | null;
  getCurrentUser: () => User | null;
  handleLogout: () => void;
}

export const useAuth = (): useAuthProps => {
  const [message, setMessage] = useState<string | null>(null);
  const [currentUser, setCurrentUser] = useState<User | null>();
  const handleLogin = async (userParams: handleLoginProps) => {
    const response = await import('@/data/users/users');
    const userFound = response.users.find(
      (user) => user.email === userParams.email && user.password === userParams.password,
    );
    if (userFound) {
      console.log('login');
      setMessage(null);
      localStorage.setItem('userData', JSON.stringify(userFound));
      return;
    } else {
      setMessage("L'email ou le mot de passe n'est pas bon");
      return;
    }
  };

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

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem('userData');
  };

  return {
    handleLogin,
    message,
    getCurrentUser,
    handleLogout,
  };
};
