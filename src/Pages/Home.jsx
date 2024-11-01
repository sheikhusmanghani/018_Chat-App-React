import { signOut } from "firebase/auth";
import React, { useContext } from "react";
import { auth } from "../Firebase";
import { useNavigate } from "react-router-dom";
import { authContext } from "../context/AuthContext";
import { toast } from "react-toastify";
import Navbar from "../Components/Navbar";
import ChatappWrapper from "../Chat App/ChatappWrapper";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="chatapp-wrapper">
        <ChatappWrapper />
      </div>
    </>
  );
};

export default Home;
