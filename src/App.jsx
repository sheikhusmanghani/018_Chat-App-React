import { ToastContainer } from "react-toastify";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Home from "./Pages/Home";
import "react-toastify/dist/ReactToastify.css";
import { useContext } from "react";
import { context } from "./Context/Context";

function App() {
  const { currentUser } = useContext(context); // to get currentUser from context

  // console.log("currentUser:", currentUser);

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

        {/* Protect /chatapp page */}
        <Route
          path="/chatapp"
          element={currentUser ? <Home /> : <Navigate to="/login" />}
        />

        {/* agr unknown url hua to Redirect kry ga login pr  */}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </>
  );
}

export default App;
