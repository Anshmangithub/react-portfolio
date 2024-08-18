import React from 'react'
import { RiReactjsLine } from 'react-icons/ri'
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiNextjsFill } from "react-icons/ri";
import { FaNode } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { motion } from 'framer-motion';

const Technologies = () => {
  const iconVariant = (duration)=>({
    initial : {y : -10},
    animate : { 
      y : [10 , -10],
      transition : {
        duration : duration,
        ease : "linear",
        repeat : Infinity,
        repeatType : "reverse"
      }
    }
  })
  return (
    <div className='border-b border-neutral-800 pb-24'>
        <motion.h2 
          whileInView={{opacity : 1 , y : 0}}
          initial={{opacity : 0 , y : -100}}
          transition={{duration : 1}}
        className='my-20 text-center text-4xl'>Technologies</motion.h2>
        <motion.div  
         whileInView={{opacity : 1 , y : 0}}
         initial={{opacity : 0 , y : -100}}
         transition={{duration : 1.5}}
        className='flex flex-wrap items-center justify-center gap-4'>
            <motion.div 
            variants={iconVariant(2.5)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
            <RiReactjsLine className='text-7xl text-cyan-400'/>
            </motion.div>

            <motion.div 
             variants={iconVariant(3)}
             initial="initial"
             animate="animate"
              className='rounded-2xl border-4 border-neutral-800 p-4'>
            <RiNextjsFill className='text-7xl'/>
            </motion.div>

            <motion.div 
             variants={iconVariant(4)}
             initial="initial"
             animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
            <FaNode className='text-7xl text-green-400'/>
            </motion.div>

            <motion.div 
             variants={iconVariant(2)}
             initial="initial"
             animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
            <FaHtml5 className='text-7xl text-orange-700'/>
            </motion.div>

            <motion.div 
             variants={iconVariant(5)}
             initial="initial"
             animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
            <FaCss3 className='text-7xl text-blue-400'/>
            </motion.div>

            <motion.div 
             variants={iconVariant(3)}
             initial="initial"
             animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
            <IoLogoJavascript className='text-7xl text-yellow-500'/>
            </motion.div>

            <motion.div 
               variants={iconVariant(4)}
               initial="initial"
               animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
            <SiMongodb className='text-7xl text-green-700'/>
            </motion.div>

            <motion.div 
              variants={iconVariant(1)}
              initial="initial"
              animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
            <FaJava className='text-7xl text-orange-400'/>
            </motion.div>
         
        </motion.div>
    </div>
  )
}

export default Technologies