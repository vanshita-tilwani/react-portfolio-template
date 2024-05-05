import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import portfolio_logo from "../../assets/portfolio_logo.png";

function Header() {
    return (
        <Navbar bg="black">
        <Container>
            <Navbar.Brand href="#home">
                <img src={portfolio_logo} alt='' height={50} width={50}></img>
            </Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link href="" className='font-css'>Home</Nav.Link>
            <Nav.Link href="#about" className='font-css'>About</Nav.Link>
            <Nav.Link href="#experience" className='font-css'>Work Experience</Nav.Link>
            <Nav.Link href="#projects" className='font-css'>Projects</Nav.Link>
            <Nav.Link href="#resume" className='font-css'>Resume</Nav.Link>
            <Nav.Link href="#contact" className='font-css'>Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      );
}

export default Header