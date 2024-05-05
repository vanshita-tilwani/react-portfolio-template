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
            <Nav.Link href="" className='pink'>Home</Nav.Link>
            <Nav.Link href="#about" className='pink'>About</Nav.Link>
            <Nav.Link href="#experience" className='pink'>Work Experience</Nav.Link>
            <Nav.Link href="#projects" className='pink'>Projects</Nav.Link>
            <Nav.Link href="#resume" className='pink'>Resume</Nav.Link>
            <Nav.Link href="#contact" className='pink'>Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      );
}

export default Header