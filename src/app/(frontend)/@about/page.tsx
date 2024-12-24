import { title } from "@/components/primitives";
import { Button } from "@nextui-org/button";
import Image from "next/image";

import React from "react";
import Skills from "../_components/Skills";

const AboutSection = () => {
  return (
    <div className="flex flex-col min-h-screen justify-center items-center">
        {/* top section  */}
     <div className="md:flex justify-between items-center">
     <div className="space-y-4">
        <h3 className="text-[2.3rem] lg:text-5xl leading-9">
          Who{" "}
          <span className={title({ color: "violet", size: "md" })}>
            I am,&nbsp;
          </span>
        </h3>

        <p>
          Hi, I'm Ashiq — a passionate Full-Stack Web Developer with expertise
          in the MERN stack and back-end technologies. I specialize in creating
          dynamic, scalable, and user-centric web applications that drive
          engagement and deliver results.
        </p>
        <p>
          With a degree in Computer Science & Engineering and a relentless
          commitment to learning, I thrive on solving complex problems and
          turning innovative ideas into reality. My mission is to craft seamless
          digital experiences while pushing the boundaries of modern web
          development.
        </p>

        <Button variant="bordered" className="rounded-small">
          Linkedin
        </Button>
      </div>

      <div>
        <Image src="/images/skills.png" alt="ashiq" width={1200} height={1200} />
      </div>
     </div>

     {/* skilss section  */}

     <section>
        <Skills />
     </section>
    </div>
  );
};

export default AboutSection;
