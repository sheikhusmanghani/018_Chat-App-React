import userPic from "../../public/images/user pic.jpg";

const DivForImage = () => {
  return (
    <div className="p-2">
      <img
        src={userPic}
        className="object-cover h-[45px] w-[45px] rounded-full"
      />
    </div>
  );
};

export default DivForImage;
