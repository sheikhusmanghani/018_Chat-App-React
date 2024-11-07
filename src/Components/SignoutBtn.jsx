import { signOut } from "firebase/auth"; 
import { auth } from "../Firebase";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const SignOut = () => {
  const navigate = useNavigate();

  return (
    <button
      className="signoutBtn mx-4 py-2 px-3 rounded-md "
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
