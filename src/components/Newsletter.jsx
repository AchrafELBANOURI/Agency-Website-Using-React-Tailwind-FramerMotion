import React from 'react'
import { motion } from 'framer-motion'
import {fadeIn} from '../variants'
const Newsletter = () => {
  return (
    <div className='px-4 lg:px-14 w-full mx-auto bg-neutralSilver py-16'>
        <motion.div 
            variants={fadeIn('up' , 0.3)}
            initial = 'hidden' 
            whileInView={'show'}
            viewport={{once : false , amount : 0.7}}
            className='flex items-center justify-center mx-auto'>
            <div className='text-center'>
                <h2 className="lg:text-5xl text-3xl text-neutral-800 font-semibold mb-4">
                    Pellentesque suscipit fringille libero eu.
                </h2>
                <div className='flex items-center justify-center gap-8'>
                    <button className='btn-primary'>Get a Demo</button>
                </div>
            </div>
        </motion.div>
    </div>
  )
}

export default Newsletter
