import React, { useState, useEffect } from "react";
import "swiper/css";
import Header from "./common/Header";
import Footer from "./common/Footer";
import Products from "./common/Hotels";
import Offers from "./common/Offers";
import axios from "axios";
import BannerImage from "../assets/img/tbb.jpg";
import Backimage from "./common/Backimage";
import Places from "./common/Places";
import Clients from "./common/Clients";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

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

  const services = [
    {
      title: "✈ Air Ticketing",
      description:
        "Domestic and international flight bookings. Competitive fares with reliable airlines. Assistance with schedule changes and rebooking.",
    },
    {
      title: "🌍 Tour Packages",
      description:
        "Domestic tours (Cox’s Bazar and other destinations). International tours (India and selected global destinations). Customized tour packages based on customer needs.",
    },
    {
      title: "🛂 Visa Assistance",
      description:
        "Tourist and visit visa processing support. Documentation guidance and application follow-up. Country-specific visa consultancy.",
    },
    {
      title: "🏨 Hotel Reservations",
      description:
        "Budget, standard, and premium hotel bookings. Flexible options based on travel plans. Verified accommodation partners.",
    },
    {
      title: "🕋 Hajj & Umrah Services",
      description:
        "Complete Umrah packages. Hajj consultancy and guidance. Accommodation and travel coordination.",
    },
  ];


  return (
    <>
      <Header />
      <Backimage />
      <Offers />
      

{/* services start */}
      <section className="py-5 bg-light">
      <Container>
        <h2 className="text-center mb-5">Our Services</h2>
        <Row className="justify-content-center">
          {services.map((service, idx) => (
            <Col
              key={idx}
              xs={12}
              md={6}
              lg={4}
              className="mb-4 d-flex justify-content-center"
            >
              <Card className="service-card border-0 d-flex flex-column h-100 fade" style={{ maxWidth: "350px" }}>
                <Card.Body className="d-flex flex-column">
                  <Card.Title>{service.title}</Card.Title>
                  <Card.Text className="flex-grow-1">{service.description}</Card.Text>
                  <Button className="read-more-btn mt-3" variant="primary">
                    Read More
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
{/* services end */}


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


{/* contact start */}
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

{/* contact end */}

      <button className="chat-button">💬</button>

      <Footer />
    </>
  );
};

export default Home;
