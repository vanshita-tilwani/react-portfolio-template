import BioSection from './BioSection';
import SkillsSection from './SkillsSection';
import {
    MDBContainer
} from "mdbreact";
import '../../main.css';

function About() {
    return (
        <div className="main-background">
            <MDBContainer className="max-dimension">
                <BioSection></BioSection>
                <SkillsSection></SkillsSection>
            </MDBContainer>

        </div>
    );
}

export default About;