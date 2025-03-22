import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import placeholder from "../assets/placeholder.svg";

import "./Slider.css";

<Swiper
  modules={[Navigation, Pagination]}
  slidesPerView={1}
  pagination={{ clickable: true }}
  navigation
></Swiper>;

const Slider = () => {
  const imagens = [
    { id: 1, image: placeholder },
    { id: 2, image: placeholder },
    { id: 3, image: placeholder },
    { id: 4, image: placeholder },
  ];

  return (
    <div className="slider-container">
      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView={1}
        pagination={{ clickable: false }}
        navigation
      >
        {imagens.map((img) => (
          <SwiperSlide key={img.id}>
            <img
              className="slide-img"
              src={img.image}
              alt={`Slide ${img.id}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
