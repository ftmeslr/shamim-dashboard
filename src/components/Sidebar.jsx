import { useState } from "react";

import {
  Element4,
  ProfileCircle,
  Messages3,
  SmsTracking,
  Bill,
  ProfileAdd,
  Shapes1,
  Shapes,
} from "iconsax-react";
const Sidebar = () => {
  const [activeMenu, setActiveMenu] = useState("dashboard");
  const MenueItem = [
    {
      name: "dashboard",
      fa_name: "داشبورد",
      icon: (
        <Element4
          size="21"
          color={`${activeMenu === "dashboard" ? "#e91a23" : "#77787d"}`}
          variant={`${activeMenu === "dashboard" ? "Bold" : "Linear"}`}
        />
      ),
    },
    {
      name: "profile",
      fa_name: "پروفایل",
      icon: (
        <ProfileCircle
          size="21"
          color={`${activeMenu === "profile" ? "#e91a23" : "#77787d"}`}
          variant={`${activeMenu === "profile" ? "Bold" : "Linear"}`}
        />
      ),
    },
    {
      name: "conversation",
      fa_name: "گفنگوها",
      icon: (
        <Messages3
          size="21"
          color={`${activeMenu === "conversation" ? "#e91a23" : "#77787d"}`}
          variant={`${activeMenu === "conversation" ? "Bold" : "Linear"}`}
        />
      ),
    },
    {
      name: "sendInvitation",
      fa_name: "ارسال دعوت‌نامه",
      icon: (
        <SmsTracking
          size="21"
          color={`${activeMenu === "sendInvitation" ? "#e91a23" : "#77787d"}`}
          variant={`${activeMenu === "sendInvitation" ? "Bold" : "Linear"}`}
        />
      ),
    },
    {
      name: "factor",
      fa_name: "صدور پیش فاکتور",
      icon: (
        <Bill
          size="21"
          color={`${activeMenu === "factor" ? "#e91a23" : "#77787d"}`}
          variant={`${activeMenu === "factor" ? "Bold" : "Linear"}`}
        />
      ),
    },
    {
      name: "login",
      fa_name: "عضویت در کانتمو",
      icon: (
        <ProfileAdd
          size="21"
          color={`${activeMenu === "login" ? "#e91a23" : "#77787d"}`}
          variant={`${activeMenu === "login" ? "Bold" : "Linear"}`}
        />
      ),
    },
    {
      name: "show",
      fa_name: "نمایش آثار",
      icon: (
        <Shapes1
          size="21"
          color={`${activeMenu === "show" ? "#e91a23" : "#77787d"}`}
          variant={`${activeMenu === "show" ? "Bold" : "Linear"}`}
        />
      ),
    },
  ];
  return (
    <div className="col-span-2 shadow-md h-screen w-full p-5">
      {MenueItem.map((item) => {
        return (
          <SidebarItem
            activeMenu={activeMenu}
            setActiveMenu={setActiveMenu}
            item={item}
          />
        );
      })}
    </div>
  );
};

const SidebarItem = ({ activeMenu, setActiveMenu, item }) => {
  const { name, fa_name, icon } = item;
  return (
    <div
      className={`flex items-center p-3 cursor-pointer p-3 ${
        activeMenu === name ? "bg-red-100 rounded-md" : ""
      }`}
      onClick={() => {
        setActiveMenu(name);
        console.log(activeMenu);
      }}
    >
      {icon}
      <p className="mx-2">{fa_name}</p>
    </div>
  );
};

export default Sidebar;