import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { LuFuel } from "react-icons/lu";
import { IoSpeedometerOutline } from "react-icons/io5";
import { GiGearStickPattern } from "react-icons/gi";

const Card = ({ data }) => {
  return (
    <div className="font-raleway bg-white rounded-t-lg rounded-b-lg">
      <div className="relative">
        <img
          src={data?.image[0]}
          alt="featured car image"
          className="rounded-t-lg"
        />
        <p className="text-white bg-red-600 py-1 px-3 absolute rounded-md top-3 left-3 uppercase font-semibold">
          {data?.featured === "true" ? "Featured" : ""}
        </p>
        <p className="text-white bg-red-600 py-1 px-3 absolute rounded-md top-3 right-3 font-semibold">
          {data?.date}
        </p>
      </div>
      <div className="p-4 xl:p-7">
        <p className="text-red-600 text-xl">{data?.subtitle}</p>
        <h2 className="font-bold text-2xl my-3">{data?.title}</h2>
        <p className="text-red-600 text-xl font-bold">${data?.price}</p>
        <div className="my-5 flex justify-between">
          <div>
            <div className="flex items-center gap-2">
              <LuFuel className="text-xl" /> <p>Fuel Type</p>
            </div>
            <p className="ml-6">{data?.fuelType}</p>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <IoSpeedometerOutline className="text-xl" /> <p>Mileage</p>
            </div>
            <p className="ml-6">{data?.mileage}K.M</p>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <GiGearStickPattern className="text-xl" /> <p>Transmission</p>
            </div>
            <p className="ml-6">{data?.transmission}</p>
          </div>
        </div>
        <div className="flex justify-between">
          <Link className="flex items-center font-semibold gap-5 uppercase">
            View Details <FaArrowRight />
          </Link>
          <button>
            <FaRegHeart className="text-xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  data: PropTypes.object,
};
export default Card;
