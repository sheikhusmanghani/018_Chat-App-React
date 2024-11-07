import SignoutBtn from "./SignoutBtn";

const Navbar = () => {
  return (
    <div className="sticky top-0 w-full p-2 flex justify-between items-center navbar">
      <h1 className="text-3xl font-bold uppercase ml-5">Chat App</h1>
      <SignoutBtn />
      {/* <nav>
        <ul className="flex">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav> */}
    </div>
  );
};

export default Navbar;
