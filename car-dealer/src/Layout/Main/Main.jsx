import Banner from "../../Pages/Home/Banner/Banner";
import BestSelling from "../../Pages/Home/BestSelling/BestSelling";
import Dealer from "../../Pages/Home/Dealer/Dealer";
import Featured from "../../Pages/Home/Featured/Featured";
import Features from "../../Pages/Home/Features/Features";
import Testimonials from "../../Pages/Home/Testimonials/Testimonials";
import VehicleTypes from "../../Pages/Home/VehicleTypes/VehicleTypes";

const Main = () => {
  return (
    <div className="space-y-24 lg:space-y-32">
      <Banner />
      <Dealer />
      <VehicleTypes />
      <Features />
      <BestSelling />
      <Featured />
      <Testimonials />
    </div>
  );
};

export default Main;
