import React from "react";

export default function WorkWithMeHero() {
  return (
    <>
      <div
        className={`flex cursor-pointer flex-wrap items-center max-md:mx-5 max-md:mb-5 max-md:flex-col-reverse`}
      >
        <div className="h-[800px] w-1/2 overflow-hidden bg-gray-800 max-md:h-[300px] max-md:w-full">
          <img
            loading="lazy"
            src="https://img.freepik.com/free-photo/top-view-food-banquet_23-2149893484.jpg"
            className="h-full w-full object-cover object-center transition-all duration-500 ease-in-out"
            alt="Work With Me Hero Image"
          />
        </div>
        <div className="w-1/2 bg-white p-10 font-sans max-md:w-full max-md:px-0 max-md:py-5">
          <div className="max-md:mx-4">
            <h1 className="text-7xl tracking-wider font-Gamiliademo font-semibold">
              Work with me!
            </h1>
            <h3 className="text-4xl mt-5 ml-3 tracking-wider font-CooperHewitt">
              Travel the World With Purpose
            </h3>

            <div className="description mt-10 w-full font-HankenGrotesk text-2xl ml-3 text-gray-500 md:w-2/3">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil
              accusantium nesciunt maxime fugiat exercitationem facilis.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
