import { signOut } from "firebase/auth";
import { useContext } from "react";
import { auth } from "../Firebase";
import { useNavigate } from "react-router-dom";
import { authContext } from "../context/AuthContext";
import { toast } from "react-toastify";

const SignOut = () => {
  const navigate = useNavigate();
  const { setisloggedin } = useContext(authContext);

  return ( 
      <button
        className="py-2 px-3 bg-purple-500 border rounded-md "
        onClick={() => {
          signOut(auth);
          // navigate("/login");
          setisloggedin(false);
          toast.success("User has been signed out", {
            position: "top-center",
          });
        }}
      >
        Logout
      </button> 
  );
};

export default SignOut;
