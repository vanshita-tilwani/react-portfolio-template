import React from 'react';
import { Box, Container } from "@radix-ui/themes";
import { motion } from 'framer-motion';
import my_image from '../../assets/my_image.png';
import "../../main.css"

const MyInfo = () => {

  return (
    <Container>
      <div className='d-flex justify-content-center'>
        <Box>
          <div className="py-5 text-white card-details">
            <div>
              <img
                src={my_image}
                width={300}
                height={250}
                alt=""
                className="rounded-circle shadow-2-strong mb-4" />
              <div className="mb-2">
                Vanshita Tilwani
              </div>
            </div>
          </div>
        </Box>
        <Box md="4" className="mb-5 mb-md-1 py-5 text-white centered-animate">
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
        </Box>

      </div>


    </Container>
  );
};

export default MyInfo;
