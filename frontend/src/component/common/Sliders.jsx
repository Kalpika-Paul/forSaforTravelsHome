import React from 'react'
import SwiperOne from "../../assets/img/1.jpeg";
import SwiperTwo from "../../assets/img/8.jpeg";
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
const Advertise = () => {
  const slider = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: { slidesToShow: 4 }
      },
      {
        breakpoint: 992,
        settings: { slidesToShow: 3 }
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 }
      },
      {

        breakpoint: 576,
        settings: { slidesToShow: 1 }

      },

      {

        breakpoint: 375,
        settings: { slidesToShow: 1 },

      },
    ]
  };

  return (
    <section className='sectionOne mt-5'>
    <Swiper
      modules={[Autoplay]}
      slidesPerView={1}
      loop
      autoplay={{ delay: 3000, disableOnInteraction: false }}
    >
      <SwiperSlide>
        <div
          className='content'
          style={{ backgroundImage: `url(${SwiperOne})` }}
        ></div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          className='content'
          style={{ backgroundImage: `url(${SwiperTwo})` }}
        ></div>
      </SwiperSlide>
    </Swiper>
  </section>

  )
}

export default Advertise
