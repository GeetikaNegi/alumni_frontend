import toast, { Toaster } from "react-hot-toast";
import "./Notifications.css";
const notify = () =>
  toast("Here is your toast.", {
    duration: 4000,
    position: "bottom-right",

    // Styling
    style: {},
    className: "notify-basic",

    // Custom Icon
    icon: "👏",

    // Change colors of success/error/loading icon
    iconTheme: {
      primary: "#000",
      secondary: "#fff",
    },

    // Aria
    ariaProps: {
      role: "status",
      "aria-live": "polite",
    },
  });
const Notifications = () => {
  return (
    <div>
      <button onClick={notify}>Make me a toast</button>
      <Toaster />
    </div>
  );
};
export default Notifications;
