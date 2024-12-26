
import React from "react";
import Link from "next/link";

import ProjectCards from "../_components/cards/ProjectCards";

import TextHover from "@/components/Animations/Text/TextHover";
import { getAllProjects } from "@/services/ProjectService";
import useBlogsData from "@/hooks/useBlogsData";
import BlogsPagesSection from "../_components/Blogspage";

const WorkSection = async () => {
 


  return (
    <div className="mx-6  2xl:mx-0">
      <div className="my-10">
        <h2 className="text-3xl">
          <TextHover>Some Write blogs.!</TextHover>
        </h2>
       
      </div>
      <BlogsPagesSection/>
      
      <Link
        className="text-center border-1 p-2 mt-20 border-slate-200/25 rounded-md"
        href={"/blogs"}
      >
        Show more blogs
      </Link>
    </div>
  );
};

export default WorkSection;
