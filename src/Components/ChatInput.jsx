import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { VscSend } from "react-icons/vsc";
import { auth, db } from "../Firebase";
import { useContext } from "react";
import { ChatContext } from "../Context/ChatContext";

const ChatInput = () => {
  //
  const sendMsg = async (e) => {
    //
    e.preventDefault();
    try {
      const message = e.target.elements.message.value;
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <form className="flex p-2" onSubmit={sendMsg}>
      <input
        type="text"
        name="message"
        placeholder="Enter Your Message..."
        required
        className="w-full  rounded-full py-2 px-3 text-black focus:outline-purple-500   "
      />
      <button
        type="submit"
        className="rounded-full px-2 ml-2 text-white sendMsgBtn"
      >
        <VscSend />
      </button>
    </form>
  );
};

export default ChatInput;
