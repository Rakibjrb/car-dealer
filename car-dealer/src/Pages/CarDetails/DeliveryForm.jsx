import PropTypes from "prop-types";
import useAuth from "../../Hooks/auth/useAuth";
import { useNavigate } from "react-router-dom";
import generateNumber from "../../utilities/numberGenerator";
import moment from "moment";

const DeliveryForm = ({ car }) => {
  const navigate = useNavigate();
  const invoiceId = generateNumber();
  const { user } = useAuth();
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      username: e.target.name.value || "xXx 19",
      useremail: e.target.email.value || user.email,
      phone: e.target.phone.value,
      fullAddress: e.target.fullAddress.value,
      invoiceId: invoiceId,
      date: moment().format("DD-MM-YYYY"),
      title: car.title,
      details: car.details,
      price: car.price,
    };
    sessionStorage.setItem("invoiceInfo", JSON.stringify(data));
    navigate(`/order/invoice/order`);
  };

  return (
    <form onSubmit={handleSubmit}>
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
            defaultValue={user?.displayName}
            required
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
            defaultValue={user?.email}
            required
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
            required
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
            required
          ></textarea>
        </div>
        <button className="px-3 py-1 rounded-md bg-red-600 text-white float-right">
          Go Next
        </button>
      </div>
    </form>
  );
};

DeliveryForm.propTypes = {
  car: PropTypes.object,
};
export default DeliveryForm;
