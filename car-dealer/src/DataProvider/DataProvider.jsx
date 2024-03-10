import { createContext, useState } from "react";
import PropTypes from "prop-types";
import Swal from "sweetalert2";

export const DataContext = createContext(null);

const DataProvider = ({ children }) => {
  const [orderInfo, setOrderInfo] = useState({});
  const alert = (icon, msg) => {
    Swal.fire({
      position: "top-end",
      icon: icon,
      title: msg,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  const data = { orderInfo, setOrderInfo, alert };

  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};

DataProvider.propTypes = {
  children: PropTypes.node,
};
export default DataProvider;
