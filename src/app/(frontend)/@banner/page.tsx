'use client'; // Ensure this is treated as a client component

import React from 'react';

import Image from 'next/image';
import Banner from '@/components/pages_component/banner';



const BannerSection = () => {
  return (
    <div className="flex md:flex-row flex-col-reverse container    mx-auto justify-between min-h-[calc(100vh-80px)] items-center ">
  

<div className='absolute z-0 opacity-20 translate-x-4 hover:translate-x-40 duration-1000 top-2 left-28 '>
<Image
      src={'https://i.pinimg.com/originals/81/17/8b/81178b47a8598f0c81c4799f2cdd4057.gif'}
      className="object-cover  w-96 h-full rounded-2xl"
      width={800}
      height={800}
      alt="ashiq"
    />
</div>
      <section className='w-1/2'>
  
<Banner/>
  
      </section>

      <div className="flex justify-center mt-28 md:mt-0">
  <div className="md:h-[600px] h-[300px] w-[220px] md:w-[400px] rounded-full hover:shadow-md shadow-lg shadow-slate-800/45 border border-blue-900/25  p-6 relative overflow-hidden">
    <Image
      src={'/images/ashiq-profile.png'}
      className="object-cover w-full h-full rounded-full"
      width={800}
      height={800}
      alt="ashiq"
    />
    <div className="absolute hidden md:block  w-full bottom-0 left-1/2 transform -translate-x-1/2 shadow-red-500  bg-slate-900/55 text-white text-center px-4 py-2 rounded-t-lg shadow-lg">
      <h2 className="text-xl font-bold">Ashiq Mahmud</h2>
      <p className="text-[12px]">Full Stack Developer</p>
    </div>
  </div>
</div>


    </div>
  );
};

export default BannerSection;
