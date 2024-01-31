import Card from "../../../Components/Card/Card";
import Header from "../../../Components/Header/Header";
import useFeatured from "../../../Hooks/useFeatured";

const Featured = () => {
  const { featured } = useFeatured();
  return (
    <div className="bg-[#F2F5FC]">
      <div className="max-w-screen-xl mx-auto font-raleway py-24 xl:py-32 px-3 xl:px-0">
        <Header maintext={"Find The Best"} colortext={"Deals"} />
        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {featured?.map((feature, index) => (
            <Card key={`featuredCard${index}`} data={feature} />
          ))}
        </div>
        <div className="flex justify-center mt-10">
          <button className="bg-red-600 py-3 px-7 rounded-md uppercase font-semibold text-white">
            More Listings
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
