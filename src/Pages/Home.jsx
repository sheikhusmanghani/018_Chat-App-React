import Navbar from "../Components/Navbar";
import ChatappWrapper from "../Chat App/ChatappWrapper";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="chatapp-wrapper">
        <ChatappWrapper />
      </div>
    </>
  );
};

export default Home;
