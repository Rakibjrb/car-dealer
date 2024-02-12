import { MdOutlineGarage } from "react-icons/md";
import { IoMdAddCircleOutline } from "react-icons/io";
import { TbTruckDelivery } from "react-icons/tb";
import { FaRegMoneyBillAlt } from "react-icons/fa";

const featuers = [
  {
    icon: <MdOutlineGarage className="text-red-600 text-5xl" />,
    title: "12 Monate Garantie",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    icon: <IoMdAddCircleOutline className="text-red-600 text-5xl" />,
    title: "12 Monate Garantie",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    icon: <TbTruckDelivery className="text-red-600 text-5xl" />,
    title: "12 Monate Garantie",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    icon: <FaRegMoneyBillAlt className="text-red-600 text-5xl" />,
    title: "12 Monate Garantie",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
];

const CarFeatures = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-4 lg:gap-1 border p-5 rounded-md">
      {featuers?.map((feature, index) => (
        <div
          key={`cardetailsfeatures${index}`}
          className="text-center space-y-3 md:odd:border-r lg:border-r lg:pr-1 last:border-r-0 last:pr-0"
        >
          <div className="flex justify-center">{feature.icon}</div>
          <h3 className="text-2xl font-semibold">{feature.title}</h3>
          <p>{feature.description}</p>
        </div>
      ))}
    </div>
  );
};

export default CarFeatures;
