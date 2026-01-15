import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';
import ProductOne from '../../assets/img/10.jpg';
import ProductTwo from '../../assets/img/11.jpg';
import ProductThree from '../../assets/img/12.jpg';
import ProductFour from '../../assets/img/13.jpg';
import ProductFive from '../../assets/img/14.jpg';
import ProductSix from '../../assets/img/15.jpg';
import ProductSeven from '../../assets/img/16.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import Slider from "react-slick";
import { Container } from 'react-bootstrap'
import { Link } from "react-router-dom";



const Products = () => {
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
    <section className='sectionFour'>
        <Container>
          <h2 className='productTop mt-5 text-center'>New Arrivals</h2>

          <Slider {...slider} className="py-4">

            <div className='px-2'>
              <Card className=" border-0 h-100 p-3 cardhover">
                <Card.Img variant="top" src={ProductOne} className='img-fluid fade' />
                <Card.Body>
                  <Card.Text>
                    Tycoon Celling Fan 56″ Dynamic White Call for Price
                  </Card.Text>
                  <h4>
                    Price: 20$ <span className='text-decoration-line-through'>$30</span>
                  </h4>
                  <div>
                    <Link>
                      <button className='pbtn' size="lg">
                        Add to Cart
                      </button>
                    </Link>
                  </div>

                </Card.Body>
              </Card>
            </div>

            <div className='px-2'>
              <Card className="border-0  h-100 p-3 cardhover">
                <Card.Img variant="top" src={ProductTwo} className='img-fluid fade' />
                <Card.Body>
                  <Card.Text>
                    Tycoon Celling Fan 56″ Dynamic White Call for Price
                  </Card.Text>
                  <h4>
                    Price: 20$ <span className='text-decoration-line-through'>$30</span>
                  </h4>
                  <Link><button className='pbtn'> Add to Cart
                  </button></Link>
                </Card.Body>
              </Card>
            </div>

            <div className='px-2'>
              <Card className="border-0  h-100 p-3 cardhover">
                <Card.Img variant="top" src={ProductThree} className='img-fluid fade' />
                <Card.Body>
                  <Card.Text>
                    Tycoon Celling Fan 56″ Dynamic White Call for Price
                  </Card.Text>
                  <h4>
                    Price: 20$ <span className='text-decoration-line-through'>$30</span>
                  </h4>
                  <Link><button className='pbtn'> Add to Cart
                  </button></Link>
                </Card.Body>
              </Card>
            </div>

            <div className='px-2'>
              <Card className="border-0  h-100 p-3 cardhover">
                <Card.Img variant="top" src={ProductFour} className='img-fluid fade' />
                <Card.Body>
                  <Card.Text>
                    Tycoon Celling Fan 56″ Dynamic White Call for Price
                  </Card.Text>
                  <h4>
                    Price: 20$ <span className='text-decoration-line-through'>$30</span>
                  </h4>
                  <Link><button className='pbtn'> Add to Cart
                  </button></Link>
                </Card.Body>
              </Card>
            </div>

            <div className='px-2'>
              <Card className="border-0  h-100 p-3 cardhover">
                <Card.Img variant="top" src={ProductFive} className='img-fluid fade' />
                <Card.Body>
                  <Card.Text>
                    Tycoon Celling Fan 56″ Dynamic White Call for Price
                  </Card.Text>
                  <h4>
                    Price: 20$ <span className='text-decoration-line-through'>$30</span>
                  </h4>
                  <Link><button className='pbtn'> Add to Cart
                  </button></Link>
                </Card.Body>
              </Card>
            </div>

            <div className='px-2'>
              <Card className="border-0 h-100 p-3 cardhover">
                <Card.Img variant="top" src={ProductSix} className='img-fluid fade' />
                <Card.Body>
                  <Card.Text>
                    Tycoon Celling Fan 56″ Dynamic White Call for Price
                  </Card.Text>
                  <h4>
                    Price: 20$ <span className='text-decoration-line-through'>$30</span>
                  </h4>
                  <Link><button className='pbtn'> Add to Cart
                  </button></Link>
                </Card.Body>
              </Card>
            </div>


            <div className="px-2">
              <Card className="border-0 h-100 p-3 cardhover">
                <Card.Img variant="top" src={ProductSeven} className='img-fluid fade' />
                <Card.Body>
                  <Card.Text>
                    Tycoon Celling Fan 56″ Dynamic White Call for Price
                  </Card.Text>
                  <h4>
                    Price: 20$ <span className='text-decoration-line-through'>$30</span>
                  </h4>
                  <Link><button className='pbtn'> Add to Cart
                  </button></Link>
                </Card.Body>
              </Card>
            </div>

          </Slider>
        </Container>
      </section>

  )
}

export default Products
