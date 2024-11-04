### Previous Tasks

    * Page refresh ko solve krna hy
    * Send message ka krna hy

### Step 4: Firestore mein Messages Save aur Retrieve karo

1. Firestore ke messages ke liye aik collection banao. Yahan hum "messages" collection use karenge.
2. **Send Message** function likho jo user ka message Firestore mein store kare:

   ```javascript
   import { collection, addDoc, serverTimestamp } from "firebase/firestore";
   import { db, auth } from "./firebase";

   const sendMessage = async (message) => {
     if (!message) return;
     await addDoc(collection(db, "messages"), {
       text: message,
       createdAt: serverTimestamp(),
       uid: auth.currentUser.uid,
       displayName: auth.currentUser.displayName,
       photoURL: auth.currentUser.photoURL,
     });
   };
   ```

3. **Retrieve Messages** function likho jo messages ko Firestore se real-time update ke sath fetch kare. Firestore ke `onSnapshot` listener se live updates le sakte hain:

   ```javascript
   import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
   import { db } from "./firebase";

   const getMessages = (callback) => {
     const q = query(collection(db, "messages"), orderBy("createdAt"));
     onSnapshot(q, (snapshot) => {
       const messages = snapshot.docs.map((doc) => ({
         id: doc.id,
         ...doc.data(),
       }));
       callback(messages);
     });
   };
   ```

### Step 5: UI mein Messages ko Display karo aur Send Message Functionality ko Attach karo

1. Tumhara UI component mein aik `useState` aur `useEffect` ka use karke messages ko render karo.
2. Message send hone par `sendMessage` function ko call karo aur user ka input clear karo.

   ```javascript
   import { useState, useEffect } from "react";
   import { sendMessage, getMessages } from "./firebaseService";

   const ChatRoom = () => {
     const [message, setMessage] = useState("");
     const [messages, setMessages] = useState([]);

     useEffect(() => {
       getMessages(setMessages);
     }, []);

     const handleSendMessage = (e) => {
       e.preventDefault();
       sendMessage(message);
       setMessage("");
     };

     return (
       <div className="chat-room">
         <div className="messages">
           {messages.map((msg) => (
             <div key={msg.id} className="message">
               <img src={msg.photoURL} alt={msg.displayName} />
               <p>{msg.text}</p>
             </div>
           ))}
         </div>
         <form onSubmit={handleSendMessage}>
           <input
             type="text"
             value={message}
             onChange={(e) => setMessage(e.target.value)}
             placeholder="Type a message"
           />
           <button type="submit">Send</button>
         </form>
       </div>
     );
   };
   ```

### Step 6: CSS Styling with Tailwind (Optional)

Ab tum Tailwind CSS classes ko use karke apne chat app ko style kar sakte ho.

### Complete Flow Summary

1. Firebase configuration aur initialization.
2. Google authentication.
3. Messages ko Firestore mein save aur retrieve karo.
4. Messages ko UI pe display aur message sending functionality add karo.

Agar tumhain aur kisi specific feature mein madad chahiye, tau batao!
