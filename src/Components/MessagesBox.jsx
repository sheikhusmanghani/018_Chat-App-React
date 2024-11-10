import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { auth, db } from "../Firebase";
import { useEffect, useState } from "react";
import { LeftMsg, RightMsg } from "./left-right-Msg";

const MessagesBox = () => {
  const [messages, setMessages] = useState([]);
  // get messeges
  useEffect(() => {
    const q = query(
      collection(db, "messages"),
      orderBy("createdAt", "asc")
      // where(, "==", )
    );
    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        const documents = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setMessages(documents);
        console.log(documents);
      },
      (error) => {
        console.error("Error in real-time listener:", error);
      }
    );

    // Clean up listener on unmount
    return () => unsubscribe();
  }, []);
  // console.log(auth.currentUser.uid);
  return (
    <div className="allMessagesBox h-full p-3 flex flex-col gap-2 overflow-y-auto">
      {/*  messeges ko show krna rehta hy  , */}
      {messages.map((msg) =>
        // Check if the message belongs to the current user
        msg.senderId === auth.currentUser.uid ? (
          <RightMsg key={msg.id} text={msg.text} letter={msg.username} />
        ) : (
          <LeftMsg key={msg.id} text={msg.text} letter={msg.username} />
        )
      )}
    </div>
  );
};

export default MessagesBox;
