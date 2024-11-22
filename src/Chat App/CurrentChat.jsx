import DivForImage from "../Components/DivForImage";
import MessagesBox from "../Components/MessagesBox";
import ChatInput from "../Components/ChatInput";
import { FaTrashCan } from "react-icons/fa6";
import { useContext } from "react";
import { context } from "../Context/Context";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../Firebase";

const CurrentChat = () => {
  const { msgReceiver, currentUser } = useContext(context);

  const clearAllMsgs = async () => {
    // const a=  await deleteDoc(doc(db, "messages", chatId));
    console.log("xxxxx");
  };

  return (
    // Condition for receiver
    msgReceiver ? (
      <div className="flex flex-col justify-between h-full">
        {/* 1st child: Navbar of chat */}
        <div className="chat-navbar">
          <div className="flex justify-between items-center gap-2">
            <DivForImage />
            <div className="text-center">
              <p className="text-black text-lg uppercase font-bold">
                {msgReceiver.name}
              </p>
              {/* <p className="text-gray-700 text-sm">Last active 10:00 pm</p> */}
            </div>
            <div className="pr-3">
              <FaTrashCan
                className="text-purple-950 text-[25px]"
                onClick={clearAllMsgs}
              />
            </div>
          </div>
        </div>
        {/* 2nd child: All messages box */}
        <MessagesBox />
        {/* 3rd child: Chat input */}
        <ChatInput />
      </div>
    ) : (
      // jab receiver selected nhi hoga to...
      <div className="flex items-center justify-center h-full text-2xl font-bold text-purple-950 text-center">
        No message receiver selected
      </div>
    )
  );
};

export default CurrentChat;
