import PropTypes from "prop-types";
import "./invoiceTable.css";

const Table = ({ info }) => {
  const serviceCharge = 50;
  const tax = 60;
  const price = parseFloat(info?.price);
  const total = price + tax + serviceCharge;
  const payable = total * 0.2;
  const due = total - payable;

  return (
    <table className="w-full invoice overflow-x-auto">
      <thead className="">
        <tr>
          <td className="font-bold">Name</td>
          <td className="font-bold">MRP</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{info?.title}</td>
          <td>$ {info?.price}</td>
        </tr>
        <tr>
          <td>Service Charge</td>
          <td>$ {serviceCharge}</td>
        </tr>
        <tr>
          <td>Tax</td>
          <td>$ {tax}</td>
        </tr>
        <tr>
          <td className="font-bold">Total</td>
          <td className="font-bold">$ {total}</td>
        </tr>
        <tr>
          <td className="font-bold">Payable Amount</td>
          <td className="font-bold">$ {payable}</td>
        </tr>
        <tr>
          <td className="font-bold">Due Amount</td>
          <td className="font-bold">$ {due}</td>
        </tr>
      </tbody>
    </table>
  );
};

Table.propTypes = {
  info: PropTypes.object,
};
export default Table;
