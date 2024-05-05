import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import portfolio_logo from "../../assets/portfolio_logo.png";
import { House , FilePerson, PersonWorkspace, Terminal, FileText, EnvelopeAt} from 'react-bootstrap-icons';
function Header() {
    return (
        <Navbar bg="black">
        <Container>
            <Navbar.Brand href="#home">
                <img src={portfolio_logo} alt='' height={50} width={50}></img>
            </Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link href="" className='font-css'>
              <House className='mb-1 me-1 icon-color'></House>
              Home 
            </Nav.Link>
            <Nav.Link href="#about" className='font-css'>
              <FilePerson className='mb-1 me-1 icon-color'></FilePerson>
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
            <Nav.Link href="#contact" className='font-css'>
              <EnvelopeAt className='mb-1 me-1 icon-color'></EnvelopeAt>
              Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      );
}

export default Header