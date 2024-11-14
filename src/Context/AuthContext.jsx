// AuthContext.js
import React, { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../Firebase";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      //
      if (user) {
        setCurrentUser(user);
        // setLoading(false);
        console.log("user ==>", user);
        //
      } else {
        setCurrentUser(null);
        // setLoading(false);
        console.log("user not found");
      }
    });

    // Clean-up function
    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {!!currentUser && children} 
    </AuthContext.Provider>
  );
}
