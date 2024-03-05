import PropTypes from "prop-types";
import "./invoiceTable.css";

const Table = ({ info }) => {
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
          <td>$ {info?.serviceCharge}</td>
        </tr>
        <tr>
          <td>Tax</td>
          <td>$ {info?.tax}</td>
        </tr>
        <tr>
          <td className="font-bold">Total</td>
          <td className="font-bold">$ {info?.total}</td>
        </tr>
        <tr>
          <td className="font-bold">Payable Amount</td>
          <td className="font-bold">$ {info?.payable}</td>
        </tr>
        <tr>
          <td className="font-bold">Due Amount</td>
          <td className="font-bold">$ {info?.due}</td>
        </tr>
      </tbody>
    </table>
  );
};

Table.propTypes = {
  info: PropTypes.object,
};
export default Table;
