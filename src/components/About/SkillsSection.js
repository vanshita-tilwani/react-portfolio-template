import {
    MDBCol,
    MDBRow,
    MDBCardBody,
    MDBCard
  } from "mdbreact";
import Transition from "../Transition";
import './style.css';

function SkillsSection() {

    return(
        <MDBRow className="justify-content-center text-center">
            <MDBCol className="justify-content-center text-center p-5">
                <Transition>
                    <MDBCard  className="card-details card-light-background">
                        <MDBCardBody>
                            <strong>Skills & Proficiencies: A Palette of Abilities</strong>
                        </MDBCardBody>
                    </MDBCard>
                </Transition>
            </MDBCol>
        </MDBRow>
    );
}

export default SkillsSection;