import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import SwitchProfile from "./SwitchProfile";

const links = [
  { id: "alsdflkssfdgd", name: "home" },
  { id: "alsdsdfgeted", name: "listing" },
  { id: "asdfgsdg", name: "pricing" },
  { id: "alssdfgsg34", name: "news" },
  { id: "alsfgd455t", name: "pages" },
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

  return (
    <div className="text-white max-w-screen-xl mx-auto flex justify-between items-center pt-4 lg:pt-0 pb-2 px-3 2xl:px-0">
      <div>
        <h4 className="uppercase font-semibold text-3xl md:text-4xl">
          Motor <span className="text-red-600">X</span>
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
              <div className="px-10">
                <Link className="text-gray-300">Login/Sign In</Link>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainNav;
