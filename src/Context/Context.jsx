import { useState, createContext, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { collection, getDocs, query, where } from "firebase/firestore";
import { auth, db } from "../Firebase";

export const context = createContext();

const ContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [msgReceiver, setMsgReceiver] = useState(null);

  // user authentication
  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        setCurrentUser(user);
        getUsersFromDatabase(user.email);
      } else {
        setCurrentUser(null);
      }
    });
  }, []);

  // getting users
  async function getUsersFromDatabase(email) {
    const users = [];

    const q = query(collection(db, "users"), where("email", "!=", email));

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      const user = { ...doc.data(), id: doc.id };
      users.push(user);
      console.log("users => ", users);
    });

    setLoading(false); // Data fetch completed
    setUsers(users);
  }

  return (
    <context.Provider
      value={{
        loading,
        users,
        currentUser,
        msgReceiver,
        setMsgReceiver,
        setCurrentUser,
      }}
    >
      {children}
    </context.Provider>
  );
};

export default ContextProvider;
