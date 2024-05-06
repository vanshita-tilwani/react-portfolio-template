import {
    MDBCol,
    MDBRow,
    MDBCardBody,
    MDBCard
  } from "mdbreact";
import Transition from "../Transition";
import {PersonRaisedHand, Laptop, Buildings, CodeSlash, PersonWorkspace, BalloonHeart} from 'react-bootstrap-icons';
import about_logo from '../../assets/about_logo.png';
import './style.css';

function BioSection() {
    return(
        <div>
        <MDBRow className="justify-content-center text-center">
            <MDBCol className="justify-content-center text-center p-5">
                <Transition>
                    <MDBCard  className="text-white card-details card-background">
                        <MDBCardBody>
                            <strong>About Me: A Glimpse into My Journey</strong>
                        </MDBCardBody>
                    </MDBCard>
                </Transition>
            </MDBCol>
        </MDBRow>
        <MDBRow className="justify-content-center text-center">
            <MDBCol className="justify-content-center text-center p-5">
                <Transition>
                    <MDBCard  className="py-5 text-white card-details card-background">
                        <MDBCardBody>
                        
                        <div className="mb-2">
                        <strong>Hi There!</strong>
                        <PersonRaisedHand className="icon-color"></PersonRaisedHand>
                        </div>
                        <div className="mb-2">
                            I am currently pursuing a <strong>Master's</strong> degree<Laptop className="icon-color"/> in <strong>Computer Science</strong> at <strong>Northeastern University</strong> in Boston <Buildings className="icon-color"/>.
                        </div>
                        <div className="mb-2">
                            My interests lie in <strong>Fullstack Engineering, UI Development, Backend Development</strong> <CodeSlash className="icon-color"/>
                        </div>
                        <div className="mb-2">
                            Prior to beginning my studies at Northeastern, I spent about <strong>fours years</strong> working as a <strong>Software Engineer</strong> <PersonWorkspace className="icon-color"/>  at companies like <strong>ServiceNow</strong> and <strong>Planful</strong>.
                        </div>
                        <div className="mb-2">
                            <strong>P.S : As you may have suspected, I do love love dark themes! </strong><BalloonHeart className="icon-color"/>
                        </div>
                        </MDBCardBody>
                    </MDBCard>
                </Transition>
                
            </MDBCol>
            <MDBCol className="justify-content-center text-center py-5">
                <Transition>
                    <img
                    src={about_logo}
                    width={450}
                    height={300}
                    alt=""/>
                </Transition>
            </MDBCol>
        </MDBRow>
        </div>
    );
}

export default BioSection;