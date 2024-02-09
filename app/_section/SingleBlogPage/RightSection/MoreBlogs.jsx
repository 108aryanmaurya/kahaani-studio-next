"use client";
import { fetchmoreblogsbycategory } from "@/lib/actions/blogs.actions";
import { useRouter } from "next/navigation";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
const MoreBlogs = ({ category }) => {
  const router = useRouter();
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    console.log(category);
    console.log(fetchmoreblogsbycategory({ category }));
    const func = async () => {
      const blogs = await fetchmoreblogsbycategory({ category });
      setBlogs(blogs);
    };
    func();
    return () => {
      console.log("unmount");

      // eslint-disable-next-line react-hooks/exhaustive-deps
    };
  }, [category]);

  console.log(blogs);
  return (
    <div>
      More Blogs
      <div>
        <ul className="w-full text-gray-700">
          {blogs.map((blog) => (
            <li
              key={blog._id}
              onClick={() =>
                router.push(
                  `/blogs/${blog?._id}/${blog.title
                    .toLowerCase()
                    .replace(/\s+/g, "-")}`
                )
              }
              className="flex w-full cursor-pointer justify-between rounded-sm px-2 py-1 hover:bg-gray-100"
            >
              <div className="flex flex-col">
                <span className="font-HankenGrotesk text-lg font-semibold">
                  {blog.title}
                </span>
              </div>
              <img
                src={blog.imageURL}
                alt={blog.title}
                className="h-8 rounded-sm object-cover"
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MoreBlogs;
