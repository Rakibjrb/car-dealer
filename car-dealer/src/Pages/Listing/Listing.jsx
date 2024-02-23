import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import useAxiosPublic from "../../Hooks/axios/useAxiosPublic";
import ListingCard from "../../Components/Card/Listing";
import useTotalCars from "../../Hooks/useTotalCars";

const Listing = () => {
  const axios = useAxiosPublic();
  const { totalCars: totalCarCount } = useTotalCars();
  const [cars, setCars] = useState([]);
  const [maxPrice, setMaxPrice] = useState(30000);
  const [pageNumber, setPageNumber] = useState(0);
  const [totalCars, setTotalCars] = useState(0);
  const limit = 9;
  let totalPage = Math.ceil(totalCarCount / limit);

  const handleMaxPrice = (e) => {
    setMaxPrice(e.target.value);
  };

  const handleGetCars = () => {
    axios
      .get(`/listing/sort/price?high=${maxPrice}`)
      .then((res) => {
        setCars(res.data?.cars);
        setTotalCars(0);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    let skip = pageNumber * limit;
    axios
      .get(`/listing/cars?skip=${skip}`)
      .then((res) => {
        setCars(res?.data?.cars);
        setTotalCars(res.data?.total);
      })
      .catch((err) => console.log(err));
  }, [pageNumber]);

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
                <h2 className="font-sans mb-2">
                  {10000} to {maxPrice}
                </h2>
                <input
                  className="w-full cursor-pointer"
                  type="range"
                  min={10000}
                  max={50000}
                  onChange={handleMaxPrice}
                  onClick={handleGetCars}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 md:mt-0 md:col-span-6">
          {cars?.length ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {cars?.map((car, index) => (
                <ListingCard key={`listingcarcard${index}`} car={car} />
              ))}
            </div>
          ) : (
            <h1 className="text-3xl text-center uppercase font-semibold mt-16">
              No Cars found
            </h1>
          )}
          <div
            className={`${
              totalCars < 6 ? "hidden" : ""
            } flex gap-1 justify-center flex-wrap mt-8 px-5`}
          >
            <button
              disabled={pageNumber <= 0 && true}
              onClick={() => {
                setPageNumber(pageNumber - 1);
              }}
              className="py-1 px-3 border-2 rounded-lg uppercase hover:bg-red-600 transition-colors hover:text-white"
            >
              Prev
            </button>
            {[...Array(totalPage || 0).keys()]?.map((index) => (
              <button
                key={`paginationBtn${index}`}
                onClick={() => {
                  setPageNumber(index);
                }}
                className={`${
                  pageNumber == index && "bg-red-600"
                } py-1 px-3 border-2 rounded-lg uppercase hover:bg-red-600 transition-colors hover:text-white`}
              >
                {index + 1}
              </button>
            ))}
            <button
              disabled={pageNumber == totalPage - 1 && true}
              onClick={() => {
                setPageNumber(pageNumber + 1);
              }}
              className="py-1 px-3 border-2 rounded-lg uppercase hover:bg-red-600 transition-colors hover:text-white"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Listing;
