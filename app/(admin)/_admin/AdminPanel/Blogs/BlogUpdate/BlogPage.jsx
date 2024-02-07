"use client";
import React, { useState, useEffect } from "react";
import { deleteBlog } from "@/lib/adminactions/admin.blog.actions";
import { toast } from "react-toastify";
import { fetchblogs } from "@/lib/actions/blogs.actions";
export default function BlogPage({ blogs }) {
  const [blog, setBlog] = useState([]);
  useEffect(() => {
    setBlog(blogs);
  }, [blogs]);

  const handleDelete = async (blogId, location) => {
    const authToken = JSON.parse(localStorage.getItem("authtoken"));
    let isConfirm = confirm("Are you sure you want to delete this blog?");
    if (!isConfirm) {
      return;
    }
    const deleted = await deleteBlog(blogId, location, authToken);
    if (deleted) {
      // Handle success
      const blogs = await fetchblogs();
      setBlog(blogs);
      toast.success("Blog deleted successfully!");
      // You might want to refresh the blogs list here
    } else {
      // Handle failure
      toast.error("Failed to delete blog!");
    }
  };
  return (
    <>
      <h1 className="text-center font-Gamiliademo text-4xl font-thin max-md:text-xl">
        Latest blogs
      </h1>
      <main className="flex w-full flex-wrap items-start justify-center px-10 py-10 max-md:flex-col max-md:px-6">
        {blog?.map((blog, index) => (
          <a
            key={index}
            href="#"
            className="group w-1/3 rounded px-5 pb-5 max-md:w-full max-md:px-0"
          >
            <div className="">
              <div className="h-full w-full">
                <img
                  loading="lazy"
                  className="max-h-[200px] min-h-[200px] w-full rounded-t object-cover"
                  src={blog?.imageURL}
                  alt={blog?.title}
                />
              </div>
              <div className="w-full pb-3 pt-2">
                <span className="font-Gamiliademo text-base  font-semibold uppercase tracking-wider text-black ">
                  {blog?.title}{" "}
                </span>
              </div>
              <div className="flex w-full justify-evenly gap-5 py-2">
                <button
                  className="inline-block w-full rounded-md font-sans text-xl bg-gray-700 px-4 py-1 font-medium text-white "
                  onClick={() => handleDelete(blog._id, blog.location)}
                >
                  Delete
                </button>
                <button className="inline-block w-full rounded-md font-sans text-xl bg-gray-700 px-4 py-1 font-medium text-white ">
                  Update
                </button>
              </div>
            </div>
          </a>
        ))}
      </main>
    </>
  );
}
