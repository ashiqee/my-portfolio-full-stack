"use client";
import { Button, Image, Link } from "@nextui-org/react";
import React, { useEffect, useState } from "react";

import CreateProjectModal from "@/app/(backend)/components/Modals/BlogsModal/CreateProjectModal";
import EditProjectModal from "@/app/(backend)/components/Modals/BlogsModal/EditProjectModal";
import { getAllProjects } from "@/services/ProjectService";

const ProjectsPage = () => {
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [projects, setData] = useState<any>(null);
  const [project, setProjectData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAllProjects();

        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;

  const handleEditModal = (data: any) => {
    setIsEditOpen(true);
    setProjectData(data);
  };

  return (
    <div>
      {isOpen && <CreateProjectModal setIsOpen={setIsOpen} />}
      {isEditOpen && (
        <EditProjectModal exitsData={project} setIsOpen={setIsEditOpen} />
      )}

      <Button onPress={() => setIsOpen(true)}>Add Project</Button>

      {/* list of projects  */}

      <div className="grid grid-cols-1 gap-6 mt-20">
        {projects.data.map((project: any, index: number) => (
          <div key={index}>
            <div className="flex justify-between bg-slate-300/5 shadow-md p-3 items-center gap-6">
              <div className="flex gap-4">
                <p> {index + 1}</p>
                <Image
                  alt={project.title}
                  className="max-w-40 min-w-40 h-40 object-cover"
                  src={project.images[0]}
                />
                <div className="w-64 ">
                  <p>Title: {project.title}</p>
                  <p>
                    Description: <br /> {project.description.slice(0, 50)}
                  </p>
                </div>
                <p className="flex flex-col w-28 gap-1">
                  {project.tags.slice(0, 5).map((tag: string, i: number) => (
                    <span key={i}>{tag}</span>
                  ))}
                </p>
                <p className="flex flex-col gap-1">
                  {project.links.slice(0, 5).map((link: any, i: number) => (
                    <Link key={i} href={link.url}>
                      {link.label}
                    </Link>
                  ))}
                </p>

                {project.startDate && (
                  <div>
                    <p>
                      Start Date:{" "}
                      {new Intl.DateTimeFormat("en-US", {
                        month: "short",
                        year: "numeric",
                      }).format(new Date(project.startDate))}
                    </p>
                    <p>
                      End Date:{" "}
                      {new Intl.DateTimeFormat("en-US", {
                        month: "short",
                        year: "numeric",
                      }).format(new Date(project.endDate))}
                    </p>
                    <p>
                      Duration:{" "}
                      {Math.ceil(
                        (new Date(project.endDate).getTime() -
                          new Date(project.startDate).getTime()) /
                          (1000 * 60 * 60 * 24),
                      )}{" "}
                      days
                    </p>
                  </div>
                )}
              </div>

              <div className="flex gap-2">
                <button
                  className="bg-orange-700/95 text-white px-4 py-2 rounded-md"
                  onClick={() => handleEditModal(project)}
                >
                  edit
                </button>
                <button className="bg-red-500 text-white px-4 py-2 rounded-md">
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
