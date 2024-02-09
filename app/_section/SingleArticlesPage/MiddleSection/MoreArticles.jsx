"use client";
import { fetchmorearticlesbycategory } from "@/lib/actions/articles.actions";

import { useRouter } from "next/navigation";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const MoreArticles = ({ category }) => {
  const router = useRouter();
  const [article, setarticle] = useState([]);
  useEffect(() => {
    const func = async () => {
      const articles = await fetchmorearticlesbycategory({ category });
      setarticle(articles);
    };
    func();
  }, [category]);

  return (
    <div>
      More Articles
      <div>
        <ul className="w-full text-gray-700">
          {article.map((art) => (
            <li
              key={art._id}
              onClick={() =>
                router.push(
                  `/articles/${art?._id}/${art.title
                    .toLowerCase()
                    .replace(/\s+/g, "-")}`
                )
              }
              className="flex w-full cursor-pointer justify-between rounded-sm px-2 py-1 hover:bg-gray-100"
            >
              <div className="flex flex-col">
                <span className="font-HankenGrotesk text-lg font-semibold">
                  {art.title}
                </span>
              </div>
              <img
                src={art.imageURL}
                alt={art.title}
                className="h-8 rounded-sm object-cover"
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MoreArticles;
