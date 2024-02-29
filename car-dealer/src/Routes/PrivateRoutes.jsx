import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import useAuth from "../Hooks/auth/useAuth";
import Spinner from "../Components/Spinner/Spinner";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return (
      <div className="pt-10">
        <Spinner />
      </div>
    );
  }

  if (user) {
    return children;
  }

  return <Navigate to={"/user"} state={location.pathname} replace />;
};

PrivateRoutes.propTypes = {
  children: PropTypes.node,
};
export default PrivateRoutes;
