import {
    MDBCol,
    MDBRow,
    MDBCardBody,
    MDBCard
} from "mdbreact";
import Animation from "../Animation";
import './style.css';

function SkillsSection() {

    return (
        <MDBRow className="justify-content-center text-center">
            <MDBCol className="justify-content-center text-center p-5">
                <Animation>
                    <MDBCard className="card-details card-light-background">
                        <MDBCardBody>
                            <strong>Skills & Proficiencies: A Palette of Abilities</strong>
                        </MDBCardBody>
                    </MDBCard>
                </Animation>
            </MDBCol>
        </MDBRow>
    );
}

export default SkillsSection;