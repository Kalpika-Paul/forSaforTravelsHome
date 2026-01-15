import React from 'react'
import FooterLogo from "../../assets/img/Tycoon-Logo.png";
import { Link } from "react-router-dom";
const Advertise = () => {
  return (
    <footer className='py-5  overflow-hidden'>
    {/* <div className="row newsletter ">
      <div className="col-md-6">
        <div>
          <h3 className='text-white text-center mt-5'>Sign in To Our Newsletter <br /> Lets Connect !!!
          </h3>
        </div>
      </div>
      <div className="col-md-6 py-3">
        <Link>
          <InputGroup className=" py-5 newslet ">
            <Form.Control className='form-place'
              placeholder="Your Email"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <InputGroup.Text id="basic-addon2" className='subbtn'>Subscribe</InputGroup.Text>
          </InputGroup>
        </Link>
      </div>
    </div> */}

    <div className="container">
      <div className="row pt-5  align-items-start">
        <div className="col-md-3">
          <img src={FooterLogo} alt="Tycoon Smart Solutions " width={250} className='mb-2' />
          <div className=' pt-3 pe-5 small lh-sm short-text text-justify'>Tycoon Hi-Tech Park is a growing consumer home appliance manufacturer company in Bangladesh. Our vision is to manufacture products locally and to make Bangladesh proud of Made-in-Bangladesh level by providing latest technologies oriented and highly innovative products which are obviously better than the competitors. Our design is extremely export</div>
        </div>

        <div className="col-md-3">
          <h3 className='mb-2'>Our Products</h3>
          <ul>
            <Link><li>Refrigerators
            </li>
            </Link>
            <Link> <li>Microwave Ovens
            </li>
            </Link>
            <Link><li>LED Television
            </li>
            </Link>
            <Link><li>Rice Cookers</li></Link>
            <Link><li>Mixer Grinders</li></Link>
            <Link><li>Pressure Cookers</li></Link>
            <Link><li>Kitchen Appliances</li></Link>
          </ul>
        </div>



        <div className="col-md-3">
          <h3 className='mb-2'>Quick Links</h3>
          <ul>
            <Link><li>Home</li>
            </Link>
            <Link><li>About Us</li>
            </Link>
            <Link><li>Testimonials</li>
            </Link>
            <Link><li>Contact</li>
            </Link>
            <Link><li>Login</li>
            </Link>
            <Link><li>Register</li>
            </Link>
          </ul>
        </div>

        <div className="col-md-3">
          <h3 className='mb-3'>Get In Touch</h3>
          <div>
            <p>
              <span className='fw-bolder'>Head Office:
              </span> <br />
              Mirpur, Dhaka, Bangladesh
            </p>


            <div>
              <span className='fw-bolder'>Regional Office / Showroom:
              </span> <br />
              377, Jhenaidah Road,  Chourhash,<br />
              Kushtia-7000, Bangladesh <br />

            </div>
            <div className='mt-2'>
              Phone: +880–1332–522980
              <br />
              Email: info@tycoonbd.com
            </div>
            <div className='d-flex align-items-center justify-content-start mt-2 gap-3'>
              <Link to="https://www.facebook.com/tycoonhitechpark" target='blank' style={{ color: '#e82d31' }}>
                <i className="bi bi-facebook fs-3 iconz "></i>
              </Link>
              <Link to="" style={{ color: '#e82d31' }}>
                <i className="bi bi-linkedin fs-3  iconz"></i>
              </Link>
              <Link to="" style={{ color: '#e82d31' }}>
                <i className="bi bi-instagram fs-3  iconz"></i>
              </Link>
              <Link to="" style={{ color: '#e82d31' }}>
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
