import React from "react";
import StoriesPage from "@/app/_section/Story/StoryPage/StoriesPage";
import { fetchAllStories } from "@/lib/actions/stories.actions";

export default async function page() {
  const stories = await fetchAllStories();
  return (
    <div>
      <StoriesPage stories={stories} />
    </div>
  );
}
