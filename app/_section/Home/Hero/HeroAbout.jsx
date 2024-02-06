import React from "react";
// import HomeBanner from "@public/images/HomeBanner.jpeg";
export default function HeroAbout() {
  return (
    <>
      <div className="relative h-screen max-h-[800px] overflow-hidden bg-black  text-white">
        <div
          className="h-full w-full place-items-center bg-cover bg-top bg-fi]xed bg-no-repeat opacity-100 transition-all duration-500 ease-in-out"
          style={{
            backgroundImage: `url("/images/HomeBanner.jpeg")`,
          }}
        >
          <div className="absolute z-10 flex h-full max-w-[12vw] flex-col items-center justify-center pr-10 pt-0 text-center max-md:hidden ">
            <div className="rotate-90">
              <div className="ml-16 rotate-180 font-sans text-[7rem] font-bold opacity-60 max-xl:text-[7rem] max-lg:text-[5rem] 2xl:text-[9rem]">
                EXPLORE
              </div>
            </div>
          </div>

          <div className="absolute top-32 right-56 flex items-center justify-center max-md:w-full max-md:flex-col-reverse -rotate-1 py-12 bg-white p-10">
            <div className="absolute w-40 h-10 bg-[#00000091] top-0 -right-10 rotate-[25deg] backdrop-blur-sm"></div>
            <div className="flex  w-full max-w-[400px] flex-col  mix-blend-difference max-md:mr-0 max-md:mt-10 max-md:max-w-full max-md:px-5  ">
              <h1 className="relative text-center pb-5 font-CooperHewitt text-5xl font-semibold capitalize antialiased max-md:text-3xl max-sm:pb-2">
                Kahaani Studio
              </h1>
              <p className="pb-5 font-CooperHewitt text-xl text-center font-bold antialiased max-md:text-base">
                Shikha Gautam is a storyteller, who fell in love with content
                creation long before it became a thing. She forayed into the
                world of travel, reaching some of the furthest places in India
                and the world, slow travelling and documenting people, culture,
                topographies, folk tales, legends, mythology and more
              </p>
            </div>
            <div className="absolute w-40 h-10 bg-[#00000091] bottom-0 -left-10 rotate-[25deg] backdrop-blur-sm"></div>
          </div>
        </div>
      </div>
    </>
  );
}
