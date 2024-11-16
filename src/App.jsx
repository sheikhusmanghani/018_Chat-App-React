import { ToastContainer } from "react-toastify";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Home from "./Pages/Home";
import "react-toastify/dist/ReactToastify.css";
import { useContext } from "react";
import { context } from "./Context/Context"; // Make sure this is the correct path

function App() {
  const { currentUser } = useContext(context); // Consuming currentUser from context

  console.log("currentUser:", currentUser); // Add this line to debug the value of currentUser

  return (
    <>
      <ToastContainer autoClose={2000} />
      <Routes>
        {/* Redirect authenticated users away from login/register pages */}
        <Route
          path="/register"
          element={currentUser ? <Navigate to="/chatapp" /> : <Register />}
        />
        <Route
          path="/login"
          element={currentUser ? <Navigate to="/chatapp" /> : <Login />}
        />

        {/* Protect /chatapp route */}
        <Route
          path="/chatapp"
          element={currentUser ? <Home /> : <Navigate to="/login" />}
        />

        {/* Redirect to login if the route doesn't exist */}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </>
  );
}

export default App;
