import { Button } from "@nextui-org/button";
import Image from "next/image";
import React from "react";
import { FaLinkedin } from "react-icons/fa";

import Skills from "../_components/Skills";
import Education from "../_components/Education";

import { title } from "@/components/primitives";
import AnimatedElements from "@/components/Animations/AnimatedElements";

const AboutSection = () => {
  return (
    <div className="flex flex-col  justify-center items-center mx-6 2xl:mx-0 text-justify ">
      {/* top section  */}
      <div className="md:flex min-h-screen justify-between items-center">
        <div className="space-y-4 mb-10 md:mb-0">
          <h3 className="text-[2.3rem] lg:text-5xl leading-9">
            Who{" "}
            <span className={title({ color: "violet", size: "md" })}>
              I am,&nbsp;
            </span>
          </h3>

          <p>
            Hi, I&rsquo;m Ashiq — a passionate Full-Stack Web Developer with
            expertise in the MERN stack and back-end technologies. I specialize
            in creating dynamic, scalable, and user-centric web applications
            that drive engagement and deliver results.
          </p>
          <p>
            With a degree in Computer Science & Engineering and a relentless
            commitment to learning, I thrive on solving complex problems and
            turning innovative ideas into reality. My mission is to craft
            seamless digital experiences while pushing the boundaries of modern
            web development.
          </p>

          <Button
            className="rounded-small 
        hover:bg-slate-800 hover:text-white
        shadow-md shadow-blue-700/45  my-10"
            variant="bordered"
          >
            <FaLinkedin />
            Linkedin
          </Button>
        </div>

        <div>
          <Image
            alt="ashiq"
            height={1200}
            src="/images/skills.png"
            width={1200}
          />
        </div>
      </div>

      {/* skilss section  */}

      <section className="my-20">
        <Skills />
      </section>

      {/* academic section  */}
      <section>
        <Education />
      </section>
      <AnimatedElements />
    </div>
  );
};

export default AboutSection;
