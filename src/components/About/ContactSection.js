import SectionHeading from "./SectionHeading";
import { MDBCol, MDBRow, MDBCard, MDBCardBody } from "mdbreact";
import { EnvelopeAt } from "react-bootstrap-icons";
import SlideInTransition from "../SlideInTransition";
import { openEmail } from "../Util";
import '../../main.css';

function ContactSection() {
    return (
        <div>
            <SectionHeading heading={"Hit Me Up: Let's Chat (preferably not carrier pigeon)"}></SectionHeading>
            <MDBRow className="justify-content-center text-center">
                <MDBCol></MDBCol>
                <MDBCol className="justify-content-center text-center p-3">
                    <SlideInTransition>
                        <MDBCard className="py-5 text-white rounded-circle shadow-2-strong m-4 card-details card-dark-background">
                            <MDBCardBody>
                                <div className="text-white">
                                    <EnvelopeAt className="p-2" width={80} height={80} onClick={openEmail} size='5rem' />
                                    <div className="m-2">
                                        Want to chat? Shoot me an email.<br />
                                        Whether it's about my projects, ideas for collaboration, or just to say hi, I'm all ears! Looking forward to hearing from you!
                                    </div>
                                </div>
                            </MDBCardBody>
                        </MDBCard>
                    </SlideInTransition>
                </MDBCol>
                <MDBCol></MDBCol>
            </MDBRow>
        </div>
    );
}

export default ContactSection;