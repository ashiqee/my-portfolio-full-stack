import TextHover from '@/components/Animations/Text/TextHover';
import React from 'react';
import EducationSlider from './_sliders/EducationSlider';

const Education = () => {
    return (
        <div className='mb-20'>
              <h2 className="text-3xl">
            <TextHover>Education & Courses</TextHover>
        
          </h2>


          {/* slider  */}
          <EducationSlider/>
            
        </div>
    );
};

export default Education;