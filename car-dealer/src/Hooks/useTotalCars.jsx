import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./axios/useAxiosPublic";

const useTotalCars = () => {
  const axios = useAxiosPublic();

  const { data: totalCars } = useQuery({
    queryKey: ["totalCarCount"],
    queryFn: async () => {
      const res = await axios.get("/car/count");
      return res.data?.totalCars || 0;
    },
  });

  return { totalCars };
};

export default useTotalCars;
