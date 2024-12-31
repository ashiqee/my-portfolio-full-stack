'use client'
import { GetServerSideProps, NextPage } from "next";

import Image from "next/image";


type ProjectDetails = {
  id: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  startDate: string;
  endDate: string;
  images: string[];
  upVotesCount: number;
  downVotesCount: number;
  commentsCount: number;
};

type ProjectProps = {
  project: ProjectDetails;
};

const ProjectDetailsCard: NextPage<ProjectProps> = ({ project }) => {
 

  return (
    <div className="bg-gray-100/5 min-h-screen p-10">
      <div className=" mx-auto">
        <h1 className=" text-2xl md:text-4xl font-bold  mb-4">{project.title}</h1>
        <div className="flex flex-col md:flex-row md:justify-between mb-6">
          <div className="text-sm ">
            <p>
              Category:{" "}
              <span className="font-medium ">{project.category}</span>
            </p>
            <p>
              Start Date:{" "}
              <span className="font-medium">{new Date(project.startDate).toLocaleDateString()}</span>
            </p>
            <p>
              End Date:{" "}
              <span className="font-medium">{new Date(project.endDate).toLocaleDateString()}</span>
            </p>
          </div>
          {/* <div className="flex space-x-4 mt-4 md:mt-0">
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Upvote ({project.upVotesCount})
            </button>
            <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
              Downvote ({project.downVotesCount})
            </button>
          </div> */}
        </div>
        <p className="text-lg text-justify mb-6">{project.description}</p>
        <div className="mb-6">
          <h2 className="text-2xl font-semibold  mb-3">Techs</h2>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, index) => (
              <span key={index} className="bg-gray-200 text-black  px-3 py-1 rounded">
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="mb-6">
          <h2 className="text-2xl font-semibold  mb-3">Screenshots</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.images.map((image, index) => (
              <div key={index} className="rounded shadow-md overflow-hidden">
                <Image
                  src={image}
                  alt={`Screenshot ${index + 1}`}
                  width={900}
                  height={700}
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-semibold  mb-3">Comments ({project.commentsCount})</h2>
          <p className=" italic">No comments yet. Be the first to leave one!</p>
        </div>
      </div>
    </div>
  );
};



export default ProjectDetailsCard;
