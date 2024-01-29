import Banner from "../../Pages/Home/Banner/Banner";
import Dealer from "../../Pages/Home/Dealer/Dealer";
import VehicleTypes from "../../Pages/Home/VehicleTypes/VehicleTypes";

const Main = () => {
  return (
    <div className="space-y-24 lg:space-y-32">
      <Banner />
      <Dealer />
      <VehicleTypes />
      <div></div>
    </div>
  );
};

export default Main;
