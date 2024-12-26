import React from "react";

import EducationSlider from "./_sliders/EducationSlider";

import TextHover from "@/components/Animations/Text/TextHover";

const Education = () => {
  return (
    <div className="mb-20">
      <div className="min-h-28 ">
        <h2 className="text-3xl">
          <TextHover>Education & Courses</TextHover>
        </h2>
        <p className="text-teal-400 text-sm ">STUDIED AT</p>
      </div>

      {/* slider  */}
      <EducationSlider />
    </div>
  );
};

export default Education;
