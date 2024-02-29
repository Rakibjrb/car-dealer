import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const DataContext = createContext(null);

const DataProvider = ({ children }) => {
  const [orderInfo, setOrderInfo] = useState({});

  const data = { orderInfo, setOrderInfo };

  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};

DataProvider.propTypes = {
  children: PropTypes.node,
};
export default DataProvider;
