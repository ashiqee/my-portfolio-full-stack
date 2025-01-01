import Link from "next/link";
import React from "react";

import AllBlogsManageTable from "./_com/AllblogsMangeTable";

const BlogsManage = () => {
  return (
    <div>
      <section className="flex justify-between items-center ">
        <h2 className="text-3xl">Blogs Management</h2>
        <Link
          className="text-center border-1 p-2  5 bg-gradient-to-bl from-amber-100/45 dark:from-sky-500/75  dark:to-slate-900/45 rounded-md"
          href="/admin/blogs/create-blog"
        >
          create blog +
        </Link>
      </section>

      <section>
        <AllBlogsManageTable />
      </section>
    </div>
  );
};

export default BlogsManage;
