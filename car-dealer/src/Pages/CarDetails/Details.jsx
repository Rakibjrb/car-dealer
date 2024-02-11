import PropTypes from "prop-types";

const Details = ({ car }) => {
  console.log(car);
  return <div>Details</div>;
};

Details.propTypes = {
  car: PropTypes.object,
};
export default Details;
