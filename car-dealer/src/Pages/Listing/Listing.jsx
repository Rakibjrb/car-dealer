import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import useAxiosPublic from "../../Hooks/axios/useAxiosPublic";
import ListingCard from "../../Components/Card/Listing";

const Listing = () => {
  const [lowPrice, setLowPrice] = useState(10000);
  const [maxPrice, setMaxPrice] = useState(50000);
  const [cars, setCars] = useState([]);
  const axios = useAxiosPublic();

  const handleHighPriceChange = (e) => {
    setMaxPrice(e.target.value);
  };
  const handleLowPriceChange = (e) => {
    setLowPrice(e.target.value);
  };

  const handleGetCars = () => {
    if (lowPrice < maxPrice) {
      console.log(lowPrice, maxPrice);
    }
  };

  useEffect(() => {
    axios
      .get("/listing/cars")
      .then((res) => setCars(res?.data?.cars))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="max-w-screen-xl mx-auto px-3 xl:px-0 font-raleway">
      <h1 className="text-4xl font-bold text-center mt-10">
        Find Your <span className="text-red-600">Car</span>
      </h1>
      <div className="grid md:grid-cols-8 md:gap-3 lg:gap-5 mt-10">
        <div className="md:col-span-2 space-y-10">
          <div>
            <h2 className="text-xl font-semibold mb-3">Search Your Car</h2>
            <form className="flex justify-between">
              <input
                className="border py-2 px-3 rounded-lg rounded-r-none outline-none w-full shadow-md"
                type="text"
                placeholder="Search Here"
                required
              />
              <button className="py-2 px-3 rounded-lg rounded-l-none border bg-red-600 hover:bg-red-800 shadow-md">
                <FaSearch />
              </button>
            </form>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-3">Select Price Range</h2>
            <div>
              <div>
                <h2 className="font-sans mb-2">Low : {lowPrice}</h2>
                <input
                  className="w-full cursor-pointer"
                  type="range"
                  step={10}
                  min={10000}
                  max={50000}
                  onChange={handleLowPriceChange}
                  onMouseUp={handleGetCars}
                />
              </div>
              <div>
                <h2 className="font-sans mb-2">High : {maxPrice}</h2>
                <input
                  className="w-full cursor-pointer"
                  type="range"
                  step={10}
                  min={50000}
                  max={100000}
                  onChange={handleHighPriceChange}
                  onMouseUp={handleGetCars}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 md:mt-0 md:col-span-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {cars?.map((car, index) => (
              <ListingCard key={`listingcarcard${index}`} car={car} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Listing;
