'use client';

import { Image } from '@nextui-org/react';
import React, { useState } from 'react';

const EducationSlider = () => {
  const educationData = [
    {
      year: '2024-2025',
      title: 'Level 2 Web Development Course',

      institute:"Dhaka",
      description:
        'Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna.',
    },
    {
      year: '2023-2024',
      title: 'Complete Web Development Course Level One',
      institute:"Dhaka",
      description:
        'Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna.',
    },
    {
      year: '2018-2022',
      title: 'Art University New York',
      institute:"Dhaka",
      description:
        'Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna.',
    },
    {
      year: '2011-2015',
      title: 'Programming Course Paris',
      institute:"Dhaka",
      description:
        'Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna.',
    },
    {
      year: '2010-2011',
      title: 'Design School Berlin',
      institute:"Dhaka",
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus.',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === educationData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? educationData.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative">
    
      <p className="text-teal-400 text-sm ">STUDIED AT</p>

      <div className=" flex items-center justify-center">
        {/* Slider Container */}
        <div className="overflow-hidden w-full ">
          <div
            className="flex gap-6 transition-transform duration-500"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {educationData.map((item, index) => (
              <div
                key={index}
                className="min-w-[48%] px-6 py-10 hover:bg-teal-400/5 border-r-1 rounded-xl shadow-lg flex flex-col gap-2"
              ><div className='flex gap-4 items-center'>
                
                <Image src='/images/icon/education.svg' alt='eduction_icon' className="w-16 " />
              <div>
              <p className="text-teal-400 text-lg font-bold">{item.year}</p>
              <h3 className="text-xl font-semibold">{item.title}</h3>
              </div>
              </div>
                <p className="text-sm ">{item.institute}</p>
                <p className="text-sm ">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

      <div className='text-2xl'>
          {/* Previous Button */}
          <button
          onClick={prevSlide}
          className="absolute top-0 right-32 bg-gray-900 px-8 text-white p-6 rounded-full hover:bg-teal-400/5 transition"
        >
          ❮
        </button>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          className="absolute top-0 right-0 bg-gray-900 text-white p-6 px-8  rounded-full hover:bg-teal-400/5 transition"
        >
          ❯
        </button>
      </div>
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-6 gap-2">
        {educationData.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex
                ? 'bg-teal-400'
                : 'bg-gray-600 hover:bg-gray-400'
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default EducationSlider;
