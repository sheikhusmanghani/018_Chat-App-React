import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../Firebase";

// get messeges
const MessagesBox = ({ msgText }) => {
  return (
    <div className="allMessagesBox h-full p-3 flex flex-col gap-2">
      {/* leftSideMsg */}
      {/* <div className="leftSideMsg flex ">
        <p className="bg-purple-800 h-[33px] w-[32px] flex justify-center items-center mr-1 rounded-full uppercase">
          A
        </p>
        <p className="bg-purple-800 h-fit py-1 px-2 rounded-xl rounded-ss-none max-w-[400px] text-justify">
          Hii Kese ho..?
        </p>
      </div> */}
      {/* rightSideMsg */}
      <div className="rightSideMsg flex justify-end ">
        <p className="bg-purple-800 py-1 px-2 h-fit rounded-xl rounded-ee-none max-w-[400px] text-justify ">
          {msgText}
        </p>
        <p className="bg-purple-800 h-[33px] w-[32px]  flex justify-center items-center ml-1 rounded-full uppercase  self-end">
          B
        </p>
      </div>
    </div>
  );
};

export default MessagesBox;
