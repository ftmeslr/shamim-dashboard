import "./App.css";
import Card from "./components/Card.jsx";
import Sidebar from "./components/Sidebar.jsx";
import Navbar from "./components/Navbar.jsx";
import Title from "./components/Title.jsx";
import Avatar from "../src/assets/image/avatar.jpg";
import TagBtn from "./components/TagBtn.jsx";
import {
  Edit,
  Facebook,
  Dribbble,
  Whatsapp,
  Trash,
  AddCircle,
} from "iconsax-react";
function App() {
  return (
    <div className="App bg-[#f3f6ff] ">
      <Navbar />
      <div className="flex grid grid-cols-12 gap-4  ">
        <Sidebar />
        <div className="bg-white col-span-2 shadow-md  w-full rounded-xl mt-10 flex-col items-center justify-center p-4 ">
          <Title item={"اطلاعات شناسایی"} />
          <div className="w-10 h-10 rounded-full ">
            <img src="" />
          </div>
          <img
            src={Avatar}
            className="w-full w-24 h-24 rounded-full object-cover border-[#111] m-auto "
            alt=""
          />
          <p className="mt-3 text-[#1e5cfa]">فاطمه سالاریان</p>
          <div className="flex items-center justify-center my-4">
            <div className="w-15 h-15 rounded-full border-solid mx-2 border p-2 ">
              <Facebook size="21" color="#6a778a" variant="Bold" />
            </div>
            <div className="w-15 h-15 rounded-full border-solid mx-2 border p-2">
              <Dribbble size="21" color="#6a778a" variant="Bold" />{" "}
            </div>
            <div className="w-15 h-15 rounded-full border-solid mx-2 border p-2">
              <Whatsapp size="21" color="#6a778a" variant="Bold" />{" "}
            </div>
          </div>
          <Title item={"تگ لاین ها "} />
          <div class="flex flex-wrap ">
            <TagBtn tagName="گرافیک" />
            <TagBtn tagName="تجربه کاربری" />
            <TagBtn tagName="طراحی سایت" />
          </div>

          <Title item={" درباره من "} />
          <p className="text-sm text-right ">
            تایپ به پایان رسد و زمان مورد نیاز شامل تایپ به پایان رسد و زمان
            مورد نیاز شامل و و
          </p>
          <Title item={"مهارت ها "} />
          <div class="flex flex-wrap">
            <TagBtn tagName="تجربه کاربری" />
            <TagBtn tagName="طراحی سایت" />
            <TagBtn tagName="گرافیک" />
          </div>
          <Title item={"گواهی و مدارک تحصیلی "} />
          <ul class="text-sm">
            <li>طراح تجربه کاربری - همراه اول</li>
            <li className="mt-2">طراح تجربه کاربری - همراه اول</li>
          </ul>
          <Title item={"سوابق شغلی"} />
          <ul class="text-sm">
            <li>طراح تجربه کاربری - همراه اول</li>
            <li className="mt-2">طراح تجربه کاربری - همراه اول</li>
          </ul>
        </div>
        <div className="col-span-8 pt-10 pl-5 pr-1">
          <div className="flex">
            <p>آثار من</p>
            <p>نوع نمایش</p>
          </div>
          <div className="rounded-xl w-full bg-white flex-col irems-start mt-5 px-5 ">
            <div className="flex p-5">
              <p>تدوین و صداگذاری</p>
              <Edit className="mx-1" size="24" color="#c1c4c7" />
              <Trash className="mx-1" size="24" color="#d899a8" />
            </div>
            <div className="flex flex-col grid grid-cols-11 gap-3 pb-8">
              <Card></Card>
              <Card></Card>
              <Card></Card>
              <div className="flex flex-col items-center justify-center col-span-2 relative">
                <AddCircle size="28" color="#1e5cfa" />
                <p className="text-[#1e5cfa]">افرودن اثر</p>
                <p className="absolute bottom-0 text-[#b0b1b6]">
                  نمایش
                  <br /> بیشتر ...
                </p>
              </div>
            </div>
          </div>
          <div className="rounded-xl bg-white flex-col irems-start mt-5 px-5 ">
            <div className="flex p-5">
              <p>تدوین و صداگذاری</p>
              <Edit className="mx-1" size="24" color="#c1c4c7" />
              <Trash className="mx-1" size="24" color="#d899a8" />
            </div>
            <div className="flex grid grid-cols-11 gap-3 pb-8">
              <Card></Card>
              <Card></Card>
              <div className="flex flex-col items-center justify-center col-span-2 relative">
                <AddCircle size="28" color="#1e5cfa" />
                <p className="text-[#1e5cfa]">افرودن اثر</p>
                <p className="absolute bottom-0 text-[#b0b1b6]">
                  نمایش
                  <br /> بیشتر ...
                </p>
              </div>
            </div>
          </div>
          <div className="rounded-xl w-full bg-white flex-col irems-start mt-5 px-5 ">
            <div className="flex p-5">
              <p>تدوین و صداگذاری</p>
              <Edit className="mx-1" size="24" color="#c1c4c7" />
              <Trash className="mx-1" size="24" color="#d899a8" />
            </div>
            <div className="flex grid grid-cols-11 gap-3 pb-8">
              <Card></Card>
              <Card></Card>
              <Card></Card>
              <div className="flex flex-col items-center justify-center col-span-2 relative">
                <AddCircle size="28" color="#1e5cfa" />
                <p className="text-[#1e5cfa]">افرودن اثر</p>
                <p className="absolute bottom-0 text-[#b0b1b6]">
                  نمایش
                  <br /> بیشتر ...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
