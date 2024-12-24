'use client'; // Ensure this is treated as a client component

import React from 'react';

import Image from 'next/image';
import Banner from '@/components/pages_component/banner';



const BannerSection = () => {
  return (
    <div className="flex container  mx-auto justify-between min-h-[calc(100vh-80px)] items-center ">
  
      <section className='w-1/2'>
  
<Banner/>
  
      </section>

      <div className="flex justify-center my-10">
  <div className="h-[600px] w-[400px] rounded-full hover:shadow-lg shadow-2xl shadow-slate-800 border border-blue-900/25  p-6 relative overflow-hidden">
    <Image
      src={'/images/ashiq-profile.png'}
      className="object-cover w-full h-full rounded-full"
      width={800}
      height={800}
      alt="ashiq"
    />
    <div className="absolute  w-full bottom-0 left-1/2 transform -translate-x-1/2 shadow-red-500  bg-slate-900/55 text-white text-center px-4 py-2 rounded-t-lg shadow-lg">
      <h2 className="text-xl font-bold">Ashiq Mahmud</h2>
      <p className="text-[12px]">Full Stack Developer</p>
    </div>
  </div>
</div>


    </div>
  );
};

export default BannerSection;
