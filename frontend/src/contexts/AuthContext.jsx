import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const signIn = async (email, password) => {
    setLoading(true);

    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Mock authentication
    if (email && password) {
      const mockUser = {
        id: 'user1',
        email: email,
        created_at: new Date().toISOString(),
      };
      setUser(mockUser);
    } else {
      throw new Error('Invalid email or password');
    }

    setLoading(false);
  };

  const signUp = async (email, password) => {
    setLoading(true);

    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Mock registration
    if (email && password) {
      const mockUser = {
        id: 'user1',
        email: email,
        created_at: new Date().toISOString(),
      };
      setUser(mockUser);
    } else {
      throw new Error('Invalid email or password');
    }

    setLoading(false);
  };

  const signOut = async () => {
    setUser(null);
  };

  const value = {
    user,
    loading,
    signIn,
    signUp,
    signOut,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
