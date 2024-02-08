import { Link } from "react-router-dom";
import car from "../../../assets/images/vehicletypes/car.png";
import car1 from "../../../assets/images/vehicletypes/car1.png";
import car2 from "../../../assets/images/vehicletypes/car2.png";
import car3 from "../../../assets/images/vehicletypes/car3.png";
import Header from "../../../Components/Header/Header";
import "./vehicletype.css";

const cars = [
  { id: "asdfhhhe2342", img: car, name: "minivan" },
  { id: "ashhhe2342", img: car1, name: "hatchback" },
  { id: "asdfhh2342", img: car2, name: "sedan" },
  { id: "asdfhhhe342", img: car3, name: "coupe" },
];

const VehicleTypes = () => {
  return (
    <div className="bg-[#F2F5FC] py-32">
      <div className="max-w-screen-xl mx-auto font-raleway px-3 xl:px-0">
        <Header
          maintext={"Brows by your favorite"}
          colortext={"Vehicle types"}
        />
        <div className="grid md:grid-cols-3 gap-5 mt-8">
          {cars?.map((car, index) => (
            <div
              key={`type${car.id}`}
              className={`bg-black ${
                (index == 0 && "row-span-2") || (index == 1 && "row-span-2")
              } flex justify-center items-center py-5 rounded-lg relative overflow-hidden parent-div`}
            >
              <div className="linkDiv absolute top-[300px] left-0 w-full h-full bg-[#0000005c] flex justify-center items-center">
                <Link
                  to={`/listing/${car.name}`}
                  className="text-white uppercase bg-red-600 hover:bg-red-700 transition-colors px-8 py-3 rounded-lg"
                >
                  {car.name}
                </Link>
              </div>
              <img className="w-[70%]" src={car.img} alt={car.name} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VehicleTypes;
