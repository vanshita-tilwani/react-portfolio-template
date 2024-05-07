import SectionHeading from "./SectionHeading";
import { MDBCol, MDBRow, } from "mdbreact";
import { EnvelopeAt } from "react-bootstrap-icons";
import SlideInTransition from "../SlideInTransition";
import { openEmail } from "../Util";
import './style.css';

function ContactSection() {
    return (
        <div>
            <SectionHeading heading={"Hit Me Up: Let's Chat (preferably not carrier pigeon)"}></SectionHeading>
            <MDBRow className="justify-content-center text-center">
                <MDBCol className="justify-content-center text-center p-3">
                    <SlideInTransition>
                        <div className="text-white">
                            <EnvelopeAt width={80} height={80} onClick={openEmail} size='5rem' />
                        </div>
                    </SlideInTransition>

                </MDBCol>
            </MDBRow>
        </div>
    );
}

export default ContactSection;