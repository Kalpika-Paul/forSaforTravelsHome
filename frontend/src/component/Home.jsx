import React, { useState, useEffect } from "react";
import "swiper/css";
import Header from "./common/Header";
import Footer from "./common/Footer";
import Sliders from "./common/Sliders";
import Advertise from "./common/Advertise";
import Products from "./common/Products";
import Testimonials from "./common/Testimonials";
import Productrange from "./common/Productrange";
import axios from "axios";
import BannerImage from "../assets/img/8b.jpeg";

const Home = () => {

  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess("");
    setError("");

    try {
      const response = await axios.post(
        "http://localhost:8000/api/contact-request",
        formData
      );

      setSuccess(response.data.message);
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (err) {
      setError("Something went wrong. Please try again.");
    }
  };

 
  useEffect(() => {
    const elements = document.querySelectorAll(".fade");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach((el) => observer.observe(el));
  }, []);

  return (
    <>
      <Header />
      <Sliders />
      <Productrange />
      {/* banner start */}
      <section className="sectionThree">
        <div className="container-fluid mt-5">
          <div className="row">
            <div className="col-12">
            <img
  src={BannerImage}
  alt="Tycoon Hi-Tech Park showcasing latest technology solutions"
  className="img-banner fade"
/>


            </div>
          </div>
        </div>
      </section>
      {/* banner end */}
      <Products />
      <Advertise />
      <Testimonials />


      {/* ================= CONTACT SECTION ================= */}

      <section className="contact-section">
        <div className="container">
          <h2 className="contactTop mb-5 fade">Let's Connect!</h2>

          {success && <p className="text-success">{success}</p>}
          {error && <p className="text-danger">{error}</p>}

          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="fade"
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="fade"
            />

            <input
              type="text"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="fade"
            />

            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className="fade"
            />

            <button type="submit" className="fade">
              Send Message
            </button>
          </form>
        </div>
      </section>
      {/* =================================================== */}

      <button className="chat-button">💬</button>

      <Footer />
    </>
  );
};

export default Home;
