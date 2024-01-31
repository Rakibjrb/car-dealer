import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useFeatured = () => {
  const { data: featured, refetch } = useQuery({
    queryKey: ["featuerd"],
    queryFn: async () => {
      const res = await axios.get("./featured.json");
      return res.data;
    },
  });

  return { featured, refetch };
};

export default useFeatured;
