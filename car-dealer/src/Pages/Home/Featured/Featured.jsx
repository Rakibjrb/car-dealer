import { useState } from "react";
import Card from "../../../Components/Card/Card";
import Header from "../../../Components/Header/Header";
import useFeatured from "../../../Hooks/useFeatured";
import Spinner from "../../../Components/Spinner/Spinner";

const Featured = () => {
  const [more, setMore] = useState(6);
  const { featured, isLoading } = useFeatured();
  const totalFeatured = featured?.length;

  return (
    <div className="bg-[#F2F5FC]">
      <div className="max-w-screen-xl mx-auto font-raleway py-24 xl:py-32 px-3 xl:px-0">
        <Header maintext={"Find The Best"} colortext={"Deals"} />
        {isLoading ? (
          <div className="mt-10">
            <Spinner />
          </div>
        ) : (
          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {featured?.slice(0, more).map((feature, index) => (
              <Card key={`featuredCard${index}`} data={feature} />
            ))}
          </div>
        )}
        {more == 6 ? (
          <div>
            {featured?.length > 6 && (
              <div className="flex justify-center mt-10">
                <button
                  onClick={() => setMore(totalFeatured)}
                  className="bg-red-600 hover:bg-red-700 transition-colors py-3 px-7 rounded-md uppercase font-semibold text-white"
                >
                  More Listings
                </button>
              </div>
            )}
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Featured;
