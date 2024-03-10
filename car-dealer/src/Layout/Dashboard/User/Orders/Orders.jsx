import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../Hooks/axios/useAxiosSecure";
import Spinner from "../../../../Components/Spinner/Spinner";
import Order from "./Order";

const Orders = () => {
  const axios = useAxiosSecure();

  const { data: orders, isLoading } = useQuery({
    queryKey: ["get-all-orders"],
    queryFn: async () => {
      const res = await axios.get("/orders/all");
      return res.data;
    },
  });

  return (
    <div className="max-w-screen-xl mx-auto px-3 xl:px-0 mt-5 md:mt-10">
      <h1 className="text-center text-4xl font-bold">Order List</h1>
      {isLoading ? (
        <div className="mt-8">
          <Spinner />
        </div>
      ) : orders?.length ? (
        <div className="overflow-x-scroll md:overflow-auto">
          <table className="w-[720px] md:w-full mt-10">
            <thead>
              <tr>
                <td className="font-bold text-xl">Title</td>
                <td className="font-bold text-xl">Name</td>
                <td className="font-bold text-xl">Date</td>
                <td className="font-bold text-xl"></td>
              </tr>
            </thead>
            <tbody>
              {orders?.map((order) => (
                <Order key={order._id} order={order} />
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <h2 className="text-center text-xl font-semibold mt-5">
          No data found
        </h2>
      )}
    </div>
  );
};

export default Orders;
