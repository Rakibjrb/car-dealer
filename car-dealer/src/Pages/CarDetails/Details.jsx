import { useState } from "react";
import PropTypes from "prop-types";
import { LuFuel } from "react-icons/lu";
import { IoSpeedometerOutline } from "react-icons/io5";
import { GiGearStickPattern } from "react-icons/gi";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import Modal from "../../Modal/Modal";
import useAuth from "../../Hooks/auth/useAuth";
import DeliveryForm from "./DeliveryForm";
import useData from "../../Hooks/data/useData";
import useAxiosSecure from "../../Hooks/axios/useAxiosSecure";

const Details = ({ car }) => {
  const [resected, setResected] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useAuth();
  const axios = useAxiosSecure();
  const { alert } = useData();

  const handleFavourte = () => {
    if (!resected) {
      axios
        .post("/favourites", {
          itemId: car?._id,
          image: car?.image[0],
          title: car?.title,
          useremail: user.email,
          price: car?.price,
        })
        .then((res) => {
          if (res.data.status === 403) {
            alert("warning", "Item already added");
            setResected(true);
            return;
          }
          res.data && alert("success", "Added to your favourite item");
          setResected(true);
        })
        .catch((err) => {
          alert(
            "warning",
            "Not added to your favourite item, some went wrong !!!"
          );
          console.log(err);
          setResected(false);
        });
    } else {
      alert("warning", "Item already added");
    }
  };

  return (
    <div className="space-y-4">
      <h1 className="text-4xl md:text-5xl font-bold">{car?.title}</h1>
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
        <div className="text-xl font-serif">
          <button
            onClick={handleFavourte}
            className="hover:bg-[#aaa] hover:shadow-xl hover:shadow-black transition-colors rounded-full p-2"
          >
            {resected ? (
              <FaHeart className="text-xl" />
            ) : (
              <FaRegHeart className="text-xl" />
            )}
          </button>
        </div>
      </div>
      <button
        onClick={() => {
          if (user) {
            setIsOpen(true);
          }
        }}
        className="bg-red-600 hover:bg-red-700 transition-colors py-3 px-7 rounded-md uppercase font-semibold text-white"
      >
        Check Out Now
      </button>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        <DeliveryForm car={car} />
      </Modal>
    </div>
  );
};

Details.propTypes = {
  car: PropTypes.object,
};
export default Details;
