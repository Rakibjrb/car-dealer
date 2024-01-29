import PropTypes from "prop-types";

const Header = ({ maintext, colortext }) => {
  return (
    <div className="text-center">
      <h3 className="text-xl uppercase font-semibold text-red-600 border-b border-red-500 border-dotted inline-block">
        20% off for online booking
      </h3>
      <h2 className="capitalize text-5xl font-bold md:w-3/4 lg:w-2/3 xl:w-2/5 mx-auto mt-8">
        {maintext} <span className="text-red-600">{colortext}</span>
      </h2>
    </div>
  );
};

Header.propTypes = {
  maintext: PropTypes.string,
  colortext: PropTypes.string,
};
export default Header;
