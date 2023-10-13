/* eslint-disable no-unused-vars */
import React from 'react';
import './header.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <div>
      <Navbar expand="lg" className="bg-body-white navContainer mainContainer">
        <Container className='text-center '>
          <Navbar.Brand href="#home" className='ml-5'>SpdChem</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="LinkContainer ms-auto "> 
              <Link to="/"><Nav.Link href="#home" className='text-black navLinks '>Home</Nav.Link></Link>
              <Nav.Link href="#ClassDetails" className=' text-black navLinks'>Class Details</Nav.Link>
              <Nav.Link href="#Classes" className='text-black navLinks'>Classes</Nav.Link>
              <Nav.Link href="#About" className='text-black navLinks'>About</Nav.Link>
              <Link to="/login"><button className='loginBtn rounded '>Login</button></Link>
              <Link to="/register"><button className=' RegisterBtn rounded '>Register</button></Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true" class="scrollspy-example bg-body-tertiary p-3 rounded-2" tabindex="0">
        <h4 id="scrollspyHeading1">First heading</h4>
        <p>...</p>
        <h4 id="scrollspyHeading2">Second heading</h4>
        <p>...</p>
        <h4 id="scrollspyHeading3">Third heading</h4>
        <p>...</p>
        <h4 id="scrollspyHeading4">Fourth heading</h4>
        <p>...</p>
        <h4 id="scrollspyHeading5">Fifth heading</h4>
        <p>...</p>
      </div> */}

    </div>
  )
}
