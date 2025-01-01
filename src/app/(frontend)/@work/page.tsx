import React from "react";
import Link from "next/link";

import ProjectCards from "../_components/cards/ProjectCards";

import TextHover from "@/components/Animations/Text/TextHover";
import { getAllProjects } from "@/services/ProjectService";
import AnimatedElements from "@/components/Animations/AnimatedElements";

const WorkSection = async () => {
  const res = await getAllProjects();

  const projects = res.data.data;

  return (
    <div className="relative">
      <div className="mx-6  2xl:mx-0">
        <div className="my-10">
          <h2 className="text-3xl">
            <TextHover>Checkout my work.!</TextHover>
          </h2>
          <p>
            Explore some of my latest full-stack projects, highlighting the
            technologies used and their unique features.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 mb-10 gap-6">
          {projects?.slice(0, 6).map((project: any, i: number) => (
            <div key={i}>
              <ProjectCards project={project} />
            </div>
          ))}
        </div>
        <Link
          className="text-center border-1 p-2 mt-20 border-slate-200/25 rounded-md"
          href={"/projects"}
        >
          Show more projects
        </Link>
      </div>
      <AnimatedElements />
    </div>
  );
};

export default WorkSection;
