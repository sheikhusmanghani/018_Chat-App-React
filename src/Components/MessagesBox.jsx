import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { auth, db } from "../Firebase";
import { useEffect, useState } from "react"; 

const MessagesBox = () => {
  return (
    <div className="allMessagesBox h-full p-3 flex flex-col gap-2 overflow-y-auto">
   

      {/*  messeges ko show krna rehta hy  , */}
      {/* {messages.map((msg) =>
        // Check if the message belongs to the current user
        msg.senderId === auth.currentUser.uid ? (
          <RightMsg key={msg.id} text={msg.text} letter={msg.username} />
        ) : (
          <LeftMsg key={msg.id} text={msg.text} letter={msg.username} />
        )
      )} */}
    </div>
  );
};

export default MessagesBox;
