import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { BalloonHeartFill } from 'react-bootstrap-icons';
function Footer() {
    return (
        <Navbar bg="black" >
            <Container>
            <Navbar.Brand>
                <BalloonHeartFill color="#c770f0" size={50} />
            </Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Item href="" className='pink'>Made with love!</Nav.Item>
          </Nav>
        </Container>
        </Navbar>
      );
}

export default Footer