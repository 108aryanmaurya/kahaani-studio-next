import React from "react";
import SocialLinks from "./SocialLinks";
export default function ContactInfo() {
  return (
    <>
      <div className="max-sm:mt-5 max-lg:flex flex-col justify-center items-center my-auto max-lg:mb-10 mx-20">
        <h1 className="text-5xl max-sm:text-3xl 2xl:text-6xl font-CooperHewitt mb-5">
          Get in touch
        </h1>
        <p className="font-CooperHewitt text-xl my-5">
          PLease feel free to contact me regarding any queries or Collab.
        </p>

        <div className="max-lg:flex justify-center items-center flex-col mb-5">
          <h1 className="text-3xl 2xl:text-4xl max-md:text-xl font-HankenGrotesk">
            Email
          </h1>

          <div className="max-lg:flex justify-center items-center flex-col">
            <span className="text-xl font-Gamiliademo">
              shikhagautam@gmail.com{" "}
            </span>
          </div>
        </div>
        <div className="max-lg:flex justify-center items-center flex-col">
          {" "}
          <h1 className="text-3xl 2xl:text-4xl max-md:text-xl font-HankenGrotesk">
            Phone
          </h1>
          <div className="max-lg:flex justify-center items-center flex-col">
            <span className="text-xl font-Gamiliademo">+9123452353453</span>
          </div>
        </div>
        <div className="flex 2xl:text-2xl gap-5 text-xl py-4 sm:mt-0">
          <SocialLinks />
        </div>
      </div>
    </>
  );
}
