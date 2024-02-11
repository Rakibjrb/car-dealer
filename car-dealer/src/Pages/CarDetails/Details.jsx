import PropTypes from "prop-types";
import { LuFuel } from "react-icons/lu";
import { IoSpeedometerOutline } from "react-icons/io5";
import { GiGearStickPattern } from "react-icons/gi";
import { FaRegHeart } from "react-icons/fa";

const Details = ({ car }) => {
  return (
    <div className="space-y-4">
      <h1 className="text-5xl font-bold">{car?.title}</h1>
      <h2 className="text-3xl font-semibold">{car?.subtitle}</h2>
      <div className="my-5 flex gap-5">
        <div>
          <div className="flex items-center gap-2">
            <LuFuel className="text-xl" /> <p>Fuel Type</p>
          </div>
          <p className="ml-6">{car?.fuelType}</p>
        </div>
        <div>
          <div className="flex items-center gap-2">
            <IoSpeedometerOutline className="text-xl" /> <p>Mileage</p>
          </div>
          <p className="ml-6">{car?.mileage}K.M</p>
        </div>
        <div>
          <div className="flex items-center gap-2">
            <GiGearStickPattern className="text-xl" /> <p>Transmission</p>
          </div>
          <p className="ml-6">{car?.transmission}</p>
        </div>
      </div>
      <div className="flex justify-between">
        <h3 className="text-red-600 text-xl font-bold">
          Price : ${car?.price}
        </h3>
        <div className="flex items-center gap-2 text-xl font-serif">
          <FaRegHeart className="font-bold" /> {car?.recect}
        </div>
      </div>
      <button className="bg-red-600 hover:bg-red-700 transition-colors py-3 px-7 rounded-md uppercase font-semibold text-white">
        Check Out Now
      </button>
    </div>
  );
};

Details.propTypes = {
  car: PropTypes.object,
};
export default Details;
