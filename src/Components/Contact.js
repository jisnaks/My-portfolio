import React from 'react'
import { motion } from "framer-motion"
import { fadeInTopVariant } from '../Variants'

function Contact() {
    return (
        <div id="Contact">
            <h1>Contact us</h1>
            <motion.div variants={fadeInTopVariant} initial="hidden" whileInView="visible" className='w-50 m-5 mx-auto'>
            <form claName=''>
                <div className="mb-3">
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Name"/>
                </div>
                <div className="mb-3">
                    <input type="email" className="form-control" id="exampleInputPassword1" placeholder='Enter Email'/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </motion.div>

        </div>
        
    )
}

export default Contact

