import { Swiper, SwiperSlide } from "swiper/react";
import clinetImage from "../../../assets/images/client/client.jpg";
import SwiperNavButtons from "../../../Components/SwiperNavButtons/SwiperNavButtons";
import "swiper/css";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const Testimonials = () => {
  const { data: testimonials } = useQuery({
    queryKey: ["testimonials"],
    queryFn: async () => {
      const res = await axios.get("./testimonials.json");
      return res.data;
    },
  });

  return (
    <div className="max-w-screen-xl mx-auto px-3 xl:px-0 font-raleway">
      <div className="flex flex-col-reverse lg:flex-row justify-between gap-8 lg:gap-5">
        <div className="lg:w-3/4 xl:w-1/2 overflow-hidden">
          <h3 className="text-xl uppercase font-semibold text-red-600 border-b border-red-500 border-dotted inline-block mb-5">
            Trusted Car Dealer Service
          </h3>
          <h2 className="capitalize text-5xl font-bold">
            What Our {"Client's"} <span className="text-red-600">Says</span>
          </h2>
          <Swiper navigation>
            {testimonials?.map((testimonial, index) => (
              <SwiperSlide key={`testimonialnumber${index}`}>
                <div className={`mt-5 w-full`}>
                  <p className="text-xl text-justify leading-10 font-semibold text-[#777]">
                    {testimonial?.description}
                  </p>
                  <div className="mt-8 flex justify-between items-center">
                    <div className=" flex items-center gap-3">
                      <img
                        className="w-14 h-14 rounded-full"
                        src={testimonial?.image}
                        alt=""
                      />
                      <div>
                        <h3 className="text-2xl font-bold">
                          {testimonial?.name}
                        </h3>
                        <h4 className="font-sans">
                          Date : {testimonial?.date}
                        </h4>
                      </div>
                    </div>
                    <SwiperNavButtons />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div>
          <img className="w-auto mx-auto" src={clinetImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
