import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import SwitchProfile from "./SwitchProfile";
import useAuth from "../../../Hooks/auth/useAuth";

const links = [
  { id: "alsdflkssfdgd", name: "home" },
  { id: "alsdsdfgeted", name: "listing" },
  { id: "alssdfgsg34", name: "about" },
  { id: "alsfgd455t", name: "contact" },
];

const readyLink = links?.map((link) => (
  <NavLink
    key={link.id}
    to={`/${link.name === "home" ? "" : link.name}`}
    className={({ isActive }) =>
      isActive
        ? "lg:text-red-600 uppercase  px-10 lg:px-0 py-4 lg:py-0 bg-gray-800 lg:hover:bg-none transition-all font-semibold"
        : "uppercase font-semibold px-10 lg:px-0 py-4 lg:py-0 hover:bg-gray-800 lg:hover:text-red-600 lg:hover:bg-none transition-all "
    }
  >
    {link.name}
  </NavLink>
));

const MainNav = () => {
  const [active, setActive] = useState(false);
  const { user, logOut } = useAuth();

  return (
    <div className="text-white max-w-screen-xl mx-auto flex justify-between items-center pt-4 lg:pt-0 pb-5 px-3 2xl:px-0">
      <div>
        <h4 className="uppercase font-semibold text-3xl md:text-4xl">
          Moto<span className="text-red-600">RX</span>
        </h4>
      </div>
      <div>
        <ul className="gap-6 hidden lg:flex">{readyLink}</ul>
        <div className="lg:hidden">
          <button
            onClick={() => setActive(!active)}
            className="bg-white p-2 rounded-md cursor-pointer"
          >
            {active ? (
              <MdClose className="text-2xl text-black" />
            ) : (
              <FaBars className="text-2xl text-black" />
            )}
          </button>
          <div
            className={`transition-all duration-500 ${
              active
                ? "absolute top-0 left-0 opacity-100"
                : "absolute top-0 -left-[9999px] opacity-0"
            }`}
          >
            <ul className="fixed bg-gray-700 min-h-screen w-[300px] flex flex-col z-50">
              <div className="border-b-4 border-red-600 py-5 px-10">
                <h2 className="text-2xl mb-3">Switch Profile</h2>
                <SwitchProfile />
              </div>
              {readyLink}
              <div>
                {!user ? (
                  <div className="px-10">
                    <Link to="/user" className="text-gray-300">
                      Login/Sign In
                    </Link>
                  </div>
                ) : (
                  <div className="border-t-4 border-red-600">
                    <h2 className="text-2xl mb-3 pl-10 py-4">User</h2>
                    <div className="px-10 space-y-5">
                      <h3 className="text-xl">{user?.displayName}</h3>
                      <h3>
                        <Link to={"/user/favourites"} className="text-xl">
                          View Favourites
                        </Link>
                      </h3>
                      <h3>
                        <Link to={"/user/orders"} className="text-xl">
                          Orders
                        </Link>
                      </h3>
                      <button
                        onClick={() => logOut(true)}
                        className="text-xl hover:text-red-600"
                      >
                        Logout
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainNav;
