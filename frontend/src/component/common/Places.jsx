import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';

import Place1 from '../../assets/img/london.webp';
import Place2 from '../../assets/img/nepal.jfif';
import Place3 from '../../assets/img/paris.avif';
import Place4 from '../../assets/img/bhutan.jfif';
import Place5 from '../../assets/img/thailand.webp'; 

const Places = () => {
  const places = [
    { title: 'London', img: Place1 },
    { title: 'Nepal', img: Place2 },
    { title: 'Paris', img: Place3 },
    { title: 'Bhutan', img: Place4 },
    { title: 'Thailand', img: Place5 },
  ];

  return (
    <section className="places-section">
      <div className="container">
        <h2 className="placeTop text-center mb-4">
          Let’s plan for next trip
        </h2>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          autoplay={{ delay: 3000 }}
          breakpoints={{
            0: { slidesPerView: 1 },    
            576: { slidesPerView: 2 }, 
            992: { slidesPerView: 4 },   
          }}
        >
          {places.map((place, index) => (
            <SwiperSlide key={index}>
              <div
                className="place-card"
                style={{ backgroundImage: `url(${place.img})` }}
              >
                <div className="place-text">
                  <h5>{place.title}</h5>
                  <span>Explore Now</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Places;
