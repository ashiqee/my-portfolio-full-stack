"use client";
import BlogCard from "./cards/BlogsCard";

import useBlogsData from "@/hooks/useBlogsData";

export default function BlogsPagesSection() {
  const { blogsData } = useBlogsData();

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 mb-10 gap-6">
        {blogsData?.slice(0, 3).map((project: any, i: number) => (
          <div key={i}>
            <BlogCard project={project} />
          </div>
        ))}
      </div>
    </div>
  );
}
