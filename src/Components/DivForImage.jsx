import errIMG from "../../public/images/error.jpg";

const DivForImage = () => {
  return (
    <div className="p-2">
      <img
        src={errIMG}
        className="object-cover border border-purple-300 chat h-[45px] w-[45px] rounded-full"
      />
    </div>
  );
};

export default DivForImage;
