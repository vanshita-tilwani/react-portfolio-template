import React, { useEffect, useRef } from 'react';
import BioSection from './BioSection';
import SkillsSection from './SkillsSection';
import ContactSection from './ContactSection';
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
        <div className="about-container">
            <div ref={bioSectionRef} id='bio-section'><BioSection /></div>
            <div ref={skillsSectionRef} id='skills-section'><SkillsSection /></div>
            <div ref={contactSectionRef} id='contact-section'><ContactSection /></div>
        </div>
    );
}

export default About;