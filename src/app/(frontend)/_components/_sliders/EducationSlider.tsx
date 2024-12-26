"use client";

import useEducationData from "@/hooks/useEducationData";
import React, { useState } from "react";

const EducationSlider = () => {
  const {educationData} = useEducationData();
  // const educationData = [
  //   {
  //     year: "2024-2025",
  //     title: "Level 2 Web Development Course",

  //     institute: "Dhaka",
  //     description:
  //       "Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna.",
  //   },
  //   {
  //     year: "2023-2024",
  //     title: "Complete Web Development Course Level One",
  //     institute: "Dhaka",
  //     description:
  //       "Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna.",
  //   },
  //   {
  //     year: "2018-2022",
  //     title: "Art University New York",
  //     institute: "Dhaka",
  //     description:
  //       "Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna.",
  //   },
  //   {
  //     year: "2011-2015",
  //     title: "Programming Course Paris",
  //     institute: "Dhaka",
  //     description:
  //       "Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna.",
  //   },
  //   {
  //     year: "2010-2011",
  //     title: "Design School Berlin",
  //     institute: "Dhaka",
  //     description:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus.",
  //   },
  // ];

  console.log(educationData);
  
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === educationData.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? educationData.length - 1 : prevIndex - 1,
    );
  };

  return (
    <div className="relative ">
      <div className=" w-72  md:w-full flex items-center justify-center">
        {/* Slider Container */}
        <div className="overflow-hidden    w-full   ">
          <div
            className="flex w-full gap-6 transition-transform duration-1000"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {educationData.map((item, index) => (
              <div
                key={index}
                className="md:min-w-[48%]   min-w-[95%] md:px-6 px-2 py-10 hover:bg-teal-400/5 border-r-1 rounded-xl shadow-lg flex flex-col gap-2"
              >
                <div className="flex gap-4 items-center">
                  <svg
                    className="w-12 text-teal-500"
                    fill="none"
                    height="34"
                    viewBox="0 0 51 34"
                    width="40"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M37.8076 12.9054L24.7662 17.0404C24.6681 17.0715 24.5626 17.0705 24.4651 17.0373L12.3076 12.9054M37.8076 12.9054V26.5528C37.8076 26.7613 37.6706 26.9474 37.4722 27.0117C27.923 30.1093 22.324 30.1857 12.4097 27.0129C12.2076 26.9482 12.0687 26.7572 12.0724 26.545L12.3076 12.9054M37.8076 12.9054L41.5229 11.7273C41.8341 11.6287 42.1514 11.861 42.1514 12.1874V19.0631C42.1514 19.1895 42.1005 19.3115 42.0136 19.4032C40.1746 21.3436 40.5769 22.3393 41.9869 23.9061C42.0895 24.0201 42.1344 24.1745 42.1059 24.3252C41.9093 25.3634 41.1451 29.4935 41.1861 30.7634C41.2325 32.2006 44.0869 34.4466 45.7832 30.9108C45.8279 30.8177 45.8399 30.7089 45.818 30.6079L44.4535 24.316C44.4221 24.1713 44.4595 24.0201 44.5526 23.9049C45.8198 22.3377 46.1806 21.3416 44.5241 19.3991C44.4479 19.3096 44.4038 19.1954 44.4038 19.0779V11.1672C44.4038 10.9568 44.54 10.7707 44.7406 10.7071L49.4907 9.20094C49.945 9.05689 49.9378 8.41152 49.4804 8.27765L24.7556 1.0411C24.664 1.0143 24.5666 1.01524 24.4755 1.0438L1.4094 8.28023C0.964064 8.41995 0.95665 9.04753 1.39857 9.19773L12.3076 12.9054"
                      stroke="currentColor"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </svg>
                  <div className="text-left">
                    <p className="text-teal-400 text-sm md:text-lg font-bold">
                      {item.year}
                    </p>
                    <h3 className="text-[13px] md:text-xl font-semibold">
                      {item.title}
                    </h3>
                  </div>
                </div>
                <p className="text-[10px] md:text-sm ">{item.institute}</p>
                <p className="text-[10px] max-w-[250px] md:text-sm ">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-2xl">
          {/* Previous Button */}
          <button
            className="absolute -top-10 right-16 md:right-32 bg-gray-900 px-4 p-2 md:px-8 text-white md:p-6 rounded-full hover:bg-teal-400/5 transition"
            onClick={prevSlide}
          >
            ❮
          </button>

          {/* Next Button */}
          <button
            className="absolute -top-10 right-1 md:right-0 bg-gray-900 text-white  px-4 p-2 md:p-6 md:px-8  rounded-full hover:bg-teal-400/5 transition"
            onClick={nextSlide}
          >
            ❯
          </button>
        </div>
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-6 gap-2">
        {Array.from(
          { length: Math.ceil(educationData.length / 2) },
          (_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${
                index === currentIndex
                  ? "bg-teal-400"
                  : "bg-gray-600 hover:bg-gray-400"
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ),
        )}
      </div>
    </div>
  );
};

export default EducationSlider;
