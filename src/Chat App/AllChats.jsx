import { useContext } from "react";
import { ChatContext } from "../Context/ChatsData";

const AllChats = () => {
  
  return (
    <div className="text-black w-full h-full mx-2 md:px-2 md:m-0 flex items-center justify-center md:block">
      <div className="w-full py-3 hidden md:flex md:justify-center">
        <input
          type="text"
          placeholder="Search By User Name"
          className="text-center bg-white p-2 rounded shadow-md "
        />
      </div>
      <div className="users flex justify-center w-full md:block md:overflow-y-auto overflow-x-auto ">
        {/* {users?.map((user) => {
          return (
            <p
              key={user.uid}
              className="bg-purple-950 text-white rounded p-2 shadow m-1 hover:opacity-80"
              onClick={() => {
                console.log(user);
                setMsgReceiver(user);
              }}
            >
              {user.name}
            </p>
          );
        })} */}
      </div>
    </div>
  );
};

export default AllChats;
