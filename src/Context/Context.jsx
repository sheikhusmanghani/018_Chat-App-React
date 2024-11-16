import { useState, createContext, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { collection, onSnapshot } from "firebase/firestore";
import { auth, db } from "../Firebase";

export const context = createContext();

const ContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [msgReceiver, setMsgReceiver] = useState(null);

  useEffect(() => {
    setLoading(true); // Ensure loading is true at the start of the fetch

    // user authentication
    const authUnsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
      } else {
        setCurrentUser(null);
      }
    });

    // Fetch usersData from Firestore
    const unsubscribe = onSnapshot(
      collection(db, "users"),
      (snapshot) => {
        const userList = snapshot.docs.map((doc) => ({
          ...doc.data(),
          // userId: doc.id,
        }));
        setUsers(userList);
        setLoading(false); // Data fetch completed
      },
      (error) => {
        console.error("Error fetching users:", error);
        setLoading(false); // Handle errors
      }
    );

    return () => {
      authUnsubscribe();
      unsubscribe();
    };
  }, []);

  return (
    <context.Provider
      value={{ loading, users, currentUser, msgReceiver, setMsgReceiver }}
    >
      {children}
    </context.Provider>
  );
};

export default ContextProvider;
