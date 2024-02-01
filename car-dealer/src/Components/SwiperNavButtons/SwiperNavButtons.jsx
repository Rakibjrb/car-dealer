import { useSwiper } from "swiper/react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const SwiperNavButtons = () => {
  const slider = useSwiper();

  return (
    <div className="flex items-center gap-5">
      <button
        onClick={() => slider.slidePrev()}
        className="border border-black p-3 rounded-full hover:text-white hover:bg-red-600 transition-colors"
      >
        <FaArrowLeft className="text-xl" />
      </button>
      <button
        onClick={() => slider.slideNext()}
        className="border border-black p-3 rounded-full hover:text-white hover:bg-red-600 transition-colors"
      >
        <FaArrowRight className="text-xl" />
      </button>
    </div>
  );
};

export default SwiperNavButtons;
