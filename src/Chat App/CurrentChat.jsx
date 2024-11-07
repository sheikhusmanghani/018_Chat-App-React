import React from "react";
import DivForImage from "../Components/DivForImage";
import { VscSend } from "react-icons/vsc";
import MessagesBox from "../Components/MessagesBox";
import ChatInput from "../Components/ChatInput";

const CurrentChat = () => {
  return (
    <div className="flex flex-col justify-between h-full  ">
      {/* 1st child:  navbar of chat  */}
      <div className="chat-navbar">
        <div className="flex justify-between items-center gap-2">
          <DivForImage />
          <div className="text-center">
            <p className="text-black text-lg">User Name</p>
            <p className="text-gray-700 text-sm">Last active 10:00 pm</p>
          </div>
          <div className="  pr-3">
            <span className="text-purple-950  text-[40px]">&#9990;</span>
          </div>
        </div>
      </div>
      {/*  allMessagesBox */}
      <MessagesBox />
      {/* 2nd child : CHAT-INPUT  */}
      <ChatInput />
    </div>
  );
};

export default CurrentChat;
