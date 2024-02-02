import car from "../../../assets/images/bestselling/ferrari.png";

const BestSelling = () => {
  return (
    <div className="max-w-screen-xl mx-auto font-raleway px-3 xl:px-0">
      <div className="bg-black flex flex-col md:flex-row items-center rounded-xl p-10 md:p-16 gap-8 md:gap-0">
        <div className="flex-1 space-y-5">
          <h2 className="text-red-600 text-xl">Best Selling Car</h2>
          <h3 className="text-white text-2xl lg:text-4xl xl:text-5xl font-semibold">
            Modern Interior Living Room Blueprint
          </h3>
          <h3 className="text-2xl text-white">
            From <span className="text-red-600">$14299.00</span>
          </h3>
          <button className="text-white bg-red-600 hover:bg-red-700 transition-colors px-8 py-3 rounded-lg">
            Buy Now
          </button>
        </div>
        <div className="flex-1">
          <img src={car} alt="" />
        </div>
      </div>
    </div>
  );
};

export default BestSelling;
