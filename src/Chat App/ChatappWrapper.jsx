import { useContext } from "react";
import AllChats from "./AllChats";
import CurrentChat from "./CurrentChat";
import { context } from "../Context/Context";

const ChatappWrapper = () => {
  const { currentUser } = useContext(context);
  // console.log(currentUser.uid);// ok

  return (
    <div className="w-[80vw] h-[85vh] grid grid-rows-5 md:grid-rows-1 md:grid-cols-3  my-3 border rounded-md overflow-hidden">
      <div className="allChats row-span-1 md:col-span-1 overflow-auto ">
        <AllChats />
      </div>
      <div className="currentChat row-span-4 md:col-span-2 md:border-l-2 md:border-purple-900">
        <CurrentChat />
      </div>
    </div>
  );
};

export default ChatappWrapper;
