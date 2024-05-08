import BioSection from './BioSection';
import SkillsSection from './SkillsSection';
import ContactSection from './ContactSection';
import {
    MDBContainer
} from "mdb-react-ui-kit";
import '../../main.css';

function About() {
    return (
        <div className="main-background">
            <MDBContainer className="max-dimension">
                <BioSection></BioSection>
                <SkillsSection></SkillsSection>
                <ContactSection></ContactSection>
            </MDBContainer>

        </div>
    );
}

export default About;