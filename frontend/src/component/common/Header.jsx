import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { Link } from "react-router-dom";
import Logo from "../../assets/img/Tycoon-Logo.png";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { NavDropdown } from 'react-bootstrap';
import { BsChevronDown } from 'react-icons/bs';
const Header = () => {
  return (

    < header >
    <div>
      <Navbar expand="lg" className="shadow bg-white fixed-top mb-5">
        <Container>
          <div className="navbar-mobile-header d-flex d-lg-none">
            <Navbar.Brand as={Link} to="/">
              <img src={Logo} alt="Logo" width={170} />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
          </div>


          <Navbar.Brand as={Link} to="/" className="d-none d-lg-block">
            <img src={Logo} alt="Logo" width={170} />
          </Navbar.Brand>
          <InputGroup className="searchbar ps-5">
            <Form.Control
              className="form-place shadow"
              placeholder="Search Here"
            />
            <InputGroup.Text className="sbtn shadow">
              Search
            </InputGroup.Text>
          </InputGroup>




          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto align-items-center">

              <Nav.Link as={Link} to="/">Home</Nav.Link>

              <NavDropdown
                title={<span className="ps-1">Products <BsChevronDown /></span>}
                renderMenuOnMount
              >
                <NavDropdown.Item>Home Appliances</NavDropdown.Item>
                <NavDropdown.Item>Kitchen Appliances</NavDropdown.Item>
                <NavDropdown.Item>Refrigerator</NavDropdown.Item>
                <NavDropdown.Item>LED TV</NavDropdown.Item>
                <NavDropdown.Item>Accessories</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                title={
                  <span>
                    Industry <span className="ps-1"><BsChevronDown /></span>
                  </span>
                }
                renderMenuOnMount
              >
                <NavDropdown.Item>About Us</NavDropdown.Item>
                <NavDropdown.Item>Our Vision and Mission</NavDropdown.Item>
                <NavDropdown.Item>Why Choose Tycoon?</NavDropdown.Item>
                <NavDropdown.Item>Careers</NavDropdown.Item>
                <NavDropdown.Item>Our Commitment</NavDropdown.Item>
              </NavDropdown>

              <Nav.Link as={Link} to="/testimonials">Testimonials</Nav.Link>


              <Nav.Link as={Link} to="/contact">Contact</Nav.Link>


              <Nav.Link as={Link} to="/profile" className="ms-lg-3 text-dark">
                <svg width="28" height="28" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                  <path d="M14 13c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4" />
                </svg>
              </Nav.Link>


              <Nav.Link as={Link} to="/add-to-cart" className="ms-lg-3 text-dark">
                <svg width="24" height="28" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1" />
                  <path d="M2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z" />
                </svg>
              </Nav.Link>

            </Nav>
          </Navbar.Collapse>

        </Container>
      </Navbar>
      {/*......... navbar end .........*/}
    </div>
  </header >



  )
}

export default Header
