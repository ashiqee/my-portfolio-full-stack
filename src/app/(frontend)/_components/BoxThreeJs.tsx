/* eslint-disable react/no-unknown-property */
'use client'; // Ensures this is a client-side component

import { Canvas } from '@react-three/fiber';
import React from 'react';
import { Scroll, ScrollControls } from '@react-three/drei';

import { Experience } from '@/components/threeJs/Experience';

export default class BoxThreejs extends React.Component {
  render() {
    return (
      <Canvas  shadows camera={{ position: [5, 0, 3], fov: 40 }}>
        {/* <color args={["#ececec"]} attach="background" /> */}
       

        <Experience />

 
      </Canvas>
    );
  }
}
