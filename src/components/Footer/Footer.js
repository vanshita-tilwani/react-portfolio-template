import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { BalloonHeartFill , Github, Linkedin} from 'react-bootstrap-icons';
function Footer() {
    return (
        <Navbar bg="black" >
            <Container>
            <Navbar.Brand>
                <div className='pink'>Copyright © VT</div>
                
            </Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Item href="" className='pink'>Made with love!</Nav.Item>
            <BalloonHeartFill color="#c770f0" size={20}/>
          </Nav>
          <Nav className="ml-auto">
            <Nav.Link href="https://github.com/vanshita-tilwani"><Github className= "me-4" color="#c770f0" size={20}></Github></Nav.Link>
            <Nav.Link href="https://www.linkedin.com/in/vanshita-tilwani/"><Linkedin color="#c770f0" size={20}></Linkedin></Nav.Link>
          </Nav>
        </Container>
        </Navbar>
      );
}

export default Footer