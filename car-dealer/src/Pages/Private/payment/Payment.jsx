import PropTypes from "prop-types";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Checkout from "./Checkout";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PK);

const Payment = ({ info, setIsOpen }) => {
  return (
    <>
      <Elements stripe={stripePromise}>
        <Checkout info={info} setIsOpen={setIsOpen} />
      </Elements>
    </>
  );
};

Payment.propTypes = {
  info: PropTypes.object,
  setIsOpen: PropTypes.func,
};
export default Payment;
