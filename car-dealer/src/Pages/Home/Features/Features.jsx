import MainFeatures from "./MainFeatures";

const Features = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-3 xl:px-0">
      <h2 className="text-xl uppercase font-semibold text-red-600 border-b border-red-500 border-dotted inline-block font-raleway">
        20% off for online booking
      </h2>
      <div className="mt-4 mb-10 flex items-center flex-col md:flex-row space-y-8 md:space-y-0">
        <div className="flex-1">
          <h2 className="capitalize text-5xl font-bold xl:w-3/4 2xl:w-2/3">
            Our Extra <span className="text-red-600">Features</span>
          </h2>
        </div>
        <div className="flex-1">
          <p className=" text-xl pl-4 border-l-4 border-red-600 w-full text-justify">
            For 15 years, we raising the standerd of used car retailing with one
            of the most innovative reliable used programmes ever created. A
            comprehesive range of
          </p>
        </div>
      </div>
      <MainFeatures />
    </div>
  );
};

export default Features;
