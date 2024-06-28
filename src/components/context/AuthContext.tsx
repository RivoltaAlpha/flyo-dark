import React, { createContext, useState, useContext, ReactNode } from 'react';

interface AuthContextType {
  user: { email: string } | null;
  signIn: (email: string, password: string) => void;
  register: (email: string, password: string) => void;
  signOut: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<{ email: string } | null>(null);

  const signIn = (email: string, password: string) => {
    // Implement sign in logic
    setUser({ email });
  };

  const register = (email: string, password: string) => {
    // Implement registration logic
    setUser({ email });
  };

  const signOut = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, signIn, register, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};
