import {
    MDBCol,
    MDBRow,
} from "mdbreact";

import '../../main.css';

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