import "./style.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import ProtectedRoute from "./Components/protectedRoute";
import AuthProvider from "./context/AuthContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; 

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      {/* <Route index element={<Home />} /> */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route
        path="/chatapp"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />
    </Route>
  )
);

const App = () => {
  return (
    <div className="App">
      <ToastContainer autoClose={2000} pauseOnHover={false} />
 
        <AuthProvider>
          <RouterProvider router={router} />
        </AuthProvider>
    
    </div>
  );
};

export default App;
