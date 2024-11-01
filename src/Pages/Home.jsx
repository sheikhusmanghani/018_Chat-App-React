import { signOut } from "firebase/auth";
import React, { useContext } from "react";
import { auth } from "../Firebase";
import { useNavigate } from "react-router-dom";
import { authContext } from "../context/AuthContext";

const Home = () => {
  const navigate = useNavigate();
  const { isloggedin, setisloggedin } = useContext(authContext);
  return (
    <div className="mainHomePage">
      <h2>Home</h2>
      <button
        onClick={() => {
          signOut(auth);
          console.log("User signed out");
          navigate("/login");
          setisloggedin(false);
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default Home;
