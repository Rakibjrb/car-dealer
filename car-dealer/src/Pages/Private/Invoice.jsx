import moment from "moment";
import useData from "../../Hooks/data/useData";

const Invoice = () => {
  const { deliveryInfo } = useData();
  console.log(deliveryInfo);
  return (
    <div className="max-w-screen-xl mx-auto py-10 px-3 xl:px-0">
      <div className="font-sans">
        <div className="bg-red-800 h-8 w-full mb-5"></div>
        {/* invoice header */}
        <div className="flex justify-between items-center px-5">
          <h1 className="text-3xl font-bold">Invoice</h1>
          <h4 className="uppercase font-semibold text-3xl">
            Moto<span className="text-red-600">RX</span>
          </h4>
        </div>
        {/* invoice body */}
        <div className="px-5">
          <div className="pt-7 flex justify-between">
            <div className="space-y-2">
              <h4 className="text-xl">Dhaka, Bangladesh</h4>
              <h4 className="text-xl">+8801732247599</h4>
              <h4 className="text-xl">info@motorx.com</h4>
            </div>
            <div className="space-y-2">
              <h4 className="text-xl">
                Date : {moment().format("DD-MM-YYYY")}
              </h4>
              <h4>Invoice No. : {deliveryInfo?._id}</h4>
            </div>
          </div>
          <div className="mt-8">
            <h3 className="text-2xl font-bold border-b-4 border-b-black pb-4 mb-4">
              Bill To
            </h3>
            <div className="space-y-2">
              <h4 className="text-xl">Name : {deliveryInfo?.username}</h4>
              <h4 className="text-xl">Phone : {deliveryInfo?.phone}</h4>
              <h4 className="text-xl">Email : {deliveryInfo?.useremail}</h4>
            </div>
          </div>
        </div>
        <div className="bg-red-800 h-8 w-full mt-5"></div>
      </div>
    </div>
  );
};

export default Invoice;
