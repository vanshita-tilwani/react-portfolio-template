import {
    MDBCol,
    MDBRow,
} from "mdb-react-ui-kit";

import '../../main.css';

function SectionHeading({ heading }) {
    return (<MDBRow className="justify-content-center text-center">
        <MDBCol className="justify-content-center text-white text-center p-5">
            <div>
                <h5>{heading}</h5>
            </div>
        </MDBCol>
    </MDBRow >);
}

export default SectionHeading;