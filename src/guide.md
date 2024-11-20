navbar me msg receiver k first alphabets aaygy
right clcik pr options div

--------------------------------- Add Data -------------------------------

### 1. `addDoc` Method

Ye method aik **new document** ko automatically generated ID ke saath kisi collection me add karta hai.

**Example:**

```javascript
import { db } from "./firebase"; // Apna initialized Firebase config
import { collection, addDoc } from "firebase/firestore";

async function addData() {
  try {
    const docRef = await addDoc(collection(db, "users"), {
      name: "John Doe",
      age: 25,
      email: "johndoe@example.com",
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}
```

### 2. `setDoc` Method

Agar tumhe aik specific ID ke sath document add karna ho ya overwrite karna ho to tum `setDoc` use kar sakte ho.

**Example:**

```javascript
import { db } from "./firebase";
import { doc, setDoc } from "firebase/firestore";

async function addOrUpdateData() {
  try {
    const docRef = doc(db, "users", "uniqueUserID"); // "uniqueUserID" ko apni desired ID se replace karo
    await setDoc(docRef, {
      name: "Jane Doe",
      age: 30,
      email: "janedoe@example.com",
    });
    console.log("Document successfully written!");
  } catch (e) {
    console.error("Error writing document: ", e);
  }
}
```

> **Note**: Agar ye document pehle se mojood hai, to ye overwrite ho jata hai. Agar tumhe update karna ho bina overwrite kiye, to tum `updateDoc` ka use kar sakte ho.

### 3. `updateDoc` Method

Agar tumhe existing document ke kuch fields ko update karna ho bina puri document overwrite kiye, to `updateDoc` use karo. Ye method sirf us document ko update karega jo pehle se mojood hai.

**Example:**

```javascript
import { db } from "./firebase";
import { doc, updateDoc } from "firebase/firestore";

async function updateData() {
  try {
    const docRef = doc(db, "users", "uniqueUserID");
    await updateDoc(docRef, {
      age: 31, // Sirf age field ko update kar raha hai
    });
    console.log("Document successfully updated!");
  } catch (e) {
    console.error("Error updating document: ", e);
  }
}
```

### 4. `merge` Option with `setDoc`

Agar tum kisi document ko add karte waqt ye chahte ho ke wo sirf naye fields ko add kare aur jo fields pehle se mojood hain unko na overwrite kare, to tum `setDoc` ke saath `{ merge: true }` option use kar sakte ho.

**Example:**

```javascript
import { db } from "./firebase";
import { doc, setDoc } from "firebase/firestore";

async function addOrMergeData() {
  try {
    const docRef = doc(db, "users", "uniqueUserID");
    await setDoc(
      docRef,
      {
        phone: "123-456-7890",
      },
      { merge: true }
    );
    console.log("Document merged successfully!");
  } catch (e) {
    console.error("Error merging document: ", e);
  }
}
```

### 5. Batched Writes (Bulk Data)

Agar tum multiple documents ko aik hi waqt add/update/delete karna chahte ho, to `writeBatch` ka use kar sakte ho. Ye ek atomic operation hota hai, yaani ya to sab kuch execute hoga ya kuch bhi nahi.

**Example:**

```javascript
import { db } from "./firebase";
import { writeBatch, doc } from "firebase/firestore";

async function batchWrite() {
  const batch = writeBatch(db);

  // Pehla document add karna
  const docRef1 = doc(db, "users", "user1");
  batch.set(docRef1, { name: "User One", age: 20 });

  // Dosra document update karna
  const docRef2 = doc(db, "users", "user2");
  batch.update(docRef2, { age: 21 });

  // Teesra document delete karna (extra example)
  const docRef3 = doc(db, "users", "user3");
  batch.delete(docRef3);

  try {
    await batch.commit();
    console.log("Batch write succeeded.");
  } catch (e) {
    console.error("Error executing batch write: ", e);
  }
}
```

-------------------------- Get Data --------------------------------

### 1. `getDoc` Method (Single Document)

Agar tum kisi specific document ko **get** karna chahte ho, to `getDoc` method ka use karo. Ye method aik document ko **ID ke zariye retrieve** karta hai.

**Example:**

```javascript
import { db } from "./firebase";
import { doc, getDoc } from "firebase/firestore";

async function getSingleDocument() {
  const docRef = doc(db, "users", "uniqueUserID"); // "uniqueUserID" apne document ki ID se replace karo
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
  } else {
    console.log("No such document!");
  }
}
```

### 2. `getDocs` Method (Multiple Documents)

Agar tum kisi **collection** ke multiple documents ko retrieve karna chahte ho, to `getDocs` method ka use karo. Ye method aik collection ke saare documents ya specific query-based documents ko get karta hai.

**Example:**

```javascript
import { db } from "./firebase";
import { collection, getDocs } from "firebase/firestore";

async function getMultipleDocuments() {
  const querySnapshot = await getDocs(collection(db, "users"));

  querySnapshot.forEach((doc) => {
    console.log(doc.id, " => ", doc.data());
  });
}
```

### 3. Querying Data with Conditions

Firebase Firestore me tum `where` clause ke saath specific conditions laga sakte ho. For example, agar tumhe sirf woh users chahiye jinki age 25 hai, to tum `where` clause ka use karoge.

**Example:**

```javascript
import { db } from "./firebase";
import { collection, query, where, getDocs } from "firebase/firestore";

async function getUsersByAge() {
  const q = query(collection(db, "users"), where("age", "==", 25));
  const querySnapshot = await getDocs(q);

  querySnapshot.forEach((doc) => {
    console.log(doc.id, " => ", doc.data());
  });
}
```

### 4. Query with Sorting and Limiting

Firestore me tum sorting aur limiting ka use bhi kar sakte ho. Jaise ke agar tumhe recent 5 users sorted by age chahiye, to tum `orderBy` aur `limit` ka use kar sakte ho.

**Example:**

```javascript
import { db } from "./firebase";
import { collection, query, orderBy, limit, getDocs } from "firebase/firestore";

async function getLimitedUsers() {
  const q = query(collection(db, "users"), orderBy("age", "desc"), limit(5));
  const querySnapshot = await getDocs(q);

  querySnapshot.forEach((doc) => {
    console.log(doc.id, " => ", doc.data());
  });
}
```

### 5. Real-Time Data Fetch using `onSnapshot`

Agar tumhe real-time updates chahiye, yaani koi document ya collection update hoti hai to tumhara data bhi update ho, to tum `onSnapshot` ka use kar sakte ho. Ye React applications me kaafi useful hai jab tumhe dynamically data show karna ho.

**Example (Single Document):**

```javascript
import { db } from "./firebase";
import { doc, onSnapshot } from "firebase/firestore";

function getRealTimeSingleDoc() {
  const docRef = doc(db, "users", "uniqueUserID");

  onSnapshot(docRef, (docSnap) => {
    if (docSnap.exists()) {
      console.log("Current data: ", docSnap.data());
    } else {
      console.log("No such document!");
    }
  });
}
```

**Example (Collection):**

```javascript
import { db } from "./firebase";
import { collection, onSnapshot } from "firebase/firestore";

function getRealTimeCollection() {
  const colRef = collection(db, "users");

  onSnapshot(colRef, (snapshot) => {
    snapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
    });
  });
}
```
