import { useContext, useEffect, useState } from "react";
import { context } from "../Context/Context";
import Loader from "../Components/Loader";

const AllChats = () => {
  const { users, loading, setMsgReceiver, msgReceiver, currentUser } =
    useContext(context);
  const [searchTerm, setSearchTerm] = useState("");

  // Filter users
  const filteredUsers = users?.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return <Loader />;
  }

  if (!users || users.length === 0) {
    return (
      <div className="text-center">
        <p className="text-red-500">Failed to load users. Please try again.</p>
      </div>
    );
  }

  return (
    <div className="text-black w-full h-full mx-2 md:px-2 md:m-0 flex items-center justify-center md:block">
      {/* Search Box */}
      <div className="w-full py-3 hidden md:flex md:justify-center">
        <input
          type="text"
          placeholder="Search By User Name"
          className="text-center bg-white p-2 rounded shadow-md"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* User List */}
      <div className="users flex justify-center w-full md:block md:overflow-y-auto overflow-x-auto">
        {filteredUsers?.length > 0 ? (
          filteredUsers.map((user) => (
            <p
              key={user.userId}
              className={`rounded p-2 shadow m-1  cursor-pointer capitalize text-center ${
                msgReceiver?.userId === user.userId
                  ? "bg-[#930DA5] text-white" // Selected user
                  : "bg-white text-black font-bold hover:bg-[#e2dfdf]" // Default user
              }`}
              onClick={() => setMsgReceiver(user)}
            >
              {user.name}
            </p>
          ))
        ) : (
          <p className="text-gray-500 text-center p-3">No users found.</p>
        )}
      </div>
    </div>
  );
};

export default AllChats;
