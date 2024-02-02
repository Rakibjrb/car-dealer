import { MdOutlineArrowOutward } from "react-icons/md";
import "./banner.css";

const Banner = () => {
  return (
    <div className="bg-black font-raleway">
      <div className="banner max-w-screen-xl mx-auto py-32 lg:min-h-[calc(100vh-112px)] flex justify-center items-center">
        <div className="w-full">
          <div className="text-center space-y-10">
            <h2 className="text-white text-xl uppercase font-semibold">
              20% off for online booking
            </h2>
            <h1 className="text-white text-4xl md:text-7xl font-bold lg:w-3/4 xl:w-1/2 mx-auto">
              Modern <span className="text-red-600">Classic</span> Incredible
            </h1>
            <h3 className="capitalize text-white font-semibold">
              Car is where early adopters and innovation seekers find
            </h3>
            <div className="flex justify-center">
              <button className="bg-red-600 hover:bg-red-700 transition-colors py-3 px-7 rounded-md uppercase font-semibold flex items-center gap-2 text-white">
                Find A Car <MdOutlineArrowOutward className="text-xl" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
