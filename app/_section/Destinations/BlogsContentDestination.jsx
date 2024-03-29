"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function BlogsContentDestination({ blogs }) {
  const router = useRouter();

  return (
    <>
      <h1 className="text-center font-CooperHewitt text-4xl font-thin uppercase max-md:text-xl">
        Latest blogs
      </h1>
      <main className="flex w-full flex-wrap items-start justify-center px-10 py-10 max-md:flex-col max-md:px-6">
        {blogs.map((blog, index) => (
          <div
            className="group w-1/3 cursor-pointer rounded px-5 pb-5 max-md:w-full max-md:px-0"
            key={index}
            onClick={() =>
              router.push(
                `/blogs/${blog?._id}/${blog.title
                  .toLowerCase()
                  .replace(/\s+/g, "-")}`
              )
            }
          >
            <div className="">
              <div className="h-full w-full">
                <img
                  loading="lazy"
                  className="max-h-[200px] min-h-[200px] w-full rounded-t object-cover"
                  src={blog.imageURL}
                  alt={blog.title}
                />
              </div>
              <div className="w-full pb-3 pt-2">
                <span className="line-clamp-2 px-2 font-Gamiliademo text-xl font-semibold tracking-wider text-black group-hover:text-yellow-700">
                  {blog.title}
                </span>
              </div>
            </div>
          </div>
        ))}
      </main>
    </>
  );
}
