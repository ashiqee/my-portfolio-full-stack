"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardFooter, Image, Button, Link } from "@nextui-org/react";
import { useRouter } from "next/navigation";

const BlogCard = ({ project }: { project: any }) => {
  const router = useRouter();
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div>
      <motion.div
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        whileHover={{ scale: 1.05 }}
        // whileTap={{ scale: 0.5 }}
        className="w-full h-[320px] col-span-12 sm:col-span-7"
      >
        <Card isFooterBlurred className="relative w-full h-full">
          <motion.div
            animate={{ scale: isHovering ? 1.1 : 1 }}
            className="absolute inset-0"
            initial={{ scale: 1 }}
            transition={{ duration: 0.9, ease: "easeInOut" }}
          >
            <Image
              removeWrapper
              alt={project.title}
              className="z-0 w-full rounded-xl h-full object-cover"
              src={project.image}
            />
          </motion.div>
          <motion.div
            animate={{ y: isHovering ? "0%" : "100%" }}
            className=" w-full absolute bottom-0 h-full  text-white bg-black/85 z-10"
            initial={{ y: "100%" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <CardFooter className="flex flex-col  gap-3">
              <div className="w-full h-full">
                <Link href={`/blogs/${project.id}`}>
                <div className="flex flex-col">
                  <p className="text-xl">{project.title}</p>
                  <p className="text-tiny  text-white/60">
                    {project.description.slice(0, 100)}
                  </p>
                </div>
                </Link>
              </div>
             
            </CardFooter>
          </motion.div>
        </Card>
      </motion.div>
    </div>
  );
};

export default BlogCard;
