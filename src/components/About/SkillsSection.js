import {
    MDBCol,
    MDBRow,
    MDBCardBody,
    MDBCard
} from "mdbreact";
import { DiJavascript1, DiReact, DiJava, DiPython, DiDlang, DiNodejs, DiRuby } from "react-icons/di";
import { SiMysql, SiMicrosoftsqlserver, SiMongodb, SiRedis, SiPostman, SiKibana, SiElasticsearch, SiIntellijidea } from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";
import { FaGithub } from 'react-icons/fa'
import { VscVscode } from "react-icons/vsc";
import Animation from "../Animation";
import './style.css';
import Variants from "../Variants";


function SkillsSection() {

    return (
        <div>
            <MDBRow className="justify-content-center text-center">
                <MDBCol className="justify-content-center text-center p-5">
                    <Animation>
                        <MDBCard className="card-details card-light-background">
                            <MDBCardBody>
                                <strong>Skills & Proficiencies: A Palette of Abilities</strong>
                            </MDBCardBody>
                        </MDBCard>
                    </Animation>
                </MDBCol>
            </MDBRow>
            <MDBRow className="justify-content-center text-center">
                <MDBCol className="justify-content-center text-center p-5">
                    <Variants elements={[<Animation><DiJava size='4rem' /></Animation>,
                    <Animation><TbBrandCSharp className="mx-auto" size='4rem' /></Animation>,
                    <Animation><DiJavascript1 size='4rem' /></Animation>,
                    <Animation><DiReact size='4rem' /></Animation>,
                    <Animation><DiNodejs size='6rem' /></Animation>,
                    <Animation><DiPython size='4rem' /></Animation>]}>
                    </Variants>
                </MDBCol>
                <MDBCol className="justify-content-center text-center p-5">
                    <Variants elements={[<Animation><DiDlang size='4rem' /></Animation>,
                    <Animation><DiRuby size='4rem' /></Animation>,
                    <Animation><SiMysql size='4rem' /></Animation>,
                    <Animation><SiMicrosoftsqlserver size='4rem' /></Animation>,
                    <Animation><SiMongodb size='4rem' /></Animation>,
                    <Animation><SiRedis size='4rem' /></Animation>]}></Variants>
                </MDBCol>
                <MDBCol className="justify-content-center text-center p-5">
                    <Variants elements={[<Animation><FaGithub size='3rem' /></Animation>,
                    <Animation><VscVscode size='3rem' /></Animation>,
                    <Animation><SiPostman size='3rem' /></Animation>,
                    <Animation><SiIntellijidea size='2rem' /></Animation>,
                    <Animation><SiElasticsearch size='2.5rem' /></Animation>,
                    <Animation><SiKibana size='2.5rem' /></Animation>]}></Variants>
                </MDBCol>
            </MDBRow>
        </div>
    );
}

export default SkillsSection;