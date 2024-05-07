import {
    MDBCol,
    MDBRow,
    MDBCardBody,
    MDBCard
} from "mdbreact";
import Animation from "../Animation";
import './style.css';

function SectionHeading({ heading }) {
    return (<MDBRow className="justify-content-center text-center">
        <MDBCol className="justify-content-center text-center p-5">
            <Animation>
                <MDBCard className="card-details card-light-background">
                    <MDBCardBody>
                        <strong>{heading}</strong>
                    </MDBCardBody>
                </MDBCard>
            </Animation>
        </MDBCol>
    </MDBRow>);
}

export default SectionHeading;