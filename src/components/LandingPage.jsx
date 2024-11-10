/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import React from 'react';
import { FaArrowUpLong } from "react-icons/fa6";

const LandingPage = () => {
  
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.3" className='w-full h-screen bg-zinc-900 pt-1'>
        <div className='textstructure mt-52 px-20'>
            {["we create","eye opening","presentations"].map((item,index)=>{
                // eslint-disable-next-line react/jsx-key
                return ( <div className='masker overflow-hidden'>
                    <div className='w-fit flex  items-center'>
                        {index === 1 && (<motion.div initial={{width:0}} animate={{width:"10vw"}} transition={{ease:[0.76,0,0.24,1],duration:1}} className='mr-[1vw] w-[10vw] rounded-md h-[5.2vw] relative -bottom-[0.5vw] '>
                            <img className='bg-cover rounded-xl' src='https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg' alt="" />
                        </motion.div>
                    )}
                <h1 className='uppercase text-[7vw] font-medium tracking-tighter leading-[6vw] '>{item}</h1>
            </div>  
            </div>
                );
      })}

           
        </div>
        <div className='border-t-[1px] border-zinc-600 mt-20 flex justify-between items-center py-5 px-20'>

            {["for the public and private compines","from the frist pitch to IPO"].map((item,index) =>(
            // eslint-disable-next-line react/jsx-key
            <p className='text-xl font-light tracking-tight  uppercase leading-none'>{item}</p>
            ))}
            <div className='start  flex  items-center gap-5'>
                <div className='px-5 py-2 border-[2px] border-zinc-600 font-light uppercase text-xl rounded-full'>start the project</div>
                <div className='w-10 h-10 flex items-center justify-center border-[1px] border-zinc-600 rounded-full'>
                    <span className='rotate-[45deg]'>
                        <FaArrowUpLong/>
                    </span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LandingPage;