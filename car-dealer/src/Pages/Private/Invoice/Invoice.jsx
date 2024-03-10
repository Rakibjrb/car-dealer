import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Table from "./Table";
import Modal from "../../../Modal/Modal";
import Payment from "../payment/Payment";
import useAxiosSecure from "../../../Hooks/axios/useAxiosSecure";

const Invoice = () => {
  const id = useParams().id;
  const [paymentInfo, setPaymentInfo] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const axios = useAxiosSecure();

  const handleProcced = () => {
    setIsOpen(true);
  };

  const cancelOrder = () => {
    sessionStorage.removeItem("invoiceInfo");
    navigate("/");
  };

  useEffect(() => {
    if (id != "order") {
      axios
        .get(`/orders/${id}`)
        .then((res) => setPaymentInfo(res.data))
        .catch(() => setPaymentInfo({}));
    } else {
      const invoiceInfo = sessionStorage.getItem("invoiceInfo");
      if (invoiceInfo) {
        const info = JSON.parse(invoiceInfo);
        const serviceCharge = 50;
        const tax = 60;
        const price = parseFloat(info?.price);
        const total = price + tax + serviceCharge;
        const payable = total * 0.2;
        const due = total - payable;

        const newinfo = {
          ...info,
          serviceCharge,
          tax,
          total,
          payable,
          due,
        };
        setPaymentInfo(newinfo);
      }
    }
  }, [id]);

  return (
    <>
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
                <h4 className="text-xl md:text-right">{paymentInfo?.date}</h4>
                <h4 className="font-bold md:text-right">
                  Invoice ID : {paymentInfo?.invoiceId}
                </h4>
                {id != "order" && (
                  <h4 className="font-bold md:text-right">
                    TrxID ID : {paymentInfo?.trxID}
                  </h4>
                )}
              </div>
            </div>
            <div className="mt-8 flex flex-col lg:flex-row gap-5">
              <div className="flex-1">
                <h3 className="text-2xl font-bold border-b-4 border-b-black pb-4 mb-4">
                  Bill To
                </h3>
                <div className="space-y-2">
                  <h4 className="text-xl">{paymentInfo?.username}</h4>
                  <h4 className="text-xl">{paymentInfo?.phone}</h4>
                  <h4 className="text-xl">{paymentInfo?.useremail}</h4>
                  <h4 className="text-xl">{paymentInfo?.fullAddress}</h4>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold border-b-4 border-b-black pb-4 mb-4">
                  Bill Details
                </h3>
                <div className="space-y-2">
                  <h4 className="text-xl font-semibold">
                    {paymentInfo?.title}
                  </h4>
                  <h4 className="text-xl">
                    {paymentInfo?.details?.slice(0, 100) || ""}...
                  </h4>
                </div>
              </div>
            </div>
            <div className="mt-5">
              <Table info={paymentInfo} />
            </div>
          </div>
          <div className="bg-red-800 h-8 w-full mt-5"></div>
        </div>
        {id == "order" ? (
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
        ) : (
          ""
        )}
      </div>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        <div>
          <h1 className="text-center text-2xl font-bold mb-6">
            Enter Card Information
          </h1>
          <Payment info={paymentInfo} setIsOpen={setIsOpen} />
        </div>
      </Modal>
    </>
  );
};

export default Invoice;
