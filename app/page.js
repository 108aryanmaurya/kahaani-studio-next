import Image from "next/image";

import HeroAbout from "./_section/Home/Hero/HeroAbout";
import BrandLogo from "./_section/Home/Brands/BrandLogo";
import HomeAbout from "./_section/Home/About/HomeAbout";
import YoutubeContent from "./_section/Home/YoutubeContent/YoutubeContent";
import NewsletterHero from "./_section/Home/Newsletter/NewsletterHero";
export async function generateMetadata() {
  const title = "hello";
  const description = "some descr";

  return {
    props: {
      title,
      description,
    },
  };
}
export default function Home() {
  return (
    <>
      <main>
        <HeroAbout />
        <div className="mx-auto max-w-screen-xl pt-0 max-md:pt-5">
          <BrandLogo />
        </div>
        <div className="mx-auto max-w-screen-xl max-md:pt-5">
          <HomeAbout />
        </div>

        <div className="mx-auto max-w-screen-xl pt-10 max-md:pt-5">
          <YoutubeContent />
        </div>
        <div className="mx-auto pt-28 max-md:pt-10">
          <NewsletterHero />
        </div>
      </main>
    </>
  );
}
