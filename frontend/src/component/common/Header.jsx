import React from 'react'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import { Link } from "react-router-dom";
import Logo from "../../assets/img/safor_logo.png";
import { BsChevronDown } from 'react-icons/bs';

const Header = () => {
  return (
    <header>
      <Navbar expand="lg" className="shadow fixed-top mb-5 backgrounds">
        <Container className="d-flex flex-column flex-lg-row align-items-center desktop-flex">
        
          <div className="d-flex justify-content-between align-items-center w-100 first-row">
            <Navbar.Brand as={Link} to="/" className='logoz shadow'>
              <img src={Logo} alt="Logo" width={170} />
            </Navbar.Brand>

           

            <Navbar.Toggle aria-controls="basic-navbar-nav" className="mt-2" />
          </div>

          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center menu-collapse mt-2">
            <Nav>
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <NavDropdown title={<span>Our Services <BsChevronDown /></span>} renderMenuOnMount>
                <NavDropdown.Item>Air Ticketing</NavDropdown.Item>
                <NavDropdown.Item>Hajj and Umrah Services</NavDropdown.Item>
                <NavDropdown.Item>Tour Packaging</NavDropdown.Item>
                <NavDropdown.Item>Visa Assistance</NavDropdown.Item>
                <NavDropdown.Item>Hotel Reservation</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title={<span>Why choose Us <BsChevronDown /></span>} renderMenuOnMount>
                <NavDropdown.Item>Our Vision and Mission</NavDropdown.Item>
                <NavDropdown.Item>What we offer</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={Link} to="">Testimonials</Nav.Link>
              <Nav.Link as={Link} to="">Contact</Nav.Link>
              <Nav.Link as={Link} to=""><span style={{fontWeight:"900"}} >SignUp
                </span></Nav.Link>
            </Nav>
          </Navbar.Collapse>
           
        </Container>
      </Navbar>
    </header>
  )
}

export default Header;
