import { signOut } from "firebase/auth"; 
import { auth } from "../Firebase";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const SignOut = () => {
  const navigate = useNavigate();

  return (
    <button
      className="py-2 px-3 bg-purple-500 border rounded-md "
      onClick={() => {
        signOut(auth);
        navigate("/login");
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
