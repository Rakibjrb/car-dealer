import PropTypes from "prop-types";

const Card = ({ data }) => {
  return (
    <div className="font-raleway bg-white rounded-t-lg rounded-b-lg">
      <div className="relative">
        <img
          src={data?.image[0]}
          alt="featured car image"
          className="rounded-t-lg"
        />
        <p className="text-white bg-red-600 py-1 px-3 absolute rounded-md top-2 left-2">
          {data?.featured === "true" ? "Featured" : ""}
        </p>
      </div>
      <div className="p-7">
        <p className="text-red-600 text-xl">{data?.subtitle}</p>
        <h2 className="font-bold text-2xl my-3">{data?.title}</h2>
        <p className="text-red-600 text-xl font-bold">${data?.price}</p>
      </div>
    </div>
  );
};

Card.propTypes = {
  data: PropTypes.object,
};
export default Card;
