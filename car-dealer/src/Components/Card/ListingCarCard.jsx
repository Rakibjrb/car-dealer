import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ListingCarCard = ({ car }) => {
  console.log(car);
  return (
    <div className="relative">
      <div className="relative">
        <h3 className="absolute top-2 left-2 bg-red-500 text-white font-semibold px-3 py-1 rounded-md">
          Relased in : {car?.date}
        </h3>
        <img className="w-full rounded-md z-10" src={car?.image} alt="" />
      </div>
      <div className="bg-white rounded-lg absolute -bottom-10 left-1/2 -translate-x-1/2 p-4 w-[90%] shadow-xl">
        <h2 className="font-semibold text-xl mb-3">{car?.title}</h2>
        <Link to={`/car-details/${car?._id}`} className="text-red-600">
          View Details
        </Link>
      </div>
    </div>
  );
};

ListingCarCard.propTypes = {
  car: PropTypes.object,
};
export default ListingCarCard;
