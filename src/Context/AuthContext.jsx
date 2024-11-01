import { onAuthStateChanged } from "firebase/auth";
import React, { createContext, useState } from "react";
import { auth } from "../Firebase";

export const authContext = createContext();

const AuthProvider = ({ children }) => {
  const [isloggedin, setisloggedin] = useState(false);
  //
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
    } else {
      // console.log("User is signed out"); // infinite loop
    }
  });

  return (
    <authContext.Provider value={{ isloggedin, setisloggedin }}>
      {children}
    </authContext.Provider>
  );
};

export default AuthProvider;
