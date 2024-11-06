import {
  collection,
  getDocs,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { db } from "../Firebase";

const MessagesBox = ({ msgText }) => {
  // get messeges
  const q = query(collection(db, "messages"), orderBy("createdAt"));
  // Setting up real-time listener
  onSnapshot(
    q,
    (snapshot) => {
      const documents = snapshot.docs.map((doc) => ({
        id: doc.id, // Auto-generated ID
        ...doc.data(), // Document fields
      }));
      console.log("Real-time documents:", documents);
    },
    (error) => {
      console.error("Error in real-time listener:", error);
    }
  );
  return (
    <div className="allMessagesBox h-full p-3 flex flex-col gap-2">
      {/*  messeges ko show krna rehta hy  , order by k sath where bhi ...?*/}
    </div>
  );
};

export default MessagesBox;
