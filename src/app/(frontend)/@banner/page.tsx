"use client"; // Ensure this is treated as a client component

import React from "react";
import Image from "next/image";

import Banner from "@/components/pages_component/banner";

const BannerSection = () => {
  return (
    <>
      <div className="flex md:flex-row  flex-col-reverse container  mx-auto md:px-6 2xl:px-0 justify-between min-h-[calc(100vh-80px)] items-center">
        <div
          className="absolute z-0 opacity-10 -translate-x-20 hover:translate-x-40
         duration-1000 2xl:top-36 md:left-44 2xl:left-96"
        >
          <Image
            alt="ashiq"
            className="object-cover md:w-[80%] 2xl:w-full h-full rounded-2xl"
            height={800}
            src={
              "https://i.pinimg.com/originals/81/17/8b/81178b47a8598f0c81c4799f2cdd4057.gif"
            }
            width={800}
          />
        </div>

        <section className="">
          <Banner />
        </section>

        <div className="flex justify-center">
          <div className="2xl:h-[600px] md:h-[400px] md:w-full h-[300px] w-[220px] 2xl:w-[400px] rounded-full hover:shadow-md shadow-lg shadow-slate-800/45 border border-blue-900/25 p-6 relative overflow-hidden">
            <Image
              alt="ashiq"
              className="object-cover w-full h-full rounded-full"
              height={1800}
              src={"/images/ashiq-img.png"}
              width={1800}
            />
            <div className="absolute hidden md:block w-full bottom-0 left-1/2 transform -translate-x-1/2 shadow-red-500 bg-slate-900/55 text-white text-center px-4 py-2 rounded-t-lg shadow-lg">
              <h2 className="text-xl font-bold">Ashiq Mahmud</h2>
              <p className="text-[12px]">Full Stack Developer</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BannerSection;
