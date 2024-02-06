import React from "react";
import BlogPage from "@/app/(admin)/_admin/AdminPanel/Blogs/BlogUpdate/BlogPage";
import { fetchblogs } from "@/lib/actions/blogs.actions";
export default async function page() {
  const blogs = await fetchblogs();
  return (
    <div>
      <BlogPage blogs={blogs} />
    </div>
  );
}
