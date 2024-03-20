// This file defines a React context (`SessionProviders`) and two components (`SessionProvider` and `useSession`)
// for managing and providing access to the user session state within a React application.
// The `SessionProviders` is used to store and access the state of the logged-in user
// (or null if no user is logged in) across the application.

// `SessionProvider` is a component that wraps its children in its own
// context provider, initializing the user state from `localStorage`
// (if user data is saved there) when the application loads.
// This component is intended to be used at the root of the application's component tree
// to ensure that the session state is accessible everywhere.

// `useSession` is a custom hook that allows components to consume the `SessionProviders`
// to access the user state and the `setUser` function to modify this state.
// This hook simplifies access to the session context and ensures that the context is used
// correctly by throwing an error if `useSession` is called outside of a `SessionProvider`,
// thus ensuring that the session state is always provided reliably.

// This context and provider system is useful for managing authentication and session state
// in complex applications, by allowing easy and centralized access to the state of the logged-in user.

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
    if (!user) {
      const userData = localStorage.getItem('userData');
      if (userData) {
        setUser(JSON.parse(userData));
      } else {
        setUser(null);
      }
    }
  }, [user]);

  return <SessionContext.Provider value={{ user, setUser }}>{children}</SessionContext.Provider>;
};

export const useSession = () => {
  const context = useContext(SessionContext);
  if (context === undefined) {
    throw new Error('useSession must be used within a SessionProvider');
  }
  return context;
};
