import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./style.css";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

/* <AuthProvider>
<ChatProvider>
  <App />
</ChatProvider>
</AuthProvider>; */
