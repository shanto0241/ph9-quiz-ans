import React from "react";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "../../App.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
// import Slider from "./Slider";

import image1 from "../../assets/img-1.jpg";
import image2 from "../../assets/img-2.png";
import image3 from "../../assets/img-3.jpg";
import image4 from "../../assets/img-4.jpg";

const Header = () => {
  return (
    <div>
      <Swiper
        navigation={true}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination, Navigation]}
        className="justify-center shadow-lg"
      >
        <SwiperSlide>
          <img src={image1} alt="img-1"></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src={image2} alt="img-2"></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src={image3} alt="img-3"></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src={image4} alt="img-4"></img>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://www.businessleader.co.uk/wp-content/uploads/2021/08/Institute-of-Coding-1024x576.jpg"
            alt="img-5"
          ></img>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Header;
