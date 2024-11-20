import { useState } from "react";

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
    e.preventDefault(); // Default browser menu ko disable karein

    // Set menu position and show menu
    setMenuPosition({ x: e.pageX, y: e.pageY });
    setShowMenu(true);
  };

  // Handle click on options
  const handleOptionClick = (option) => {
    setShowMenu(false); // Menu ko hide karna
    console.log(`${option} clicked`);
    // Implement your functionality here
    if (option === "Edit") {
      // Edit functionality
      console.log("Edit function triggered");
    } else if (option === "Delete") {
      // Delete functionality
      console.log("Delete function triggered");
    }
  };

  // Hide menu on any click outside
  const hideMenu = () => {
    setShowMenu(false);
  };

  return (
    <div
      className="rightSideMsg flex justify-end relative"
      onContextMenu={onRightClick}
      onClick={hideMenu} // Menu ko hide karne ke liye
    >
      {/* Main message bubble */}
      <p className="py-1 px-2 h-fit rounded-xl rounded-ee-none max-w-[400px] text-justify bg-purple-800 text-white">
        {text}
      </p>
      <p className="h-[33px] w-[32px] flex justify-center items-center ml-1 rounded-full uppercase bg-gray-200">
        A
      </p>

      {/* Custom context menu */}
      {showMenu && (
        <ul
          className="absolute bg-white border text-black border-gray-300 rounded-md shadow-md"
          style={{
            top: `${menuPosition.y}px`,
            left: `${menuPosition.x}px`,
            zIndex: 1000,
          }}
        >
          <li
            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            onClick={() => handleOptionClick("Edit")}
          >
            Edit
          </li>
          <li
            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            onClick={() => handleOptionClick("Delete")}
          >
            Delete
          </li>
        </ul>
      )}
    </div>
  );
};
