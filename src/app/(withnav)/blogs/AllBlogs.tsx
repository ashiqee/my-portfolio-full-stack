"use client";
import BlogCard from "@/app/(frontend)/_components/cards/BlogsCard";
import TextHover from "@/components/Animations/Text/TextHover";
import useBlogsData from "@/hooks/useBlogsData";

export default function AllBlogs() {
  const { blogsData } = useBlogsData();

  return (
    <div>
      <div className="my-10">
        <h2 className="text-3xl">
          <TextHover>Some Write blogs.!</TextHover>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 mb-10 gap-6">
        {blogsData?.map((project: any, i: number) => (
          <div key={i}>
            <BlogCard project={project} />
          </div>
        ))}
      </div>
    </div>
  );
}
