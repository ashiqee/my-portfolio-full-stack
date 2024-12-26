'use client'
import useBlogsData from "@/hooks/useBlogsData";
import ProjectCards from "./cards/ProjectCards";
import BlogCard from "./cards/BlogsCard";

export default function BlogsPagesSection() {
    const {blogsData}=useBlogsData()
    
    
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