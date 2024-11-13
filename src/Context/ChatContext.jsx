import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../Firebase";
import { createContext } from "react";

export const ChatContext = createContext();
const ChatProvider = ({ children }) => {
  return <ChatContext.Provider value={""}>{children}</ChatContext.Provider>;
};

export default ChatProvider;
