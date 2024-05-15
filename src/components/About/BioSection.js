import Animation from "../common/Animation";
import { BsPersonRaisedHand, BsLaptop, BsBuildings, BsCodeSlash, BsPersonWorkspace, BsBalloonHeart } from "react-icons/bs";
import SectionHeading from "../common/SectionHeading";
import SectionFooter from "../common/SectionFooter";
import about_logo from '../../assets/about_logo.png';
import '../../main.css';

function BioSection() {
    return (
        <div>
            <SectionHeading heading={"About Me: The Chronicles of a Human in Beta Version (glitches included)"}></SectionHeading>
            <div className="text-center d-flex justify-content-space-evenly">
                <Animation>
                    <div className="card-details ms-7 mt-5 me-5">
                        <div className="mb-3">
                            <strong>Hi There!</strong>
                            <BsPersonRaisedHand className="icon-color me-1" />
                        </div>
                        <div className="mb-3">
                            I am currently pursuing a <strong>Master's</strong> degree<BsLaptop className="icon-color ms-1 me-1" /> in <strong>Computer Science</strong> at <strong>Northeastern University</strong> in Boston <BsBuildings className="icon-color me-2" />.
                        </div>
                        <div className="mb-3">
                            My interests lie in <strong>Fullstack Engineering, UI Development, Backend Development</strong> <BsCodeSlash className="icon-color" />
                        </div>
                        <div className="mb-3">
                            Prior to beginning my studies at Northeastern, I spent about <strong>fours years</strong> working as a <strong>Software Engineer</strong> <BsPersonWorkspace className="icon-color" />  at companies like <strong>ServiceNow</strong> and <strong>Planful</strong>.
                        </div>
                        <div>
                            <strong>P.S : As you may have suspected, I do love love dark themes! </strong><BsBalloonHeart className="icon-color" />
                        </div>
                    </div>
                </Animation>
                <div>
                    <img
                        src={about_logo}
                        width={550}
                        height={400}
                        alt="" />
                </div>
            </div>
            <SectionFooter></SectionFooter>
        </div >
    );
}

export default BioSection;