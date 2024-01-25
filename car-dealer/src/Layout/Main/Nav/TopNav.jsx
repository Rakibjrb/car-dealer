import { useState } from "react";
import { Link } from "react-router-dom";
import { CgMail } from "react-icons/cg";

const TopNav = () => {
  const [dealer, setDealer] = useState(false);

  return (
    <div className="flex flex-col lg:flex-row lg:justify-between items-center lg:mr-4 py-5 lg:py-0">
      <div className="flex flex-col md:flex-row items-center gap-4">
        <div className="flex items-center">
          <div className="bg-red-600 pl-16 pr-12 py-4 relative h-[52px]">
            <div className="bg-red-600 w-[45px] h-[45px] lg:w-[39px] lg:h-[39px] absolute top-1 lg:top-[5px] -right-5 lg:-right-5 transform rotate-45"></div>
            <p className="text-white uppercase text-sm font-semibold z-10">
              Call
            </p>
          </div>
          <p className="text-white ml-10 font-sans">+8801732-247599</p>
        </div>
        <div className="text-gray-300 flex items-center gap-2">
          <button
            onClick={() => {
              setDealer(true);
            }}
            className={`${dealer && "text-red-600"}  font-semibold`}
          >
            Dealer Profile
          </button>{" "}
          |
          <button
            onClick={() => {
              setDealer(false);
            }}
            className={`${dealer ? "" : "text-red-600"} font-semibold`}
          >
            Seller Profile
          </button>
        </div>
      </div>
      <div className="text-white flex items-center gap-5 mt-5 lg:mt-0">
        <div className="flex items-center gap-2">
          <CgMail className="text-2xl text-red-500" />
          <p>help@motorbox.com</p>
        </div>
        <Link className="text-gray-300">Login/Sign In</Link>
      </div>
    </div>
  );
};

export default TopNav;
