import React from 'react'
import { HERO_CONTENT } from '../constants'
import { motion } from "framer-motion"



const Hero = () => {

  const container = (delay)=>({
    hidden : {x : -100 , opacity : 0},
    visable : { x: 0 , opacity : 1 , transition : { duration : 0.5 , delay : delay}}

  })
  return (
    <div className='border-b border-neutral-900 pb-4 lg:mb-35'>
        <div className='flex flex-wrap '>
            <div className='w-full lg:w-1/2'>
            <div className='flex flex-col items-center lg:items-start'>
                <motion.h1 
                variants={container(0)}
                initial="hidden"
                animate="visable"
                 className='pb-16 text-5xl font-thin tracking-tight lg:mt-16 lg:text-8xl'>Ansh Gajbhiye</motion.h1>
                <motion.span 
                variants={container(0.5)}
                initial="hidden"
                animate="visable"
                className='bg-gradient-to-r from-pink-300 via-slate-500 
                to-purple-500  bg-clip-text text-3xl tracking-tight text-transparent'> Full stack Developer</motion.span>
                <motion.p 
                 variants={container(1)}
                 initial="hidden"
                 animate="visable"
                className='my-2 max-w-xl py-6 font-light tracking-tighter '>{HERO_CONTENT}</motion.p>
            </div>
            </div>
            <div className=' w-full lg:p-8 lg:w-1/2 '>
             <div className='flex justify-center'>
                <motion.img initial={{x: 100 , opacity : 0}}
                   animate={{x : 0 , opacity : 1}}
                   transition={{ duration : 1 , delay : 1.2}} src="ansh.jpg" className='rounded-xl' alt="ansh photo" />
             </div>
            </div>
        </div>
    </div>
  )
}

export default Hero