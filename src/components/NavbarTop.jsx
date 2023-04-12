import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {NavLink} from "react-router-dom";
import styled from "styled-components";

function NavbarTop() {
  return (
    <Wrapper>
    <Navbar bg="light" expand="lg" fixed="top" className="p-4" >
      <Container>
        <NavLink to="/" className="logo">
    Fitness_Path
  </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
              <li className="nav-list">
        <NavLink to="/" className="nav-link">Home</NavLink>
      </li>
      <li className="nav-list">
        <NavLink to="/about" className="nav-link">About</NavLink>
      </li>
      <li className="nav-list">
        <NavLink to="/services" className="nav-link">Services</NavLink>
      </li>
      <li className="nav-list">
        <NavLink to="/pricing" className="nav-link">Pricing</NavLink>
      </li>
      <li className="nav-list">
        <NavLink to="/reviews" className="nav-link">Reviews</NavLink>
      </li>
      <li className="nav-list">
        <NavLink to="/contact" className="nav-link">Contact</NavLink>
      </li>
      
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </Wrapper> 

  );
}

const Wrapper = styled.nav`


.logo{
  color: #000;
  border: 2px solid lightgreen;
  font-size: 2rem;
  transition: all 0.25s ease;
  &:hover{
    color:#999;
  }
}

.nav-list{
  list-style: none;
}

.nav-link{
  color: #000;
  text-decoration: none;
  font-size: 1.5rem;
  text-transform:capitalize;
  transition:all 0.1s ease-in;
  padding:0.3rem 2rem;
  &:hover{
    color: lightseagreen;
    
  }
}
`;

export default NavbarTop;