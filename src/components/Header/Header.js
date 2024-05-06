import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import { House , PersonCircle, PersonWorkspace, Terminal, FileText, EnvelopeAt, Briefcase} from 'react-bootstrap-icons';
import portfolio_logo from "../../assets/portfolio_logo.png";

function Header() {
    return (
        <Navbar bg="black">
        <Container>
            <Navbar.Brand href="/">
                <Briefcase className='mb-1 me-1 icon-color'></Briefcase>
                <img src={portfolio_logo} alt='' height={30} width={200}></img>
            </Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/" className='font-css'>
              <House className='mb-1 me-1 icon-color'></House>
              Home 
            </Nav.Link>
            <Nav.Link as={Link} to="/about" className='font-css'>
              <PersonCircle className='mb-1 me-1 icon-color'></PersonCircle>
              About</Nav.Link>
            <Nav.Link href="#experience" className='font-css'>
              <PersonWorkspace className='mb-1 me-1 icon-color'></PersonWorkspace>
              Work Experience</Nav.Link>
            <Nav.Link href="#projects" className='font-css'>
              <Terminal className='mb-1 me-1 icon-color'></Terminal>
              Projects</Nav.Link>
            <Nav.Link href="#resume" className='font-css'>
              <FileText className='mb-1 me-1 icon-color'></FileText>
              Resume</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      );
}

export default Header