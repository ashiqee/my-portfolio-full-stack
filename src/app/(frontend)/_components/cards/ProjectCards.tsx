'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardFooter, Image, Button } from '@nextui-org/react';
import Link from 'next/link';

const ProjectCards = ({project}:{project:any}) => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div>
      <motion.div
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.5 }}
        className="w-full h-[320px] col-span-12 sm:col-span-7"
      >
        <Card isFooterBlurred className="relative w-full h-full">
          <motion.div
            initial={{ scale: 1 }}
            transition={{ duration: 0.9, ease: 'easeInOut' }}
            animate={{ scale: isHovering ? 1.1 : 1 }}
            className="absolute inset-0"
          >
            <Image
              removeWrapper
              alt={project.title}
              className="z-0 w-full rounded-xl h-full object-cover"
              src={project.images[0]}
            />
          </motion.div>
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: isHovering ? '6%' : '100%' }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="absolute bottom-0 w-full  text-white bg-black/85 z-10"
          >
            <CardFooter className="flex flex-col  gap-3">
              <div className="w-full h-full">
                <div className="flex flex-col">
                  <p className="text-xl">{project.title}</p>
                  <p className="text-tiny  text-white/60">
                   {project.description.slice(0, 100)}
                  </p>
                </div>
              </div>
              <div className="flex w-full pb-2 gap-2 justify-between items-center">
                
              {
                project.startDate && <p className="text-tiny">
                {new Intl.DateTimeFormat("en-US", { month: "short", year: "numeric" }).format(new Date(project.startDate))} 
                
                - 

                {new Intl.DateTimeFormat("en-US", { month: "short", year: "numeric" }).format(new Date(project.endDate))}
              </p>
              
              }
                <div className="flex gap-2">

                  {
                    project.links && <>
                    
                    {
                      project.links?.map((link:any,i:number)=>(
                        <Link key={i} href={link.url} target="_blank" rel="noopener noreferrer"
                         className="hover:bg-slate-800 text-[10px] p-1.5 px-2 border rounded-md  text-white">
                          
                          {link.label}</Link>) 
                      )
                    }
                    
                    </>
                  }
                  {/* <Button className="hover:bg-slate-800 text-white" variant="bordered" radius="sm" size="sm">
                    Github link
                  </Button>
                  <Button className="hover:bg-slate-800 text-white" variant="bordered" radius="sm" size="sm">
                    Live link
                  </Button> */}
                </div>
              </div>
            </CardFooter>
          </motion.div>
        </Card>
      </motion.div>
    </div>
  );
};

export default ProjectCards;
