import React from 'react'
import Slider from "react-slick";

const Testimonials = () => {

    const settings = {
        centerMode: true,
        centerPadding: "0px",
        slidesToShow: 3,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
          { breakpoint: 1200, settings: { slidesToShow: 3 } },
          { breakpoint: 992, settings: { slidesToShow: 2 } },
          { breakpoint: 576, settings: { slidesToShow: 1 } },
        ],
      };

      const testimonials = [
        { name: "xyz", feedback: "The quality and performance of Tycoon products are truly impressive! Great value for money" },
        { name: "xyz", feedback: "The quality and performance of Tycoon products are truly impressive! Great value for money" },
        { name: "xyz", feedback: "The quality and performance of Tycoon products are truly impressive! Great value for money" },
        { name: "xyz", feedback: "The quality and performance of Tycoon products are truly impressive! Great value for money" },
        { name: "xyz", feedback: "The quality and performance of Tycoon products are truly impressive! Great value for money" },
      ];
  return (
    <section className="sectionsix ">
        <div className="container py-5">
          <h2 className="section-title testimonialTop mb-5">Testimonials</h2>
          <Slider {...settings} className="testimonial-slider">
            {testimonials.map((item, index) => (
              <div className="testimonial-card" key={index}>
                <p className="feedback">"{item.feedback}"</p>
                <h4 className="name">- {item.name}</h4>
              </div>
            ))}
          </Slider>
        </div>
      </section>
  )
}

export default Testimonials
