import React from 'react'
import FooterLogo from "../../assets/img/safor_logo.png";
import { Link } from "react-router-dom";
const Advertise = () => {
  return (
    <footer className='py-5  overflow-hidden'>


      <div className="container">
        <div className="row pt-5  align-items-start">
          <div className="col-md-3">
            <img src={FooterLogo} alt="Tycoon Smart Solutions " width={250} className='mb-2' />
            <div className=' pt-3 pe-5 small lh-sm short-text text-justify'>Safor Travels is a Bangladesh-based travel agency dedicated to providing reliable, affordable, and personalized travel solutions. We aim to make every journey smooth, safe, and memorable by offering end-to-end travel services for individuals, families, and corporate clients.
</div>
          </div>

          <div className="col-md-3">
            <h3 className='mb-2'>Our Services</h3>
            <ul>
              <Link><li>Air Ticketing
              </li>
              </Link>
              <Link> <li>Hajj and Umrah Services
              </li>
              </Link>
              <Link><li>Tour Packaging
              </li>
              </Link>
              <Link><li>Visa Assistance</li></Link>
              <Link><li>Hotel Reservation</li></Link>
           
            </ul>
          </div>



          <div className="col-md-3">
            <h3 className='mb-2'>Quick Links</h3>
            <ul>
              <Link><li>Home</li>
              </Link>
              <Link><li>Why Choose us</li>
              </Link>
              <Link><li>Testimonials</li>
              </Link>
              <Link><li>Contact</li>
              </Link>
              
              <Link><li>Sign Up</li>
              </Link>
            </ul>
          </div>

          <div className="col-md-3">
            <h3 className='mb-3'>Get In Touch</h3>
            <div>
              <p>
              Safor Travels

              </p>


           
              <div className='mt-2'>
                Phone: +880 1711-792071

              
              </div>
              <div className='d-flex align-items-center justify-content-start mt-2 gap-3'>
                <Link to="https://www.facebook.com/safortravelagency" target='blank' style={{ color: '#00BFFF' }}>
                  <i className="bi bi-facebook fs-3 iconz "></i>
                </Link>
                <Link to="" style={{ color: '#00BFFF' }}>
                  <i className="bi bi-linkedin fs-3  iconz"></i>
                </Link>
                <Link to="" style={{ color: '#00BFFF' }}>
                  <i className="bi bi-instagram fs-3  iconz"></i>
                </Link>
                <Link to="" style={{ color: '#00BFFF' }}>
                  <i className="bi bi-youtube fs-2  iconz"></i>
                </Link>
              </div>
            </div>
          </div>

        </div>

        <hr />

        <div className="row" >
          <div className="col-md-12 text-center pt-1 text-dark">
            <p>&copy;2026 All rights reserve</p>
          </div>
        </div>
      </div>


    </footer>
  )
}

export default Advertise
