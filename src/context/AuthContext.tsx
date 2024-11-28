import React, { createContext, useContext, useState, ReactNode } from 'react';

type AuthContextType = {
    user: {
      userId: number;
      username: string;
     
    } | null;
    setUser: (user: { userId: number; username: string;}) => void;
  };

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<{  userId: number; username: string  } | null>(null);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
