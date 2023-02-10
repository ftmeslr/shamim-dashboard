import Logo from "../assets/image/logo.JPG";
import { Notification, Setting2, Logout } from "iconsax-react";
const Navbar = () => {
  return (
    <div className="w-full shadow-md h-[100px]">
      <div className="flex justify-between py-8 px-8 items-canter space-center">
        <div className="w-28">
          <img src={Logo} />
        </div>
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center mx-2 ">
            <Notification size="26" color="#111" />
          </div>
          <div className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center mx-2">
            <Setting2 size="26" color="#111" />
          </div>
          <div className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center mx-2">
            <Logout size="26" color="#111" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
