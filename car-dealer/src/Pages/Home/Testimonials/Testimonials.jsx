import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import clinetImage from "../../../assets/images/client/client.jpg";
import "swiper/css";

const Testimonials = () => {
  const slider = useSwiper();
  console.log(slider);

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
            <SwiperSlide>
              <div className={`mt-5 w-full`}>
                <p className="text-xl text-justify leading-10 font-semibold text-[#777]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
                  ipsum dolor sit amet consectetur adipisicing elit. Incidunt
                  expedita quae eligendi sequi dolor nihil dolorum maxime,
                  distinctio ipsum dolor sit amet consectetur adipisicing elit.
                  Incidunt expedita quae eligendi sequi dolor nihil dolorum
                  maxime, distinctio
                </p>
                <div className="mt-8 flex justify-between items-center">
                  <div className=" flex items-center gap-3">
                    <img
                      className="w-14 h-14 rounded-full"
                      src="https://i.ibb.co/5x441PC/user.png"
                      alt=""
                    />
                    <div>
                      <h3 className="text-2xl font-bold">John Doe</h3>
                      <h4 className="font-sans">Date : 1/2/24</h4>
                    </div>
                  </div>
                  <div className="flex items-center gap-5">
                    <button className="border border-black p-3 rounded-full hover:text-white hover:bg-red-600 transition-colors">
                      <FaArrowLeft className="text-xl" />
                    </button>
                    <button className="border border-black p-3 rounded-full hover:text-white hover:bg-red-600 transition-colors">
                      <FaArrowRight className="text-xl" />
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={`mt-5 w-full`}>
                <p className="text-xl text-justify leading-10 font-semibold text-[#777]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
                  ipsum dolor sit amet consectetur adipisicing elit. Incidunt
                  expedita quae eligendi sequi dolor nihil dolorum maxime,
                  distinctio ipsum dolor sit amet consectetur adipisicing elit.
                  Incidunt expedita quae eligendi sequi dolor nihil dolorum
                  maxime, distinctio
                </p>
                <div className="mt-8 flex justify-between items-center">
                  <div className=" flex items-center gap-3">
                    <img
                      className="w-14 h-14 rounded-full"
                      src="https://i.ibb.co/5x441PC/user.png"
                      alt=""
                    />
                    <div>
                      <h3 className="text-2xl font-bold">John Doe</h3>
                      <h4 className="font-sans">Date : 1/2/24</h4>
                    </div>
                  </div>
                  <div className="flex items-center gap-5">
                    <button className="border border-black p-3 rounded-full hover:text-white hover:bg-red-600 transition-colors">
                      <FaArrowLeft className="text-xl" />
                    </button>
                    <button className="border border-black p-3 rounded-full hover:text-white hover:bg-red-600 transition-colors">
                      <FaArrowRight className="text-xl" />
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
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
