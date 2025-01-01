import ProjectDetailsCard from "./ProjectDetailsCard";

import { getAPostsDetails } from "@/services/PostService";

export default async function ProjectDetails({ params }: any) {
  const data = await getAPostsDetails(params?.projectId!);

  if (!data || !data.success) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-red-500 text-lg">Failed to load project details.</p>
      </div>
    );
  }

  return (
    <div className="my-10">
      <ProjectDetailsCard project={data.data} />
    </div>
  );
}
