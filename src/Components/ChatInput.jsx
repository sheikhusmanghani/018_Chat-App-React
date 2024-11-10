import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { VscSend } from "react-icons/vsc";
import { auth, db } from "../Firebase";

const ChatInput = () => {
  //
  const sendMsg = async (e) => {
    e.preventDefault();
    try {
      const message = e.target.elements.message.value;
      if (!message || message === " ") return; // to ignore on false or empty message
      e.target.elements.message.value = ""; // clear input field
      // sending message
      await addDoc(collection(db, "messages"), {
        text: message,
        createdAt: serverTimestamp(),
        senderId: auth.currentUser.uid,
        // receiver:  ,
        username: auth.currentUser.displayName,
      });
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
