import React, { useEffect, useRef } from 'react';
import BioSection from './BioSection';
import SkillsSection from './SkillsSection';
import ContactSection from './ContactSection';
import { MDBContainer } from "mdb-react-ui-kit";
import { routeAnimation } from "../common/Util";
import { motion } from "framer-motion";
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
        <motion.div
            variants={routeAnimation}
            initial="initial"
            animate="final"
            exit="exit"
            className="about-container">
            <MDBContainer className="max-dimension">
                <div ref={bioSectionRef} id='bio-section'><BioSection /></div>
                <div ref={skillsSectionRef} id='skills-section'><SkillsSection /></div>
                <div ref={contactSectionRef} id='contact-section'><ContactSection /></div>
            </MDBContainer>
        </motion.div>
    );
}

export default About;