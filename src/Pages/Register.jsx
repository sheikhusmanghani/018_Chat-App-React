import { Link, useNavigate } from "react-router-dom";
import "../style.css";
import { createUserWithEmailAndPassword } from "firebase/auth/cordova";
import { auth } from "../Firebase";
import { toast } from "react-toastify";

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
      number: event.target.elements.phoneNumber.value,
    };

    // ------------------ authentication -----------------------
    try {
      const userCredentials = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );
      console.log("Form Submitted :", userCredentials);
      navigate("/chatapp");
      toast.success("User signed in successfully", {
        position: "top-center",
      });
    } catch (e) {
      console.error("creating user==> : ", e);
      toast.error("Please write again correctly ! ", {
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
