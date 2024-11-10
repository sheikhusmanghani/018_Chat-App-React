import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../Firebase";
import { createContext } from "react";

export const ChatContext = createContext();
const ChatProvider = ({ children }) => {
  // Add your chat context provider implementation here
  const [users, setUsers] = useState([]);
  const [msgReceiver, setMsgReceiver] = useState([]);

  //
  useEffect(() => {
    const q = query(collection(db, "users"), orderBy("createdAt"));
    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        const documents = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setUsers(documents);
      },
      (error) => {
        console.error("Error in real-time listener:", error);
      }
    );
    // Clean up listener on unmount
    return () => unsubscribe();
  }, []);

  return (
    <ChatContext.Provider
      value={{ users, setUsers, msgReceiver, setMsgReceiver }}
    >
      {children}
    </ChatContext.Provider>
  );
};

export default ChatProvider;
