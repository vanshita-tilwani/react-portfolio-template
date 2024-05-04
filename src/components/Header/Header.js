import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import portfolio_logo from "../../assets/portfolio_logo.png";

function Header() {
    return (
        <Navbar bg="dark" data-bs-theme="dark">
        <Container>
            <Navbar.Brand href="#home">
                <img src={portfolio_logo} height={50} width={50}></img>
            </Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#experience">Work Experience</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#resume">Resume</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      );
}

export default Header