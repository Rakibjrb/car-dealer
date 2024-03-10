import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../Hooks/auth/useAuth";
import Spinner from "../../../../Components/Spinner/Spinner";
import FavouriteCard from "../../../../Components/Card/FavouriteCard";
import useAxiosSecure from "../../../../Hooks/axios/useAxiosSecure";

const Favourites = () => {
  const axios = useAxiosSecure();
  const { user } = useAuth();

  const {
    data: favourites,
    isLoading,
    refetch: reloadFavourites,
  } = useQuery({
    queryKey: ["getFavourite-Items"],
    queryFn: async () => {
      const res = await axios(`/favourites/${user.email}`);
      return res.data;
    },
  });

  return (
    <div className="max-w-screen-xl mx-auto px-3 xl:px-0 mt-5 md:mt-10">
      <h1 className="text-center text-4xl font-bold">Favourite Items</h1>
      <div className="grid gap-6 md:grid-cols-2 md:gap-4 mt-10">
        {isLoading ? (
          <div className="my-8 col-span-2">
            <Spinner />
          </div>
        ) : !favourites?.length ? (
          <h1 className="text-2xl text-center col-span-2">
            No Favourite Items Found
          </h1>
        ) : (
          favourites?.map((item) => (
            <FavouriteCard
              key={item?._id}
              item={item}
              reloadFavourites={reloadFavourites}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Favourites;
