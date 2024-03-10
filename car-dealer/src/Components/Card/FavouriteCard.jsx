import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { AiOutlineDelete } from "react-icons/ai";
import Swal from "sweetalert2";
import useData from "../../Hooks/data/useData";
import useAxiosSecure from "../../Hooks/axios/useAxiosSecure";

const FavouriteCard = ({ item, reloadFavourites }) => {
  const axios = useAxiosSecure();
  const { alert } = useData();
  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, remove it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`/favourites/${item._id}`)
          .then((res) => {
            res.data && alert("success", "Removed");
            reloadFavourites();
          })
          .catch((err) => {
            err && alert("warning", "something went wrong !!!");
          });
      }
    });
  };

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
        <button
          onClick={handleDelete}
          className="bg-red-500 hover:bg-red-700 transition-colors px-2 py-4 rounded-md"
        >
          <AiOutlineDelete className="text-2xl text-gray-300" />
        </button>
      </div>
    </div>
  );
};

FavouriteCard.propTypes = {
  item: PropTypes.object,
  reloadFavourites: PropTypes.func,
};
export default FavouriteCard;
