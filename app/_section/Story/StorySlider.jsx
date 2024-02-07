import React, { useEffect, useRef, useState } from "react";
import Stories from "stories-react";
import { storyContentGroup } from "@/app/_components/constants/constants";
import "stories-react/dist/index.css";
import { useRouter } from "next/navigation";

const StorySlider = ({ storyId }) => {
  const router = useRouter();
  const [currentStoryIndex, setCurrentStoryIndex] = useState(storyId);

  useEffect(() => {
    setCurrentStoryIndex(storyId);
  }, [storyId]);

  const nextStory = () => {
    if (currentStoryIndex < storyContentGroup.length - 1) {
      router.push(`/story/${parseInt(currentStoryIndex) + 1}`);
    } else {
      router.push(`/`);
    }
  };

  const prevStory = () => {
    if (currentStoryIndex > 0) {
      router.push(`/story/${parseInt(currentStoryIndex) - 1}`);
    } else {
      // Handle case when there is no previous story
    }
  };

  return (
    <>
      <button
        onClick={prevStory}
        className="fixed left-0 top-1/2  z-[9999999999999] -translate-y-1/2 transform bg-gray-100 p-5 text-black"
      >
        Previous
      </button>

      {storyContentGroup[currentStoryIndex] && (
        <Stories
          stories={storyContentGroup[currentStoryIndex]}
          width="56.25vh"
          height="100vh"
          onAllStoriesEnd={nextStory}
          className="fixed right-0 top-1/2"
          pauseStoryWhenInActiveWindow={true}
          // loop={true}
        />
      )}
      <button
        onClick={nextStory}
        className="fixed right-0 top-1/2 z-[9999999999999] -translate-y-1/2 transform bg-gray-100 p-5 text-black"
      >
        Next
      </button>
    </>
  );
};

export default StorySlider;
