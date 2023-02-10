import Book from "../assets/image/book.jpeg";
import { More } from "iconsax-react";
const Card = () => {
  return (
    <div className="relative shadow-md rounded-xl col-span-3 pb-4">
      <div className="w-full h-[140px] rounded-t-x ">
        <img className="w-full h-full object-cover rounded-t-xl" src={Book} />
      </div>
      <div className="w-5 absolute top-2 rotate-90 top-5 w-8 h-8 bg-white rounded-md flex items-center justify-center right-2">
        <More size="22" color="#111" />
      </div>
      <p className="my-2 mx-3 text-right">
        تبریک تبریک تیزر تبلیغاتی نوشیدنی انرژ یانرژ ی انرژی زا
      </p>
    </div>
  );
};

export default Card;
