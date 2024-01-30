import Banner from "../../Pages/Home/Banner/Banner";
import BestSelling from "../../Pages/Home/BestSelling/BestSelling";
import Dealer from "../../Pages/Home/Dealer/Dealer";
import Features from "../../Pages/Home/Features/Features";
import VehicleTypes from "../../Pages/Home/VehicleTypes/VehicleTypes";

const Main = () => {
  return (
    <div className="space-y-24 lg:space-y-32">
      <Banner />
      <Dealer />
      <VehicleTypes />
      <Features />
      <BestSelling />
      <div></div>
    </div>
  );
};

export default Main;
