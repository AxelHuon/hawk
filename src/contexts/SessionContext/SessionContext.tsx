'use client';
import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react';

interface SessionContextProps {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
}

const SessionContext = createContext<SessionContextProps | undefined>(undefined);

interface SessionProviderProps {
  children: ReactNode;
}

export const SessionProvider = ({ children }: SessionProviderProps) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const userData = localStorage.getItem('userData');
    if (userData) {
      setUser(JSON.parse(userData));
    } else {
      setUser(null);
    }
  }, []);

  return <SessionContext.Provider value={{ user, setUser }}>{children}</SessionContext.Provider>;
};

export const useSession = () => {
  const context = useContext(SessionContext);
  if (context === undefined) {
    throw new Error('useSession must be used within a SessionProvider');
  }
  return context;
};
