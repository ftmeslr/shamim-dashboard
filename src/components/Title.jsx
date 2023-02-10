import { Edit, Facebook, Dribbble, Whatsapp, Trash } from "iconsax-react";

const Title = ({ item }) => {
  return (
    <>
      <div className="flex items-center ">
        <p className=" whitespace-nowrap mb-2 text-sm">{item}</p>

        <div className="h-[1.5px] w-full bg-gray-200 mx-2"></div>
        <div>
          <Edit size="24" color="#c1c4c7" />
        </div>
      </div>
    </>
  );
};

export default Title;
