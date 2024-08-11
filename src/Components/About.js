import React from 'react';
import profileImage from "../assets/ji.jpeg";
import { motion } from "framer-motion"
import { fadeInLeftVariant, fadeInRightVariant } from '../Variants';

function About() {
  return (
    <div className='container-fluid row px-4 px-lg-5 ' id="About">
      <motion.div variants={fadeInLeftVariant} initial="hidden" whileInView="visible" className='col-12 col-lg-6 d-flex justify-content-start'>
        <img src={profileImage} alt='Profile' className='w-75 my-5 rounded-3' />
      </motion.div>
      <div className='col-12 col-lg-6 text-start py-5'>
        <div>
          <h1 className="fw-bold mb-5 fs-1 fs-lg-2 fs-md-3" >About Me</h1>
          <motion.div variants={fadeInRightVariant} initial="hidden" whileInView="visible" >
            <p className='mb-4'>
              I’m a passionate Frontend Developer with a strong foundation in ReactJS, Redux, and modern web technologies. I craft elegant, user-friendly interfaces that deliver seamless experiences. With a keen eye for design and a dedication to continuous learning, I’m excited to bring your web projects to life.
            </p>
            <button className="btn btn-primary">Get In Touch</button>
          </motion.div>

        </div>
      </div>
    </div>
  );
}

export default About;

