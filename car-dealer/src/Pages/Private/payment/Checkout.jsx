import PropTypes from "prop-types";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import useAuth from "../../../Hooks/auth/useAuth";
import useAxiosPublic from "../../../Hooks/axios/useAxiosPublic";

const Checkout = ({ info, setIsOpen }) => {
  const [secrete, setSecrete] = useState(null);
  const stripe = useStripe();
  const elements = useElements();
  const { user } = useAuth();
  const axios = useAxiosPublic();

  const handlePayment = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      Swal.fire(error.message);
    }

    if (paymentMethod) {
      const { error: paymentError } = await stripe.confirmCardPayment(secrete, {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.displayName || "anonymus",
            email: user?.email || "anonymus email",
          },
        },
      });

      if (paymentError) {
        Swal.fire("something went wrong !!! Payment error");
      } else {
        Swal.fire(`payment successfull`);
        setIsOpen(false);
      }
    }
  };

  useEffect(() => {
    axios
      .post("/create-payment-intent", { price: parseInt(info.payable) })
      .then((res) => {
        setSecrete(res.data?.clientSecret);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <form onSubmit={handlePayment}>
      <div className="bg-gray-200 p-6 rounded-lg">
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
      </div>
      <button
        type="submit"
        className="py-2 px-3 bg-red-600 hover:bg-red-800 transition-colors rounded-lg mt-3 w-full"
        disabled={!stripe || !secrete}
      >
        Pay Now ${info.payable}
      </button>
    </form>
  );
};

Checkout.propTypes = {
  info: PropTypes.object,
  setIsOpen: PropTypes.func,
};
export default Checkout;
