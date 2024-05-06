import {
    MDBCol,
    MDBContainer,
    MDBRow,
    MDBCardBody,
    MDBCard
  } from "mdbreact";
import { motion } from 'framer-motion';
import {PersonRaisedHand, Laptop, Buildings} from 'react-bootstrap-icons'
import about_logo from '../../assets/about_logo.png'
import './About.css';

function About() {
    return(
        <div className="about-section">
         <MDBContainer className="max-dimension">
            <MDBRow className="justify-content-center text-center max-dimension">
                <MDBCol className="justify-content-center text-center p-5">
                    <motion.div
                    whileHover={{ scale: 1.2 }} 
                    whileTap={{ scale: 0.8 }}
                    initial={{ scale: 0 }}
                    animate={{ rotate:360, scale: 1, repeat : Infinity }}
                    transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20
                    }}>
                        <MDBCard  className="py-5 text-white card-details card-background">
                        <MDBCardBody>
                        
                        <div className="mb-2">
                        Hi There!
                        <PersonRaisedHand className="icon-color"></PersonRaisedHand>
                        </div>
                        <div className="mb-2">
                        I am currently pursuing a Master's degree <Laptop className="icon-color"/> in Computer Science at Northeastern University in Boston <Buildings className="icon-color"/>.
                        </div>
                        <div className="mb-2">
                        My interests lie in Fullstack Engineering, UI Development, Backend Development.
                        </div>
                        <div className="mb-2">
                        Prior to beginning my studies at Northeastern, I spent fours years working as a Software Engineer at companies like ServiceNow and Planful.
                        </div>
                        </MDBCardBody>
                        </MDBCard>
                    </motion.div>


                </MDBCol>

                <MDBCol className="justify-content-center text-center">
                    <motion.div
                    whileHover={{ scale: 1.2 }} 
                    whileTap={{ scale: 0.8 }}
                    initial={{ scale: 0}}
                    animate={{ rotate:360,  scale: 1 }}
                    transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20
                    }}>
                        <img
                  src={about_logo}
                  width={500}
                  height={500}
                  alt=""
                  />

                    </motion.div>


                </MDBCol>
            </MDBRow>
          
         </MDBContainer>
        </div>
    );
}

export default About;