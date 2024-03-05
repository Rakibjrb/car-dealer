import { useNavigate } from "react-router-dom";
import Table from "./Table";

const Invoice = () => {
  const navigate = useNavigate();
  const invoiceInfo = sessionStorage.getItem("invoiceInfo");
  const info = JSON.parse(invoiceInfo);

  const handleProcced = () => {
    console.log(info);
  };

  const cancelOrder = () => {
    sessionStorage.removeItem("invoiceInfo");
    navigate("/");
  };

  return (
    <div className="max-w-screen-xl mx-auto py-5 px-3 xl:px-0">
      {/* invoice */}
      <div className="font-sans">
        <div className="bg-red-800 h-8 w-full mb-5"></div>
        {/* invoice header */}
        <div className="flex justify-between items-center md:px-5">
          <h1 className="text-3xl font-bold">Invoice</h1>
          <h4 className="uppercase font-semibold text-3xl">
            Moto<span className="text-red-600">RX</span>
          </h4>
        </div>
        {/* invoice body */}
        <div className="md:px-5">
          <div className="pt-7 flex flex-col md:flex-row md:justify-between gap-7 md:gap-0">
            <div className="space-y-2">
              <h4 className="text-xl">Dhaka, Bangladesh</h4>
              <h4 className="text-xl">+8801732247599</h4>
              <h4 className="text-xl">info@motorx.com</h4>
            </div>
            <div className="space-y-2">
              <h4 className="text-xl md:text-right">{info?.date}</h4>
              <h4 className="font-bold">Invoice ID : {info?.invoiceId}</h4>
            </div>
          </div>
          <div className="mt-8 flex flex-col lg:flex-row gap-5">
            <div className="flex-1">
              <h3 className="text-2xl font-bold border-b-4 border-b-black pb-4 mb-4">
                Bill To
              </h3>
              <div className="space-y-2">
                <h4 className="text-xl">{info?.username}</h4>
                <h4 className="text-xl">{info?.phone}</h4>
                <h4 className="text-xl">{info?.useremail}</h4>
                <h4 className="text-xl">{info?.fullAddress}</h4>
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold border-b-4 border-b-black pb-4 mb-4">
                Bill Details
              </h3>
              <div className="space-y-2">
                <h4 className="text-xl font-semibold">{info?.title}</h4>
                <h4 className="text-xl">{info?.details.slice(0, 130)} ...</h4>
              </div>
            </div>
          </div>
          <div className="mt-5">
            <Table info={info} />
          </div>
        </div>
        <div className="bg-red-800 h-8 w-full mt-5"></div>
      </div>
      <div className="mt-3 flex gap-3 justify-end md:justify-start">
        <button
          onClick={cancelOrder}
          className="p-3 rounded-lg bg-red-600 hover:bg-red-800 transition-colors md:w-[25%] uppercase text-white"
        >
          Cancel Order
        </button>
        <button
          onClick={handleProcced}
          className="p-3 rounded-lg bg-green-500 hover:bg-green-600 transition-colors md:w-[75%] uppercase text-white"
        >
          Procced To Pay
        </button>
      </div>
    </div>
  );
};

export default Invoice;