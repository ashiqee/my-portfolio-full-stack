"use client"
import CreateProjectModal from '@/app/(backend)/components/Modals/BlogsModal/CreateProjectModal';
import { useGetAllPost } from '@/hooks/posts.hook';
import { getAllProjects } from '@/services/ProjectService';
import { Button } from '@nextui-org/react';
import React, { useEffect, useState } from 'react';

const ProjectsPage = () => {
     
    const [isOpen,setIsOpen ]= useState(false)
    const [projects, setData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAllProjects()
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
    


    console.log(projects.data)

    return (
        <div>
          {isOpen && <CreateProjectModal setIsOpen={setIsOpen} /> }


          <Button onPress={()=>setIsOpen(true)}>Add Project</Button>

            {/* list of projects  */}

            <div>

{
    projects.data.map((project:any,index:number)=><div key={index}>{project.title}</div>)
}
            </div>

            
        </div>
    );

};

export default ProjectsPage;