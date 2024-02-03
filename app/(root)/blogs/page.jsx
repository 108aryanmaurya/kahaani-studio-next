import React from "react";
import { fetchblogs } from "@/lib/actions/blogs.actions";
import BlogContent from "@/app/_section/Travel/Blogs/BlogContent";
async function page() {
  const blogs = await fetchblogs();

  return (
    <main className="mt-[4.5rem]">
      <div className="mx-auto max-w-screen-xl mt-20 max-md:mt-10 ">
        <BlogContent blogs={blogs} />
      </div>
    </main>
  );
}

export default page;
