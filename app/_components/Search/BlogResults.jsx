"use client";
import React from "react";
import { useRouter } from "next/navigation";

export default function BlogResults({ blogs }) {
  const router = useRouter();

  return (
    <>
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
    </>
  );
}
