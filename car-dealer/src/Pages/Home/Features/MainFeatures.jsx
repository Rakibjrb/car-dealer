import icon1 from "../../../assets/images/features/icon1.jpg";
import icon2 from "../../../assets/images/features/icon2.jpg";
import icon3 from "../../../assets/images/features/icon3.jpg";
import icon4 from "../../../assets/images/features/icon4.jpg";

const features = [
  { id: "alsdfds298ru32", title: "Trusted Car Leadership", icon: icon1 },
  { id: "alsdfds298ru32234", title: "Trusted Car Leadership", icon: icon2 },
  { id: "alsdfds298ru324234", title: "Trusted Car Leadership", icon: icon3 },
  { id: "alsdfds298ru32asdg234", title: "Trusted Car Leadership", icon: icon4 },
];

const MainFeatures = () => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 font-raleway pt-6">
      {features?.map((feature) => (
        <div key={feature.id} className="">
          <img className="mx-auto" src={feature.icon} alt="" />
          <h3 className="text-center text-xl mt-10">{feature.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default MainFeatures;
