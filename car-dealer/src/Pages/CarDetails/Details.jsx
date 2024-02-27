import { useState } from "react";
import PropTypes from "prop-types";
import { LuFuel } from "react-icons/lu";
import { IoSpeedometerOutline } from "react-icons/io5";
import { GiGearStickPattern } from "react-icons/gi";
import { FaRegHeart } from "react-icons/fa";
import Modal from "../../Modal/Modal";
import useAuth from "../../Hooks/auth/useAuth";

const Details = ({ car }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useAuth();

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
        <div className="flex items-center gap-2 text-xl font-serif">
          <FaRegHeart className="font-bold" /> {car?.recect}
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
        <form>
          <h2 className="font-semibold text-2xl mb-3">Delivery Address</h2>
          <div className="space-y-3">
            <div>
              <label htmlFor="name" className="font-semibold">
                Enter name
              </label>
              <input
                name="name"
                className="w-full border-2 rounded-md py-1 px-2"
                type="text"
                value={user?.displayName}
              />
            </div>
            <div>
              <label htmlFor="email" className="font-semibold">
                Your email
              </label>
              <input
                name="email"
                className="w-full border-2 rounded-md py-1 px-2"
                type="email"
                value={user?.email}
              />
            </div>
            <div>
              <label htmlFor="phone" className="font-semibold">
                Enter phone
              </label>
              <input
                name="phone"
                className="w-full border-2 rounded-md py-1 px-2"
                type="text"
              />
            </div>
            <div>
              <label htmlFor="fullAddress" className="font-semibold">
                Enter full address
              </label>
              <textarea
                name="fullAddress"
                className="w-full border-2 rounded-md py-1 px-2"
                type="text"
              ></textarea>
            </div>
            <button className="px-3 py-1 rounded-md bg-red-600 text-white float-right">
              Go Next
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

Details.propTypes = {
  car: PropTypes.object,
};
export default Details;
