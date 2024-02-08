import PropTypes from "prop-types";

const Switcher = ({ data }) => {
  const handleFormSwitch = () => {
    data.setSwitchForm(!data.switchForm);
  };

  return (
    <div className="mt-5 lg:pl-0 xl:pl-4">
      <div className="flex justify-between">
        <p>{"Don't"} have account?</p>
        <button
          onClick={handleFormSwitch}
          className="text-red-500 hover:text-black"
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};

Switcher.propTypes = {
  data: PropTypes.object,
};
export default Switcher;
