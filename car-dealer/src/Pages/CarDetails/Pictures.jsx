import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const Pictures = ({ images }) => {
  const [image, setImage] = useState();

  useEffect(() => {
    if (images) {
      setImage(images[0]);
    }
  }, [images]);

  return (
    <div className="">
      <img className="rounded-lg" src={image} alt="" />
      <div className="mt-3">
        <Swiper slidesPerView={4} spaceBetween={12}>
          {images?.map((image, index) => (
            <SwiperSlide key={`carimages${index}`}>
              <div onClick={() => setImage(image)}>
                <img className="w-full h-[100px] rounded-lg" src={image} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

Pictures.propTypes = {
  images: PropTypes.array,
};
export default Pictures;
