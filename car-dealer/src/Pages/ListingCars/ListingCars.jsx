import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/axios/useAxiosPublic";
import { useParams } from "react-router-dom";
import Spinner from "../../Components/Spinner/Spinner";
import ListingCarCard from "../../Components/Card/ListingCarCard";

const ListingCars = () => {
  const carType = useParams().type;
  const axios = useAxiosPublic();

  const { data: cars, isLoading } = useQuery({
    queryKey: ["listedCars"],
    queryFn: async () => {
      const res = await axios.get(`/listing/${carType}`);
      return res.data;
    },
  });

  return (
    <div className="max-w-screen-xl mx-auto px-3 xl:px-0 font-raleway py-8">
      <div className="flex flex-col text-center md:text-left md:flex-row md:justify-between">
        <h1 className="capitalize text-4xl font-bold">
          All <span className="text-red-600 capitalize">{carType}</span> Cars
        </h1>
        <h2 className="font-sans capitalize text-3xl font-semibold mt-4 md:mt-0">
          Total Available :{" "}
          {cars?.total < 10 ? `0${cars?.total}` : cars?.total || 0}
        </h2>
      </div>
      {isLoading ? (
        <div className="mt-10">
          <Spinner />
        </div>
      ) : cars?.total > 0 ? (
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-3">
          {cars?.cars?.map((car, index) => (
            <ListingCarCard key={`listedCarsCard${index}`} car={car} />
          ))}
        </div>
      ) : (
        <h1 className="text-3xl text-center uppercase font-semibold mt-16">
          No data found
        </h1>
      )}
    </div>
  );
};

export default ListingCars;
