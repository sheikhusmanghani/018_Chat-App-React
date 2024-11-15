import { ToastContainer } from "react-toastify";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Home from "./Pages/Home";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./Firebase";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user, "hyga");
        setIsLoggedIn(true);
      } else {
        console.log("nhi hy");
        setIsLoggedIn(false);
      }
    });
  }, []);

  return (
    <>
      <ToastContainer autoClose={2000} />
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/chatapp" element={isLoggedIn ? <Home /> : <Login />} />
      </Routes>
    </>
  );
}

export default App;
