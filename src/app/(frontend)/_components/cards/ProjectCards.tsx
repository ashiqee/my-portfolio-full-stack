'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardFooter, Image, Button } from '@nextui-org/react';

const ProjectCards = () => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div>
      <motion.div
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-full h-[360px] col-span-12 sm:col-span-7"
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
              alt="Relaxing app background"
              className="z-0 w-full rounded-xl h-full object-cover"
              src="https://cdn.kwork.com/files/portfolio/t0/50/9f4deb8c02fe2bf933f540a1d094dee1d30d15c2-1701683773.webp"
            />
          </motion.div>
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: isHovering ? '0%' : '100%' }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="absolute bottom-0 w-full text-white bg-black/85 z-10"
          >
            <CardFooter className="flex flex-col gap-3">
              <div className="w-full">
                <div className="flex flex-col">
                  <p className="text-xl">Breathing App</p>
                  <p className="text-tiny text-white/60">
                    A brief description of Project One. This is a short description.
                  </p>
                </div>
              </div>
              <div className="flex w-full gap-2 justify-between items-center">
                <p className="text-tiny">Jan-2023 - May-2023</p>
                <div className="flex gap-2">
                  <Button className="hover:bg-slate-800 text-white" variant="bordered" radius="sm" size="sm">
                    Github link
                  </Button>
                  <Button className="hover:bg-slate-800 text-white" variant="bordered" radius="sm" size="sm">
                    Live link
                  </Button>
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
