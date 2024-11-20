import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export const LeftMsg = ({ text }) => {
  //   const firstLetter = letter[0];
  return (
    <div className="leftSideMsg flex ">
      <p className="bg-purple-800 h-[33px] w-[32px] flex justify-center items-center mr-1 rounded-full uppercase">
        {/* {firstLetter} */}B
      </p>
      <p className="bg-purple-800 h-fit py-1 px-2 rounded-xl rounded-ss-none max-w-[400px] text-justify break-words">
        {text}
      </p>
    </div>
  );
};

// export const RightMsg = ({ text }) => {
//   const firstLetter = letter[0];

// const onRigtClick = (e) => {
//   e.preventDefault(); //  browser options ko rookny k liye

//   console.log("Right Clicked on message");
// };
// return (
//   <div className="rightSideMsg flex justify-end " onContextMenu={onRigtClick}>
//     <p className=" py-1 px-2 h-fit rounded-xl rounded-ee-none max-w-[400px] text-justify break-words ">
//       {text}
//     </p>
//     <p className=" h-[33px] w-[32px]  flex justify-center items-center ml-1 rounded-full uppercase  self-end">
//       {/* {firstLetter} */}A
//     </p>
//   </div>
// );
// };

export const RightMsg = ({ text }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });

  // Handle right-click
  const onRightClick = (e) => {
    e.preventDefault(); // Disable default browser context menu

    // Set menu position where right-click happened
    setMenuPosition({ x: e.pageX, y: e.pageY });
    setShowMenu(true); // Show the custom menu
  };

  // Handle click on options
  const handleOptionClick = (option) => {
    setShowMenu(false); // Hide the menu
    console.log(`${option} clicked`);

    //  custom functionality daal sakty hyn yaha
    if (option === "Edit") {
      console.log("Edit function triggered");
    } else if (option === "Delete") {
      console.log("Delete function triggered");
    } else if (option === "Copy") {
      console.log("Copy function triggered");
      navigator.clipboard.writeText(text);
      toast.success("Text copied to clipboard", {
        position: "top-center",
        autoClose: 500,
        hideProgressBar: true,
      });
    }
  };

  // Hide menu on any global click outside
  useEffect(() => {
    const handleGlobalClick = (e) => {
      setShowMenu(false);
    };

    if (showMenu) {
      document.addEventListener("click", handleGlobalClick);
    }

    // jab menu closed hoga to...
    return () => {
      document.removeEventListener("click", handleGlobalClick);
    };
  }, [showMenu]);

  return (
    <div
      className="rightSideMsg flex justify-end "
      onContextMenu={onRightClick}
    >
      {/* Main message bubble */}
      <p className="relative py-1 px-2 h-fit rounded-xl rounded-ee-none max-w-[400px] text-justify bg-purple-800 text-white">
        {text}
      </p>
      <p className="h-[33px] w-[32px] flex justify-center items-center ml-1 rounded-full uppercase bg-gray-200">
        A
      </p>

      {/* Custom context menu */}
      {showMenu && (
        <ul
          className="absolute text-center text-2xl flex bg-white border text-purple-950  border-gray-300 rounded shadow-lg cursor-pointer "
          style={{
            top: `${menuPosition.y}px`,
            left: `${menuPosition.x}px`,
            zIndex: 1000,
          }}
          onClick={(e) => e.stopPropagation()} // Prevent menu click from hiding itself
        >
          <li
            title="Edit"
            className="px-1 py-1 hover:bg-gray-100 "
            onClick={() => handleOptionClick("Edit")}
          >
            &#128395;
          </li>
          <li
            title="Delete"
            className="px-1 py-1 hover:bg-gray-100 "
            onClick={() => handleOptionClick("Delete")}
          >
            &#128465;
          </li>
          <li
            title="Copy"
            className="px-1 py-1 hover:bg-gray-100 "
            onClick={() => handleOptionClick("Copy")}
          >
            &#128464;
          </li>
        </ul>
      )}
    </div>
  );
};
