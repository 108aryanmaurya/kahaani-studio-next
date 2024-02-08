import React from "react";
import StoryContent from "../../Home/Stories/StoryContent";
export default function StoriesPage({ stories }) {
  return (
    <>
      <main>
        <h1 className="text-center font-CooperHewitt text-4xl mt-20 font-thin uppercase">
          Explore More Stories
        </h1>
        <div className="mx-auto max-w-screen-xl my-32 max-md:pt-5">
          <StoryContent stories={stories} />
        </div>
        <div className="mx-auto max-w-screen-xl my-32 max-md:pt-5">
          <StoryContent stories={stories} />
        </div>
      </main>
    </>
  );
}
