import {
  collection,
  onSnapshot,
  query,
  where,
  orderBy,
} from "firebase/firestore";
import { useContext, useEffect, useState } from "react";
import { context } from "../Context/Context";
import { db } from "../Firebase";
import { RightMsg, LeftMsg } from "./left-right-Msg";
import Loader from "./Loader";

const MessagesBox = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const { currentUser, msgReceiver } = useContext(context);

  // console.log(msgReceiver, currentUser);

  useEffect(() => {
    if (!currentUser || !msgReceiver) return;

    const chatId =
      currentUser.uid < msgReceiver.userId
        ? `${currentUser.uid}_${msgReceiver.userId}`
        : `${msgReceiver.userId}_${currentUser.uid}`;

    const messagesQuery = query(
      collection(db, "messages"),
      where("chatId", "==", chatId),
      orderBy("sentAt")
    );

    const unsubscribe = onSnapshot(messagesQuery, (snapshot) => {
      const docs = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setMessages(docs);
      setLoading(false); // Data fetch completed
    });

    return () => {
      setLoading(true); // loading hogi jb new chat open hogi
      unsubscribe();
    };
  }, [currentUser, msgReceiver]);

  if (loading) {
    return (
      <div className="h-full flex items-center justify-center">
        <Loader />
      </div>
    );
  }

  return (
    <div className="allMessagesBox h-full p-3 flex flex-col gap-2 overflow-y-auto">
      {/* if no msg yet */}
      {messages.length == 0 && (
        <div className="flex items-center h-full justify-center text-center text-purple-950 font-bold capitalize">
          You haven't talked to him yet.
        </div>
      )}

      {messages?.map((msg) =>
        msg.senderUid === currentUser.uid ? (
          <RightMsg text={msg.text} key={msg.id} />
        ) : (
          <LeftMsg text={msg.text} key={msg.id} />
        )
      )}
    </div>
  );
};

export default MessagesBox;
