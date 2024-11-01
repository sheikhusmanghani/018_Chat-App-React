import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../Firebase";
import { authContext } from "../context/AuthContext";
import { toast } from "react-toastify";

const Login = () => {
  const { isloggedin, setisloggedin } = useContext(authContext);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = {
      email: event.target.elements.email.value,
      password: event.target.elements.password.value,
    };

    // ------------------ authentication -----------------------
    try {
      const userCredentials = await signInWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );
      console.log("Logged In  :", userCredentials);
      navigate("/chatapp");
      setisloggedin(true);
      toast.success("User logged in successfully", {
        position: "top-center",
      });
    } catch (e) {
      toast.error("Please write again correctly ! ", {
        position: "top-center",
      });
    }
  };

  return (
    <div className="mainBox flex justify-center items-center">
      <div className="formWrapper rounded-xl sm:w-[500px] w-[290px] px-[15px] py-[30px]">
        <h2 className=" text-center text-3xl font-bold mb-5 ">LOGIN</h2>
        <form className="flex flex-col justify-center " onSubmit={handleSubmit}>
          {/* <input
            type="text"
            placeholder="Full Name"
            className="input my-[2px] mx-4 "
          /> */}
          <input
            type="email"
            name="email"
            placeholder="📧 Email Address"
            className="input my-[2px] mx-4"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="🔒 Strong Password "
            className="input my-[2px] mx-4"
            required
          />
          <input type="submit" className="submitBtn " />
          <p>
            Do you need to registerd ?{" "}
            <Link to={"/register"} className="border-b-[1px]">
              Registration Form
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
