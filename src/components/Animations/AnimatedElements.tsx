"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function AnimatedElements() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event:any) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const backgroundStyle = {
    backgroundPosition: `${mousePosition.x / 10}px ${mousePosition.y / 10}px`,
    backgroundRepeat: "repeat",
  };

  return (
    <div className="absolute hidden md:block z-0 w-full h-screen" style={backgroundStyle}>
      {/* Element 1 */}
      <motion.div
        className="absolute z-0 bottom-40 right-4 transform -translate-x-1/2 bg-blue-400 p-6 w-12 h-12 rounded-full"
        animate={{
          rotate: 360, // Continuous rotation
          x: [0, 300, 0], // Move horizontally across the screen
        }}
        transition={{
          duration: 1,
          ease: "easeInOut",
          loop: Infinity, // Infinite loop
        }}
      />

      {/* Element 2 */}
      <motion.div
        className="absolute z-0 -top-24 left-1/4 transform -translate-x-1/2 bg-yellow-400 p-6 w-12 h-12 rounded-full"
        animate={{
          opacity: [0, 1, 0], // Fading in and out
          y: [0, -50, 0], // Move up and down
          x: [0, 300, 0], // Move horizontally
        }}
        transition={{
          duration: 5,
          ease: "easeInOut",
          loop: Infinity,
        }}
      />

      {/* Element 3 */}
      <motion.div
        className="absolute z-0 top-40 left-3/4 transform -translate-x-1/2 bg-pink-400 p-6 w-12 h-12 rounded-full"
        animate={{
          rotate: 360,
          x: [0, -300, 0], // Move left and right
        }}
        transition={{
          duration: 5,
          ease: "easeInOut",
          loop: Infinity,
        }}
      />

      {/* Element 4 */}
      <motion.div
        className="absolute z-0 top-60 left-1/2 transform -translate-x-1/2 bg-green-400 p-6 w-12 h-12 rounded-full"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 1, 0.5],
          y: [0, 100, 0], // Move vertically
        }}
        transition={{
          duration: 5,
          ease: "easeInOut",
          loop: Infinity,
        }}
      />

      {/* Element 5 */}
      <motion.div
        className="absolute z-0 top-80 left-1/4 transform -translate-x-1/2 bg-red-400 p-6 w-12 h-12 rounded-full"
        animate={{
          rotate: [0, 360], // Rotate back and forth
          y: [0, -100, 0], // Move vertically
          x: [0, -300, 0], // Move left and right
        }}
        transition={{
          duration: 5,
          ease: "easeInOut",
          loop: Infinity,
        }}
      />

      {/* Element 6 */}
      <motion.div
        className="absolute z-0 top-50 left-3/4 transform -translate-x-1/2 bg-indigo-400 p-6 w-12 h-12 rounded-full"
        animate={{
          opacity: [1, 0.5, 1], // Fading in and out
          scale: [1, 1.2, 1],
          x: [0, 200, 0], // Move horizontally
        }}
        transition={{
          duration: 5,
          ease: "easeInOut",
          loop: Infinity,
        }}
      />

      {/* Element 7 */}
      <motion.div
        className="absolute z-0 top-120 left-1/2 transform -translate-x-1/2 bg-purple-400 p-6 w-12 h-12 rounded-full"
        animate={{
          rotate: [0, 180, 360], // Rotating back and forth
          scale: [1, 1.5, 1], // Scaling up and down
          opacity: [0, 1, 0],
          x: [0, -200, 0], // Move left and right
        }}
        transition={{
          duration: 5,
          ease: "easeInOut",
          loop: Infinity,
        }}
      />
    </div>
  );
}
