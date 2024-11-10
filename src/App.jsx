import "./style.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Home from "./Pages/Home";
import ProtectedRoute from "./Components/protectedRoute";
import AuthProvider from "./Context/AuthContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ChatProvider from "./Context/ChatContext";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Protected route */}
      <Route
        path="/chatapp"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />
    </>
  )
);

const App = () => {
  return (
    <>
      <ToastContainer autoClose={2000} pauseOnHover={false} />
      <ChatProvider>
        <AuthProvider>
          <RouterProvider router={router} />
        </AuthProvider>
      </ChatProvider>
    </>
  );
};

export default App;
