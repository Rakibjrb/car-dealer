import { useState } from "react";
import { FaCar } from "react-icons/fa6";
import Login from "./Login/Login";
import SignUp from "./SignUp/SignUp";
import Switcher from "./Switcher";

const Switch = () => {
  const [switchForm, setSwitchForm] = useState(false);

  return (
    <div className="w-full grid md:grid-cols-5 bg-white font-raleway">
      <div className="md:col-span-2 bg-gradient-to-b from-white to-red-500 md:from-red-500 md:to-red-500 min-h-screen"></div>
      <div className="md:col-span-3 md:min-h-screen"></div>
      <div className="bg-white md:bg-transparent absolute w-[85%] md:w-[80%] lg:w-3/4 xl:w-1/2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-3xl p-5 rounded-sm">
        <h3 className="text-right text-black capitalize font-semibold">
          Need Help?
        </h3>
        <div className="flex md:items-center flex-col md:flex-row">
          <div className="flex justify-center items-center flex-col md:w-[40%] lg:w-[40%] xl:w-[30%] h-[200px]">
            <FaCar className="text-[100px]" />
            <h2 className="font-semibold text-black text-xl uppercase mt-5">
              Car Dealer
            </h2>
          </div>
          <div className="md:w-[60%] lg:w-[60%] xl:w-[70%]">
            {switchForm ? <SignUp /> : <Login />}
            <Switcher data={{ switchForm, setSwitchForm }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Switch;
