import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import useAxiosPublic from "../../Hooks/axios/useAxiosPublic";
import ListingCard from "../../Components/Card/Listing";
import useTotalCars from "../../Hooks/useTotalCars";
import Spinner from "../../Components/Spinner/Spinner";

const Listing = () => {
  const axios = useAxiosPublic();

  //total car count from db
  const { totalCars: totalCarCount } = useTotalCars();

  //loading state -> this state for showing data is on loading now
  const [loading, setLoading] = useState(false);

  //all car state -> all the car data set in this store and show to the UI
  const [cars, setCars] = useState([]);

  //max price -> changleable price and loading new data based on the price
  const [maxPrice, setMaxPrice] = useState(0);

  //pageNumber state used for pagination
  const [pageNumber, setPageNumber] = useState(0);

  //this state store the total data amount like, how many data is available
  const [totalCars, setTotalCars] = useState(0);
  const limit = 9;
  let totalPage = Math.ceil(totalCarCount / limit);

  const handleMaxPrice = (e) => {
    setLoading(true);
    setMaxPrice(e.target.value);
  };

  const handleGetCars = () => {
    setLoading(true);
    axios
      .get(`/listing/sort/price?high=${maxPrice}`)
      .then((res) => {
        setCars(res.data?.cars);
        setTotalCars(0);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  useEffect(() => {
    setLoading(true);
    let skip = pageNumber * limit;
    axios
      .get(`/listing/cars?skip=${skip}`)
      .then((res) => {
        setCars(res?.data?.cars);
        setTotalCars(res.data?.total);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [pageNumber]);

  return (
    <div className="max-w-screen-xl mx-auto px-3 xl:px-0 font-raleway">
      <div className="grid md:grid-cols-8 md:gap-3 lg:gap-5 mt-10">
        <div className="md:mt-16 md:col-span-2 space-y-10">
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
                  {0} to {maxPrice}
                </h2>
                <div onChange={handleGetCars}>
                  <input
                    className="w-full cursor-pointer"
                    type="range"
                    min={0}
                    max={50000}
                    value={maxPrice}
                    onChange={handleMaxPrice}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 md:mt-0 md:col-span-6">
          <h1 className="text-4xl font-bold text-center mb-8">
            Find Your <span className="text-red-600">Car</span>
          </h1>
          {!loading ? (
            <>
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
            </>
          ) : (
            <Spinner />
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
