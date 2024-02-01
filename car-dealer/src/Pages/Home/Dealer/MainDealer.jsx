import { useState } from "react";
import acura from "../../../assets/images/dealer/company1.jpg";
import ford from "../../../assets/images/dealer/company2.jpg";
import bentley from "../../../assets/images/dealer/company3.jpg";
import mercedes from "../../../assets/images/dealer/company4.jpg";
import dealercar1 from "../../../assets/images/dealer/dealercar.png";
import dealercar2 from "../../../assets/images/vehicletypes/car1.png";
import dealercar3 from "../../../assets/images/vehicletypes/car2.png";
import dealercar4 from "../../../assets/images/vehicletypes/car3.png";

const companies = [
  {
    name: "Acura",
    img: acura,
    speakers: 30,
    activeCustomers: 18,
    showRooms: 15,
    experience: 30,
    carImage: dealercar1,
  },
  {
    name: "Ford",
    img: ford,
    speakers: 21,
    activeCustomers: 12,
    showRooms: 11,
    experience: 20,
    carImage: dealercar2,
  },
  {
    name: "Bentley",
    img: bentley,
    speakers: 31,
    activeCustomers: 28,
    showRooms: 25,
    experience: 34,
    carImage: dealercar3,
  },
  {
    name: "Mercedes",
    img: mercedes,
    speakers: 50,
    activeCustomers: 50,
    showRooms: 30,
    experience: 51,
    carImage: dealercar4,
  },
];

const MainDealer = () => {
  const [dealerInfo, setDealerInfo] = useState({
    speakers: 30,
    activeCustomers: 18,
    showRooms: 15,
    experience: 30,
    carImage: dealercar1,
  });

  const handleDealerInfo = (company) =>
    setDealerInfo({
      speakers: company?.speakers || 0,
      activeCustomers: company?.activeCustomers || 0,
      showRooms: company?.showRooms || 0,
      experience: company?.experience || 0,
      carImage: company?.carImage,
    });

  return (
    <div className="grid md:grid-cols-4 gap-8 md:gap-4">
      <div className="bg-black md:col-span-1 p-8 space-y-6 rounded-lg">
        {companies?.map((company, index) => (
          <div
            onClick={() => handleDealerInfo(company)}
            key={`bestdealers${index}`}
            className="cursor-pointer hover:opacity-70 transition-all"
          >
            <div className="flex justify-center">
              <img src={company?.img} alt={company?.name} />
            </div>
            <h3 className="text-white text-center font-semibold text-xl">
              {company?.name}
            </h3>
          </div>
        ))}
      </div>
      <div className="md:col-span-3">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 md:gap-0">
          <div className="flex md:justify-center items-end">
            <h2 className="text-5xl md:text-7xl text-red-600 font-bold mr-4">
              {dealerInfo?.speakers}
            </h2>
            <p className="md:text-xl w-1/3 font-semibold">Skilled Speakers</p>
          </div>
          <div className="flex md:justify-center items-end">
            <h2 className="text-5xl md:text-7xl text-red-600 font-bold mr-4">
              {dealerInfo?.activeCustomers}k
            </h2>
            <p className="md:text-xl w-1/3 font-semibold">Active Customers</p>
          </div>
          <div className="flex md:justify-center items-end md:mt-5 lg:mt-0">
            <h2 className="text-5xl md:text-7xl text-red-600 font-bold mr-4">
              {dealerInfo?.showRooms}
            </h2>
            <p className="md:text-xl w-1/3 font-semibold">Open Showrooms</p>
          </div>
          <div className="flex md:justify-center items-end md:mt-5 lg:mt-0 lg:hidden">
            <h2 className="text-5xl md:text-7xl text-red-600 font-bold mr-4">
              {dealerInfo?.experience}
            </h2>
            <p className="md:text-xl w-1/3 font-semibold">Year of experience</p>
          </div>
        </div>
        <div className="relative">
          <img
            className="w-full lg:w-full xl:w-[70%] mx-auto md:mt-16"
            src={dealerInfo.carImage}
            alt=""
          />
          <div className="absolute md:-top-20 md:right-5 lg:top-0 lg:right-10 xl:top-2 xl:right-24 bg-[#f5f5f5] border-b-4 py-5 border-b-black hidden lg:block">
            <h2 className="text-7xl text-red-600 font-bold text-center">
              {dealerInfo?.experience}
            </h2>
            <p className="text-xl text-center font-semibold w-2/3 mx-auto mt-4">
              Year of experience
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainDealer;
