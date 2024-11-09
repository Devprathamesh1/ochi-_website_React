/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
// eslint-disable-next-line no-unused-vars

import React from 'react'

const Featured = () => {
  return (
 <div className='w-full py-20'>
    <div className='w-full px-20 border-b-[1px] pb-20 border-zinc-600'><h1 className='text-6xl tarcking-tight '>FEATURED PROJECTS </h1>
    </div>
    <div className='px-20'>
    <div className="cards w-full flex gap-10 mt-20">
        <div className='cardcontainer relative w-1/2  h-[80vh]'>
        <h1 className='absolute text-[#CDEA68] z-[9] text-8xl left-full  -translate-x-1/2 top-1/2 -translate-y-1/2 tracking-tighter leading-none'>
        {"FYDE".split("").map((item, index)=>
            (<span>{item}</span>))}
        </h1>
        <div className='card w-full h-full rounded-xl  overflow-hiddden'>
            <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" alt="" />
        </div>
        </div>
        <div className='cardcontainer relative w-1/2  h-[80vh]'>
        <h1 className='absolute text-[#CDEA68] z-[9] text-8xl right-full  translate-x-1/2 top-1/2 -translate-y-1/2 tracking-tighter leading-none'>
        {"VISE".split("").map((item, index)=>
            (<span>{item}</span>))}
        </h1>
        <div className='card w-full h-full rounded-xl  overflow-hidden'>
            <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg" alt="" />
        </div>
        </div>
    </div>
    </div>
   
 </div>
  )
}

export default Featured 