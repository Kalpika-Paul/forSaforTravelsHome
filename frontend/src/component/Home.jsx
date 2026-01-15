import React, { useState, useEffect } from "react";
import "swiper/css";
import Header from "./common/Header";
import Footer from "./common/Footer";
import Products from "./common/Hotels";
import Productrange from "./common/Offers";
import axios from "axios";
import BannerImage from "../assets/img/tbb.jpg";
import Backimage from "./common/Backimage";
import Places from "./common/Places";
import Clients from "./common/Clients";

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
      <Backimage />
      <Productrange />
      <Places />


      {/* banner start */}
      <section className="sectionThree">
        <div className="container-fluid mt-1">
          <div className="row">
            <div className="col-12">
              <img
                src={BannerImage}
                alt="Safor Travels"
                className="img-banner fade bannerimg"
              />

            </div>
          </div>
        </div>
      </section>
      {/* banner end */}
      <Products />

      <Clients />



      <section className="contact-section">
        <div className="container">
          <h2 className="contactTop mb-5 fade text-center">Let's Connect!</h2>

          <div className="row align-items-start">

            <div className="col-md-6 mb-4 mb-md-0 fade text-md-start text-center py-5">
            <h2 className="mb-3 text-white">Why Choose Us?</h2>
  <p
    className="text-white"
    style={{ textAlign: 'justify', maxWidth: '400px' }}
  >
    We are committed to delivering the best service and ensuring customer satisfaction.
    Our experienced team provides personalized solutions, attention to detail, and
    innovative approaches to meet your needs. Connect with us and experience excellence!
  </p>

            </div>

            
            <div className="col-md-6 fade">
              {success && <p className="text-white">{success}</p>}
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
          </div>
        </div>
      </section>



      <button className="chat-button">💬</button>

      <Footer />
    </>
  );
};

export default Home;
