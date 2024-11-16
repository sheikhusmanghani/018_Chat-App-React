import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { VscSend } from "react-icons/vsc"; // send icon
import { auth, db } from "../Firebase";
import { useContext } from "react";
import { context } from "../Context/Context";

const ChatInput = () => {
  const { currentUser, msgReceiver } = useContext(context);
  // console.log(">>>", currentUser.uid, msgReceiver.userId); // ok
  //
  const sendMsg = async (e) => {
    e.preventDefault();
    try {
      const message = e.target.elements.message.value;
      e.target.reset(); // input clean

      // if (!message || message === " ") return; // to ignore on false or empty message

      // send message
      const res = await addDoc(collection(db, "messages"), {
        text: message,
        sentAt: serverTimestamp(),
        senderUid: currentUser.uid,
        receiverUid: msgReceiver.userId,
      });
      console.log(res);
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
