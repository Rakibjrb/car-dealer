import acura from "../../../assets/images/dealer/company1.jpg";
import ford from "../../../assets/images/dealer/company2.jpg";
import bentley from "../../../assets/images/dealer/company3.jpg";
import mercedes from "../../../assets/images/dealer/company4.jpg";
import dealercar from "../../../assets/images/dealer/dealercar.png";

const companies = [
  { id: "laakdfja2332", name: "Acura", img: acura },
  { id: "laakdfja233dsaf2", name: "Ford", img: ford },
  { id: "laakdfja2332asdfa", name: "Bentley", img: bentley },
  { id: "laakdfjaasdf2332", name: "Mercedes", img: mercedes },
];

const MainDealer = () => {
  return (
    <div className="grid md:grid-cols-4 gap-8 md:gap-4">
      <div className="bg-black md:col-span-1 p-8 space-y-6 rounded-lg">
        {companies?.map((company) => (
          <div key={company.id}>
            <div className="flex justify-center">
              <img src={company.img} alt={company.name} />
            </div>
            <h3 className="text-white text-center font-semibold text-xl">
              {company.name}
            </h3>
          </div>
        ))}
      </div>
      <div className="md:col-span-3">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 md:gap-0">
          <div className="flex md:justify-center items-end">
            <h2 className="text-5xl md:text-7xl text-red-600 font-bold mr-4">
              20
            </h2>
            <p className="md:text-xl w-1/3 font-semibold">Skilled Speakers</p>
          </div>
          <div className="flex md:justify-center items-end">
            <h2 className="text-5xl md:text-7xl text-red-600 font-bold mr-4">
              12k
            </h2>
            <p className="md:text-xl w-1/3 font-semibold">Active Customers</p>
          </div>
          <div className="flex md:justify-center items-end md:mt-5 lg:mt-0">
            <h2 className="text-5xl md:text-7xl text-red-600 font-bold mr-4">
              15
            </h2>
            <p className="md:text-xl w-1/3 font-semibold">Open Showrooms</p>
          </div>
          <div className="flex md:justify-center items-end md:mt-5 lg:mt-0 lg:hidden">
            <h2 className="text-5xl md:text-7xl text-red-600 font-bold mr-4">
              25
            </h2>
            <p className="md:text-xl w-1/3 font-semibold">Year of experience</p>
          </div>
        </div>
        <div className="relative">
          <img
            className="w-full lg:w-full xl:w-[70%] mx-auto md:mt-16"
            src={dealercar}
            alt=""
          />
          <div className="absolute md:-top-20 md:right-5 lg:top-0 lg:right-10 xl:top-10 xl:right-32 bg-[#f5f5f5] border-b-4 py-5 border-b-black hidden lg:block">
            <h2 className="text-7xl text-red-600 font-bold text-center">25</h2>
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
