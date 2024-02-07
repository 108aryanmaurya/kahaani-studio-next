import React from "react";
import StoryModal from "@/app/_section/Story/StoryModal";
export default function page({ params: { storyId } }) {
  return (
    <>
      <div className="py-96">
        <StoryModal storyId={storyId} />
      </div>
    </>
  );
}
