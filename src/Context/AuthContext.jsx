// src/context/AuthProvider.js
import React, { createContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../Firebase";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isloggedin, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Firebase listener to monitor authentication state
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsLoggedIn(!!user); //   true if user is logged in
      setLoading(false); // Loading complete
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Show loading while checking auth state
  }

  return (
    <AuthContext.Provider value={{ isloggedin }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
