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
        <MDBCol className="justify-content-center text-white text-center p-5">
            <div>
                {heading}
            </div>
        </MDBCol>
    </MDBRow >);
}

export default SectionHeading;