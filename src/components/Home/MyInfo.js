import React from 'react';
import {
  MDBAnimation,
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBRow,
} from "mdbreact";
import { motion } from 'framer-motion';
import my_image from '../../assets/my_image.png'

import "./style.css"
const MyInfo = () => {
  
  return (
    <MDBContainer fluid className="bg-image">
      <MDBAnimation type="slideOutRight" delay=".3s">
      <div className="mask d-flex align-items-center h-100">
        <MDBContainer>
          <MDBRow className="justify-content-center text-center">
            <MDBCol md="4" className="mb-4 mb-md-0">
              <MDBCard  className="py-5 text-white card-details">
                <MDBCardBody>
                <img
                  src={my_image}
                  width={300}
                  height={250}
                  alt=""
                  className="rounded-circle shadow-2-strong mb-4"/>
                  <div className="mb-2">
                  Vanshita Tilwani
                  </div>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            <MDBCol md="4" className="mb-5 mb-md-1 py-5 text-white centered-animate">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}>
              <h1 className='mb-2'>
                <span style={{ display: 'block' }}>Programmer</span>
                <span style={{ display: 'block' }}>Developer</span>
                <span style={{ display: 'block' }}>Engineer</span>
              </h1>
            </motion.div>
            </MDBCol>
          </MDBRow>
          </MDBContainer>
          </div>
        </MDBAnimation>
    </MDBContainer>
  );
};

export default MyInfo;
