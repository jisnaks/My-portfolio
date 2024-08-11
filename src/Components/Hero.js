import React from 'react';
import profileImage from "../assets/jis.jpeg";
import { motion } from "framer-motion"
import { fadeInLeftVariant, fadeInRightVariant } from '../Variants';

function Hero() {
    return (
        <div className='container-fluid px-4 px-lg-5' style={{ background: 'ebf4f5' }} id="hero">
            <div className='row align-items-center'>
                <motion.div variants={fadeInLeftVariant} initial="hidden" whileInView="visible"
                    className='col-12 col-lg-6 text-start  my-5'>
                    <p className="fs-4 fw-bold">Hey, I'm Jisna K S</p>
                    <h1 className="fw-bold fs-1 fs-lg-2 fs-md-3">
                        Front-End Developer &<br />UI/UX Designer
                    </h1>
                    <p className="fs-5 fs-md-6">
                        I’m a passionate Frontend Developer with a strong foundation in ReactJS, Redux, and modern web technologies...
                    </p>
                    <button className="btn btn-primary">Get In Touch</button>
                </motion.div>
                <motion.div variants={fadeInRightVariant} initial="hidden" whileInView="visible"
                    className='col-12 col-lg-6 d-flex justify-content-end my-5'>
                    <img src={profileImage} alt='Profile' className='w-75 rounded-3' />
                </motion.div>
            </div>
        </div>
    );
}

export default Hero;
