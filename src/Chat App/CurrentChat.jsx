import DivForImage from "../Components/DivForImage";
import MessagesBox from "../Components/MessagesBox";
import ChatInput from "../Components/ChatInput";
import { auth, db } from "../Firebase";
import { FaTrashCan } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";

const CurrentChat = () => {
  return (
    <div className="flex flex-col justify-between h-full  ">
      {/* 1st child:  navbar of chat  */}
      <div className="chat-navbar">
        <div className="flex justify-between items-center gap-2">
          <DivForImage />
          <div className="text-center">
            <p className="text-black text-lg">ABC</p>
            <p className="text-gray-700 text-sm">Last active 10:00 pm</p>
          </div>
          <div className="  pr-3">
            <FaTrashCan
              className="text-purple-950 text-[25px]"
              // onClick={clearMsgs}
            />
          </div>
        </div>
      </div>
      {/*   2nd child   allMessagesBox */}
      <MessagesBox />
      {/* 3rd child : CHAT-INPUT  */}
      <ChatInput />
    </div>
  );
};

export default CurrentChat;
