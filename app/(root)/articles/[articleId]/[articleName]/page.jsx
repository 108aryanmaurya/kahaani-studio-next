import React from "react";
import { fetcharticleswithcontent } from "@/lib/actions/articles.actions";
import ShareModal from "@/app/_section/Share/ShareModal";
import ShareModalHorizonatal from "@/app/_section/Share/ShareModalHorizonatal";
import ArticleHero from "@/app/_section/SingleArticlesPage/MiddleSection/ArticleHero";
import MainContent from "@/app/_section/SingleArticlesPage/MiddleSection/ArticleMainContent";
import SingleBlogPageSkeleton from "@/app/_layouts/Skeletons/SingleBlogPageSkeleton";
import Footer from "@/app/_section/SingleArticlesPage/MiddleSection/ArticleFooter";
export default async function page({ params: { articleId, articleName } }) {
  const articles = await fetcharticleswithcontent(articleId);

  if (!articles || articles.length === 0) {
    return <SingleBlogPageSkeleton />;
  }
  const { date, title, category, imageURL, articleContent } = articles;

  return (
    <>
      <div className=" mx-auto mt-20 flex w-full items-start justify-start px-10 max-md:flex-col max-md:px-5 max-sm:px-0">
        <ShareModal title={title} />
        <article className="mx-auto max-w-[70vw] border-r border-black max-md:max-w-full  max-md:border-none max-md:pr-0">
          <ArticleHero
            title={title}
            date={date}
            category={category}
            imageURL={imageURL}
          />
          <MainContent content={articleContent?.content} />
          <div className="mx-0 max-sm:mx-2  2xl:mx-20">
            <div className="">
              <ShareModalHorizonatal title={title} />
            </div>
            <Footer />
          </div>
        </article>
      </div>
    </>
  );
}
