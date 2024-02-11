import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/axios/useAxiosPublic";
import Pictures from "./Pictures";
import Details from "./Details";

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
      <div className="flex items-start gap-7">
        <div className="w-1/2">
          <Pictures images={car?.image} />
        </div>
        <div className="w-1/2">
          <Details car={car} />
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
