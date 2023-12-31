import React, { useRef, useEffect } from "react";
import "./CharachterModSlider.css";

import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide, SwiperRef } from "swiper/react";

import "swiper/css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import { CharachterMod } from "../../Utils/Interfaces/Interfaces";

const CharachterModSlider: React.FC<CharachterMod> = ({
  Model,
  Wrapper,
  setActive,
  role,
  texture,
}) => {
  const back = useRef<any>(null);
  const next = useRef<any>(null);
  const swiper = useRef<SwiperRef>(null);

  const handleNext = () => {
    swiper.current?.swiper.slideNext();
  };

  const handlePrev = () => {
    swiper.current?.swiper.slidePrev();
  };

  return (
    <div className="charachter-mod-slider-wrapper">
      <span onClick={handlePrev}>
        <ArrowBackIosIcon className="arrows-icon" ref={back} />
      </span>

      <Swiper
        centeredSlides
        modules={[Navigation, Pagination]}
        className="swiper"
        spaceBetween={0}
        slidesPerView={1}
        loop
        ref={swiper}
        onInit={(swiper) => {
          setActive({
            model: swiper.slides[swiper.activeIndex].children[0],
            role: role,
            texture:
              swiper.slides[swiper.activeIndex].children[0].getAttribute(
                "data-texture"
              ),
          });
        }}
        onActiveIndexChange={(swiper) => {
          setActive({
            model: swiper.slides[swiper.activeIndex].children[0],
            role: role,
            texture:
              swiper.slides[swiper.activeIndex].children[0].getAttribute(
                "data-texture"
              ),
          });
        }}
      >
        {texture.map((e) => (
          <SwiperSlide className="slides">
            <Wrapper Model={Model} texture={e} />
          </SwiperSlide>
        ))}
      </Swiper>

      <span onClick={handleNext}>
        <ArrowForwardIosIcon className="arrows-icon" ref={next} />
      </span>
    </div>
  );
};

export default CharachterModSlider;
