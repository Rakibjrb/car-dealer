import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Order = ({ order }) => {
  return (
    <tr>
      <td>{order?.title}</td>
      <td>{order?.username}</td>
      <td>{order?.date}</td>
      <td>
        <Link
          to={`/order/invoice/${order._id}`}
          className="text-green-500 uppercase font-bold"
        >
          Invoice
        </Link>
      </td>
    </tr>
  );
};

Order.propTypes = {
  order: PropTypes.object,
};
export default Order;
