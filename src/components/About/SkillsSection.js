import {
    MDBCol,
    MDBRow,
} from "mdb-react-ui-kit";
import { DiJavascript1, DiReact, DiJava, DiPython, DiDlang, DiNodejs, DiRuby } from "react-icons/di";
import { SiMysql, SiMicrosoftsqlserver, SiMongodb, SiRedis, SiPostman, SiKibana, SiElasticsearch, SiIntellijidea } from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";
import { FaGithub } from 'react-icons/fa'
import { VscVscode } from "react-icons/vsc";
import Animation from "../Animation";
import Variants from "../Variants";
import SectionHeading from "./SectionHeading";
import SectionFooter from "./SectionFooter";
import '../../main.css';

function SkillsSection() {

    return (
        <div>
            <SectionHeading heading={"Skills & Proficiencies: My Bag of Tricks (no rabbits included... unless you're into that)"}></SectionHeading>
            <MDBRow className="justify-content-center text-center">
                <MDBCol className="justify-content-center text-center p-5">
                    <Variants elements={[<Animation><DiJava size='5rem' /></Animation>,
                    <Animation><TbBrandCSharp className="mx-auto" size='4rem' /></Animation>,
                    <Animation><DiJavascript1 size='4rem' /></Animation>,
                    <Animation><DiReact size='6rem' /></Animation>,
                    <Animation><DiNodejs size='6rem' /></Animation>,
                    <Animation><DiPython size='6rem' /></Animation>,
                    <Animation><DiDlang size='6rem' /></Animation>,
                    <Animation><DiRuby size='4rem' /></Animation>,
                    <Animation><SiMysql size='4rem' /></Animation>,
                    <Animation><SiMicrosoftsqlserver size='4rem' /></Animation>,
                    <Animation><SiMongodb size='4rem' /></Animation>,
                    <Animation><SiRedis size='4rem' /></Animation>,
                    <Animation><FaGithub size='4rem' /></Animation>,
                    <Animation><VscVscode size='4rem' /></Animation>,
                    <Animation><SiPostman size='4rem' /></Animation>,
                    <Animation><SiIntellijidea size='3.5rem' /></Animation>,
                    <Animation><SiElasticsearch size='3.5rem' /></Animation>,
                    <Animation><SiKibana size='3.5rem' /></Animation>]}>
                    </Variants>
                </MDBCol>
            </MDBRow>
            <SectionFooter></SectionFooter>
        </div>
    );
}

export default SkillsSection;