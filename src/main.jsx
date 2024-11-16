import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./style.css";
import { BrowserRouter } from "react-router-dom";
import ContextProvider from "./Context/Context.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ContextProvider>
      <App />
    </ContextProvider>
  </BrowserRouter>
);

/* <AuthProvider>
<ChatProvider>
  <App />
</ChatProvider>
</AuthProvider>; */
