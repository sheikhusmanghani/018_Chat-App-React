import "../style.css";
import { Link, useNavigate } from "react-router-dom";
import { auth, db } from "../Firebase";
import { toast } from "react-toastify";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";

const Register = () => {
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = {
      name:
        event.target.elements.firstName.value +
        " " +
        event.target.elements.lastName.value,
      email: event.target.elements.email.value,
      password: event.target.elements.password.value,
    };

    // ---------------------------------   authentication   ----------------------------
    try {
      const resp = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );
      // toast
      toast.success("User signed in successfully", {
        position: "top-center",
      });
      //
      navigate("/chatapp");

      // add data in firestore
      const docRef = doc(db, "users", resp.user.uid);
      await setDoc(docRef, {
        userId: resp.user.uid,
        name: formData.name,
        email: formData.email,
        createdAt: serverTimestamp(),
      });
      //
    } catch (e) {
      toast.error(e.code.split("/")[1].split("-").join(" "), {
        position: "top-center",
      });
    }
  };
  return (
    <div className="mainBox flex justify-center items-center">
      <div className="formWrapper rounded-xl sm:w-[500px] w-[290px] px-[15px] py-[30px]">
        <h2 className=" text-center text-3xl font-bold mb-5">REGISTER</h2>
        <form className="flex flex-col justify-center " onSubmit={handleSubmit}>
          <div className=" my-[2px] mx-4 flex gap-1">
            <input
              type="text"
              name="firstName"
              placeholder="👤 First Name "
              className="input w-full"
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="👤 Last Name"
              className="input w-full"
              required
            />
          </div>
          <input
            type="email"
            name="email"
            placeholder="📧 Email Address"
            className="input my-[2px] mx-4 "
            required
          />
          <input
            type="password"
            name="password"
            placeholder="🔒 Strong Password "
            className="input  my-[2px] mx-4 "
            required
          />

          <input
            type="password"
            name="confirmPassword"
            placeholder="🔒 Write Again Password"
            className="input  my-[2px] mx-4 "
            required
          />
          <input
            type="number"
            name="phoneNumber"
            placeholder="📞 Phone Number With Country Code"
            className="input  my-[2px] mx-4 "
            required
          />

          <input type="submit" className="submitBtn" />
          <p>
            Do you have already registerd ?{" "}
            <Link to={"/login"} className="border-b-[1px]">
              Login Form
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
