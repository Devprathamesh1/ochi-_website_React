// eslint-disable-next-line no-unused-vars
import React from 'react';

const About = () => {
  return (
    <div className='w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black '>
        <h1 className=' text-[6vw] leading-[6vw] tracking-tight'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid voluptate, voluptatum quia rerum aut veritatis?
        </h1>
        <div className='  w-full flex gap-5 border-t-[1px] pt-10 mt-20 border-[#a1b562]'>
            <div className='w-1/2'>
                <h1 className='text-7xl'>Our Approach</h1>
                <button className=' flex gap-10  uppercase items-center px-10 py-6 bg-zinc-900 mt-10 rounded-full  text-white'>read more
                    <div className='w-2 h-2 bg-zinc-100 rounded-full'></div>
                </button>
            </div>
            <div className='w-1/2 h-[70vh] rounded-3xl bg-[#b0c859]'></div>
 </div>
    </div>
  );
}

export default About;