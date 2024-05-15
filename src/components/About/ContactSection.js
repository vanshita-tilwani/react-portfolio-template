import { BsEnvelopeAt, BsLinkedin } from "react-icons/bs";
import SectionHeading from "../common/SectionHeading";
import SlideInTransition from "../common/SlideInTransition";
import { openEmail } from "../common/Util";
import '../../main.css';

function ContactSection() {
    return (
        <div>
            <SectionHeading heading={"Hit Me Up: Let's Chat (preferably not carrier pigeon)"}></SectionHeading>
            <div className="justify-content-center text-center">
                <div className="d-flex justify-content-center w-50">
                    <div className="justify-content-center text-center m-7">
                        <SlideInTransition mode='left'>
                            <div className="py-5 text-white m-4 card-details">
                                <div>
                                    <div className="text-white">
                                        <BsEnvelopeAt className="p-2" width={80} height={80} onClick={openEmail} size='5rem' />
                                        <div className="mt-3">
                                            Want to chat? Shoot me an email.<br />
                                            Whether it's about my projects, ideas for collaboration, or just to say hi, I'm all ears!
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SlideInTransition>
                    </div>

                    <div className="justify-content-center text-center m-7">
                        <SlideInTransition mode='right'>
                            <div className="py-5 text-white m-4 card-details">
                                <div>
                                    <div className="text-white">
                                        <a href="https://www.linkedin.com/in/vanshita-tilwani/"><BsLinkedin width={80} height={80} size='5rem' /></a>
                                        <div className="mt-3">
                                            I'd love to connect with you all here on social media! <br />
                                            Let's share our experiences, and insights.
                                            Feel free to follow me or drop an inmail!
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SlideInTransition>
                    </div>


                </div>
            </div>
        </div>
    );
}

export default ContactSection;