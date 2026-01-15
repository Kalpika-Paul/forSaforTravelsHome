import React from "react";
import Card from "react-bootstrap/Card";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

import Hotel1 from "../../assets/img/h1.jpg";
import Hotel2 from "../../assets/img/h2.jpg";
import Hotel3 from "../../assets/img/h3.jpg";
import Hotel4 from "../../assets/img/h8.jpg";

const Hotels = () => {
  const hotels = [
    { img: Hotel1, name: "Grand Palace Hotel", location: "Paris, France", price: 120 },
    { img: Hotel2, name: "Ocean View Resort", location: "Maldives", price: 180 },
    { img: Hotel3, name: "Royal Stay", location: "London, UK", price: 150 },
    { img: Hotel4, name: "Mountain Retreat", location: "Nepal", price: 90 },
  ];

  return (
    <section className="sectionFour py-5">
      <Container>
        <h2 className="productTop text-center mb-4">Popular Hotels</h2>

        <Row >
          {hotels.map((hotel, index) => (
            <Col key={index} xs={12} sm={6} md={6} lg={3}>
              <Card className="h-100 cardhover border-0">
                <Card.Img
                  variant="top"
                  src={hotel.img}
                  alt={hotel.name}
                  className="hotel-img fade"
                />
                <Card.Body className="d-flex flex-column justify-content-between">
                  <div>
                    <h5 className="fw-bold">{hotel.name}</h5>
                    <p className="text-muted mb-2">{hotel.location}</p>
                  </div>
                  <div>
                    <h6>
                      ${hotel.price} <small className="text-muted">/ night</small>
                    </h6>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <div className="text-center mt-4">
          <Link to="/hotels">
            <button className="pbtn">See More</button>
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default Hotels;
