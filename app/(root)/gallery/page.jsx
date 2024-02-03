import React from "react";
import { fetchgallery } from "@/lib/actions/gallery.actions";
import GalleryHero from "@/app/_section/Photography/Hero/GalleryHero";
import MainContent from "@/app/_section/Photography/Gallery/MainContent";
export default async function page() {
  const photos = await fetchgallery();

  return (
    <div className=" pt-[4rem]">
      <div>
        <GalleryHero />
      </div>
      <div className="pt-10">
        <MainContent photos={photos} />
      </div>
    </div>
  );
}
