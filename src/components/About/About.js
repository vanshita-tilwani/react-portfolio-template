import React, { useEffect, useRef } from 'react';
import BioSection from './BioSection';
import SkillsSection from './SkillsSection';
import ContactSection from './ContactSection';
import {
    MDBContainer
} from "mdb-react-ui-kit";
import '../../main.css';

function About() {

    const bioSectionRef = useRef(null);
    const skillsSectionRef = useRef(null);
    const contactSectionRef = useRef(null);

    useEffect(() => {
        if (window.location.hash === '#bio-section') {
            bioSectionRef.current.scrollIntoView({ behavior: 'smooth' });
        }
        else if (window.location.hash === '#skills-section') {
            skillsSectionRef.current.scrollIntoView({ behavior: 'smooth' });
        }
        else if (window.location.hash === '#contact-section') {
            contactSectionRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, []);
    return (
        <div className="about-container on-animation">
            <MDBContainer className="max-dimension">
                <div ref={bioSectionRef} id='bio-section'><BioSection></BioSection></div>
                <div ref={skillsSectionRef} id='skills-section'><SkillsSection></SkillsSection></div>
                <div ref={contactSectionRef} id='contact-section'><ContactSection></ContactSection></div>
            </MDBContainer>

        </div>
    );
}

export default About;