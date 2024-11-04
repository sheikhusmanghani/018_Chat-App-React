import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { VscSend } from "react-icons/vsc";
import { auth, db } from "../Firebase";

const ChatInput = () => {
  //
  const sendMsg = async (e) => {
    e.preventDefault();
    try {
      const message = e.target.elements.message.value;
      if (!msg) return; // i dont know
      // console.log(message);
      const msgData = await addDoc(collection(db, "messages"), {
        text: msg,
        createdAt: serverTimestamp(),
        uid: auth.currentUser.uid,
        // displayName: auth.currentUser.displayName,
        // photoURL: auth.currentUser.photoURL,
      });
      console.log(msgData);
    } catch (e) {
      console.log(e);
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
        className="rounded-full px-2 ml-2 text-white bg-gradient-to-r from-purple-500  to-purple-700 hover:bg-gradient-to-br "
      >
        <VscSend />
      </button>
    </form>
  );
};

export default ChatInput;
