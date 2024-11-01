import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function Toast() {
  const notify = () =>
    toast.info("Success Notification !", {
      position: "top-center",
    });
  console.log(notify);
  return (
    <div>
      <button onClick={notify}>toast button !</button>
      <ToastContainer />
    </div>
  );
}
