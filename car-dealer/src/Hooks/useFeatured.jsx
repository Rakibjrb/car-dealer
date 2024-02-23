import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./axios/useAxiosPublic";

const useFeatured = () => {
  const axios = useAxiosPublic();
  const {
    data: featured = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["featuerd"],
    queryFn: async () => {
      const res = await axios.get("/featured");
      return res.data;
    },
  });

  return { featured, refetch, isLoading };
};

export default useFeatured;
