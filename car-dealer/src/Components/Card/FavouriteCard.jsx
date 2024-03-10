import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { AiOutlineDelete } from "react-icons/ai";

const FavouriteCard = ({ item }) => {
  return (
    <div className="font-raleway bg-gray-300 flex gap-4 p-4 rounded-md items-start md:items-center">
      <img
        className="w-[30%] rounded-md"
        src={item?.image}
        alt="favourite items picture"
      />
      <div className="space-y-1 flex justify-between w-full items-start md:items-center">
        <div>
          <h2 className="text-xl font-semibold">{item?.title}</h2>
          <h3 className="font-semibold">${item?.price}</h3>
          <h3 className="font-semibold text-red-500">
            <Link to={`/car-details/${item?.itemId}`}>View Details</Link>
          </h3>
        </div>
        <button className="bg-red-500 hover:bg-red-700 transition-colors px-2 py-4 rounded-md">
          <AiOutlineDelete className="text-2xl text-gray-300" />
        </button>
      </div>
    </div>
  );
};

FavouriteCard.propTypes = {
  item: PropTypes.object,
};
export default FavouriteCard;
