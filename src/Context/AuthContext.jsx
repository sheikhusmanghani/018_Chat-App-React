// src/context/AuthProvider.js
import React, { createContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../Firebase";
import Loader from "../Components/Loader";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  return <AuthContext.Provider value={""}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
