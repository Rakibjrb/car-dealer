import { Link } from "react-router-dom";
import { CgMail } from "react-icons/cg";
import SwitchProfile from "./SwitchProfile";
import { useState } from "react";
import useAuth from "../../../Hooks/auth/useAuth";

const TopNav = () => {
  const [showMenu, setShowMenu] = useState(false);
  const { user } = useAuth();

  return (
    <div className="hidden lg:flex flex-col lg:flex-row lg:justify-between items-center lg:mr-4 py-5 lg:py-0">
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
        <SwitchProfile />
      </div>
      <div className="text-white flex items-center gap-5 mt-5 lg:mt-0">
        <div className="flex items-center gap-2">
          <CgMail className="text-2xl text-red-500" />
          <p>help@motorbox.com</p>
        </div>
        {!user ? (
          <Link to="/user" className="text-gray-300">
            Login/Sign In
          </Link>
        ) : (
          <div className="relative">
            <img
              onClick={() => setShowMenu(!showMenu)}
              className="w-10 h-10 rounded-full cursor-pointer"
              src="https://i.ibb.co/5x441PC/user.png"
              alt=""
            />
            {showMenu && (
              <div className="absolute bg-slate-500 w-[200px] right-0 p-3 rounded-md space-y-3">
                <h3>{user?.displayName}</h3>
                <h3>View Cart</h3>
                <button>Logout</button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default TopNav;
