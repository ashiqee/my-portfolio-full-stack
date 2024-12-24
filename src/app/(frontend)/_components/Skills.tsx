'use client'
import { FaHtml5 } from "react-icons/fa";
import { motion } from "framer-motion";
import TextHover from "@/components/Animations/Text/TextHover";



const skillData = [
  {
    id: 1,
    img: "https://github.com/tandpfun/skill-icons/raw/main/icons/JavaScript.svg",
  },
  {
    id: 2,
    img: "https://github.com/tandpfun/skill-icons/raw/main/icons/HTML.svg",
  },
  {
    id: 3,
    img: "https://github.com/tandpfun/skill-icons/raw/main/icons/MongoDB.svg",
  },
  {
    id: 4,
    img: "https://github.com/tandpfun/skill-icons/raw/main/icons/NodeJS-Dark.svg",
  },
  {
    id: 5,
    img: "https://github.com/tandpfun/skill-icons/raw/main/icons/React-Dark.svg",
  },
  {
    id: 6,
    img: "https://github.com/tandpfun/skill-icons/raw/main/icons/ExpressJS-Dark.svg",
  },
  {
    id: 7,
    img: "https://github.com/tandpfun/skill-icons/raw/main/icons/Firebase-Dark.svg",
  },
  {
    id: 8,
    img: "https://github.com/tandpfun/skill-icons/raw/main/icons/Vite-Dark.svg",
  },
  {
    id: 9,
    img: "https://raw.githubusercontent.com/tandpfun/skill-icons/65dea6c4eaca7da319e552c09f4cf5a9a8dab2c8/icons/NextJS-Dark.svg",
  },
  {
    id: 10,
    img: "https://github.com/tandpfun/skill-icons/raw/main/icons/CSS.svg",
  },
  {
    id: 11,
    img: "https://github.com/tandpfun/skill-icons/raw/main/icons/TailwindCSS-Dark.svg",
  },
  {
    id: 12,
    img: "https://github.com/tandpfun/skill-icons/raw/main/icons/VSCode-Dark.svg",
  },
  {
    id: 13,
    img: "https://github.com/tandpfun/skill-icons/raw/main/icons/Postman.svg",
  },
  {
    id: 14,
    img: "https://github.com/tandpfun/skill-icons/raw/main/icons/Github-Dark.svg",
  },
  {
    id: 15,
    img: "https://raw.githubusercontent.com/tandpfun/skill-icons/65dea6c4eaca7da319e552c09f4cf5a9a8dab2c8/icons/Vercel-Dark.svg",
  },
 

];



const Skills = () => {
  return (
    <div id="skills" className="container mx-auto text-white p-2 md:p-0 md:py-20 my-auto ">
      <div className="text-center  ">
        <div className="pb-10 space-y-4">
          <h2 className="text-3xl">
            <TextHover>Innovating Through Web Development!</TextHover>
          </h2>
          <p className="md:w-1/2 sm:mx-12 md:mx-auto">
            👋Passionate MERN (MongoDB, Express.js, React.js, Node.js) stack
            developer eager to make a mark in the world of web development.
          </p>
        </div>
        <div className="grid max-w-screen-lg md:mx-auto mx-10   lg:grid-cols-8 md:grid-cols-6  grid-cols-4 justify-around gap-5">
          {skillData.map((data) => (
            <div className=" md:w-24" key={data.id}>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ rotate: 360, scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                }}
              >
                <div className=" md:w-16">
                  <img className="mask invert-4 mask-circle object-fit" src={data.img} />
                </div>
              </motion.div>{" "}
            </div>
          ))}

          {/* <img className='animate-bounce ' src="https://github.com/tandpfun/skill-icons/raw/main/icons/Github-Dark.svg" alt="" /> */}
        </div>
        <h3 className="text-3xl mt-10">Tools</h3>

      
      </div>
    </div>
  );
};

export default Skills;