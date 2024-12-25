
import React from 'react';
import ProjectCards from '../_components/cards/ProjectCards';
import TextHover from '@/components/Animations/Text/TextHover';

const WorkSection = () => {
    return (
        <div className='mx-6  2xl:mx-0'>
        <div className='my-10'>
        <h2 className="text-3xl">
            <TextHover>Checkout my work.!</TextHover>
          </h2>
          <p>Explore some of my latest full-stack projects, highlighting the technologies used and their unique features.</p>
       
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3  gap-6'>

        {
                [...Array(6)].map((_, i) => (<div key={i}>

                    <ProjectCards/>
                </div>))
            }
        </div>
        </div>
    );
};

export default WorkSection;