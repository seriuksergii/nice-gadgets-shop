import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './SliderSwiper.scss';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { SliderSwiperData } from './SliderSwiperData';

export const SliderSwiper: React.FC = () => {
  const handleSlideClick = (url: string) => {
    window.location.href = url;
  };

  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 8000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
        dynamicBullets: true,
      }}
      navigation={false}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      {SliderSwiperData.map((slide, index) => (
        <SwiperSlide
          key={index}
          onClick={() => handleSlideClick(slide.linkUrl)}
          className="clickable-slide"
        >
          <video
            src={slide.imgUrl}
            className="video-slider"
            autoPlay
            loop
            muted
            playsInline
            controlsList="nodownload nofullscreen noremoteplayback"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
