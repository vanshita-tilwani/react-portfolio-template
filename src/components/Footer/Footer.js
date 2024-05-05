import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { BalloonHeartFill , Github, Linkedin, CCircle} from 'react-bootstrap-icons';
function Footer() {
    return (
        <Navbar bg="black" >
            <Container>
            <Navbar.Brand>
                <div className='font-css'>Copyright <CCircle className='icon-color'></CCircle> VT</div>
                
            </Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Item href="" className='font-css'>Made with love!</Nav.Item>
            <BalloonHeartFill className='icon-color'/>
          </Nav>
          <Nav className="ml-auto">
            <Nav.Link href="https://github.com/vanshita-tilwani"><Github className= "me-4 icon-color"></Github></Nav.Link>
            <Nav.Link href="https://www.linkedin.com/in/vanshita-tilwani/"><Linkedin className='icon-color'></Linkedin></Nav.Link>
          </Nav>
        </Container>
        </Navbar>
      );
}

export default Footer