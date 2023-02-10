import "./App.css";
import Card from "../src/components/Card.jsx";
import Sidebar from "../src/components/Sidebar.jsx";
import Navbar from "../src/components/Navbar.jsx";
import Title from "../src/components/Title.jsx";
import { Edit, Facebook, Dribbble, Whatsapp, Trash } from "iconsax-react";
function App() {
  return (
    <div className="App rtl">
      <Navbar />
      <div className="flex grid grid-cols-12 gap-4">
        <Sidebar />
        <div className="col-span-2 shadow-md  w-full rounded-xl mt-10 flex-col items-center justify-center p-4 ">
          <Title item={"اطلاعات شناسایی"} />
          <div className="w-10 h-10 rounded-full ">
            <img src="" />
          </div>
          <p>مهدی ساغری</p>
          <div className="flex">
            <div className="w-15 h-15 rounded-full border-solid ">
              <Facebook size="18" color="#FF8A65" variant="Bold" />
            </div>
            <div className="w-15 h-15 rounded-full border-solid ">
              <Dribbble size="18" color="#FF8A65" variant="Bold" />{" "}
            </div>
            <div className="w-15 h-15 rounded-full border-solid ">
              <Whatsapp size="18" color="#FF8A65" variant="Bold" />{" "}
            </div>
          </div>
          <Title item={"تگ لاین ها "} />

          <Title item={" درباره من "} />

          <p>
            تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و
            سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
          </p>
          <Title item={"مهارت ها "} />
        </div>
        <div className="col-span-8">
          <div className="flex">
            <p>آثار من</p>
            <p>نوع نمایش</p>
          </div>
          <div className="rounded-xl w-full m-10 bg-white flex-col irems-start">
            <div className="flex">
              <p>تدوین و صداگذاری</p>
              <Edit size="32" color="#FF8A65" />
              <Trash size="44" color="#FF8A65" />
            </div>
            <div className="flex">
              <Card></Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
