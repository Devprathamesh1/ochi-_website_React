// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
// eslint-disable-next-line no-unused-vars
import React from 'react';

const Marquee = () => {
  return (
  
    <div className='w-full py-20 rounded-tl-3xl rounded-tr-3xl bg-[#004D43]'>
        <div className='text border-t-2 border-b-2 border-zinc-100 flex gap-10 overflow-hidden whitespace-nowrap'>
        <motion.h1 className='text-[22vw] leading-none uppercase font-bold pt-1 mb-[2vw]'>we are ochi</motion.h1>
        <motion.h1 className='text-[22vw] leading-none uppercase font-bold pt-1 mb-[2vw]'>we are ochi</motion.h1>
        </div>

    </div>
  )
}

export default Marquee;