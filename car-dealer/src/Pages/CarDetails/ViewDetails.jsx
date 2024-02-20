import { Link, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/axios/useAxiosPublic";
import Pictures from "./Pictures";
import Details from "./Details";
import CarFeatures from "./CarFeatures";

const ViewDetails = () => {
  const carId = useParams().id;
  const axios = useAxiosPublic();

  const { data: car } = useQuery({
    queryKey: ["getCarForDetails"],
    queryFn: async () => {
      const res = await axios.get(`/cars/${carId}`);
      return res.data;
    },
  });
  return (
    <div className="max-w-screen-xl mx-auto px-3 pt-10 xl:px-0 font-raleway">
      <div className="flex flex-col lg:flex-row lg:items-start gap-7">
        <div className="lg:w-1/2">
          <Pictures images={car?.image} />
        </div>
        <div className="lg:w-1/2">
          <Details car={car} />
        </div>
      </div>
      <div className="mt-16">
        <CarFeatures />
      </div>
      <div className="mt-16">
        <h3 className="text-3xl font-semibold mb-5">Read Car Details</h3>
        <p className="text-justify md:text-left">{car?.details}</p>
      </div>
      <div className="mt-10">
        <Link
          to={"/"}
          className="bg-red-600 hover:bg-red-700 transition-colors py-3 px-7 rounded-md font-semibold text-white uppercase mt-8"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default ViewDetails;
