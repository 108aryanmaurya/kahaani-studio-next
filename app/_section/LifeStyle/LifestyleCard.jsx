"use client";
import React from "react";
import { useRouter } from "next/navigation";

export default function LifestyleCard({ lifestyle }) {
  const route = useRouter();

  return (
    <>
      <h1 className="text-center font-CooperHewitt text-4xl font-thin uppercase max-md:text-xl">
        Recent posts
      </h1>
      <main className="flex w-full flex-wrap items-start justify-center px-10 py-10 max-md:flex-col max-md:px-6">
        {lifestyle.map((lifestyle, index) => (
          <div
            className="group w-1/3 cursor-pointer rounded px-5 pb-5 max-md:w-full max-md:px-0"
            key={index}
            onClick={() =>
              route.push(
                `/lifestyle/${lifestyle?._id}/${lifestyle?.title
                  .toLowerCase()
                  .replace(/\s+/g, "-")}`
              )
            }
          >
            <div className="group">
              <div className="h-full w-full max-h-[300px] rounded overflow-hidden">
                <img
                  loading="lazy"
                  className="h-full group-hover:scale-[1.02] transition-all ease-in-out duration-200 min-h-[200px] w-full rounded object-cover"
                  src={lifestyle?.imageURL}
                  alt={lifestyle?.title}
                />
              </div>
              <div className="w-full pb-3 pt-2">
                <span className="line-clamp-2 px-2 font-Gamiliademo text-2xl font-semibold tracking-wider text-black">
                  {lifestyle?.title}
                </span>
              </div>
            </div>
          </div>
        ))}
      </main>
    </>
  );
}
