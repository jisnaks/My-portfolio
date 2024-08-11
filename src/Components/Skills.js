import React from 'react';
import data from '../Data/data.json';
import { fadeInTopVariant } from '../Variants';
import { motion } from "framer-motion"

function Skills() {
    return (
        <div id="skills" className='container-fluid my-5 px-4 px-lg-5'>
            <h1 className='mx-auto'>Experience</h1>
            <div className='row g-4'>
                {
                    data?.skills?.map((item) => (
                        <motion.div variants={fadeInTopVariant} initial="hidden" whileInView="visible"  key={item.id} className="col-6 col-md-4 col-lg-2 d-flex justify-content-center py-5 ">
                            <div className="card h-100 shadow p-3 mb-5 rounded" style={{ background: '#f0fbff', maxWidth: '350px' }}>
                                <img src={item.src} className="card-img-top img-fluid" alt={item.title} />
                                <div className="card-body">
                                    <h5 className="card-title">{item.title}</h5>
                                    <p className="card-text">{item.description}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))
                }
            </div>
        </div>
    );
}

export default Skills;
