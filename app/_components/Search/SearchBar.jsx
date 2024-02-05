"use client";
import React, { useState, useEffect, useTransition } from "react";
import SearchDropDown from "./SearchDropDown";
import { searcheverything } from "@/lib/actions/search.actions";
const SearchBar = ({ scrollDirection }) => {
  const [expanded, setExpanded] = useState(false);
  const [searchtext, setSearchtext] = useState("");
  const [searchResult, setSearchResult] = useState({});
  const [searchResultExist, setSearchResultExist] = useState(false);
  const [loading, setLoading] = useState(false); // New state for loading
  const [_, startTransition] = useTransition();

  useEffect(() => {
    const fetchData = async () => {
      if (searchtext.trim().length > 1) {
        try {
          setLoading(true); // Set loading to true when starting the search
          const result = await searcheverything(searchtext);
          console.log(result);
          setSearchResult(result);
          setSearchResultExist(true);
        } catch (error) {
          console.error("Error fetching search results:", error);
        } finally {
          setLoading(false); // Set loading to false when the search is done
        }
      } else {
        setSearchResult({});
        setSearchResultExist(false);
      }
      if (searchtext.trim().length !== 0) {
        setSearchResultExist(true);
      }
    };

    startTransition(() => {
      fetchData();
    });
  }, [searchtext, startTransition]);

  const handleSearchIconClick = () => {
    setExpanded(!expanded);
    setSearchResultExist(false);
  };

  const handleInputBlur = () => {
    const blurTimeout = setTimeout(() => {
      setSearchResultExist(false);
    }, 300);
  };

  const handleInputFocus = () => {
    if (searchtext.trim() !== "") {
      setSearchResultExist(true);
    }
  };

  useEffect(() => {
    if (scrollDirection !== "up") {
      setSearchResultExist(false);
    }
  }, [scrollDirection]);

  return (
    <>
      {searchResultExist && <SearchDropDown searchResult={searchResult} />}
      <div
        className={`${
          expanded ? "w-full" : "w-12"
        } relative flex h-12 items-center overflow-hidden rounded-md bg-gray-100 shadow transition-all duration-300 ease-in-out focus-within:shadow-md max-sm:bg-gray-200`}
      >
        <div
          className="grid h-full w-14 cursor-pointer place-items-center text-gray-600"
          onClick={handleSearchIconClick}
        >
          {!loading ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          ) : (
            <svg
              width="45"
              height="45"
              viewBox="0 0 45 45"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#000"
            >
              <g
                fill="none"
                fill-rule="evenodd"
                transform="translate(1 1)"
                stroke-width="2"
              >
                <circle cx="22" cy="22" r="6" stroke-opacity="0">
                  <animate
                    attributeName="r"
                    begin="1.5s"
                    dur="3s"
                    values="6;22"
                    calcMode="linear"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="stroke-opacity"
                    begin="1.5s"
                    dur="3s"
                    values="1;0"
                    calcMode="linear"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="stroke-width"
                    begin="1.5s"
                    dur="3s"
                    values="2;0"
                    calcMode="linear"
                    repeatCount="indefinite"
                  />
                </circle>
                <circle cx="22" cy="22" r="6" stroke-opacity="0">
                  <animate
                    attributeName="r"
                    begin="3s"
                    dur="3s"
                    values="6;22"
                    calcMode="linear"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="stroke-opacity"
                    begin="3s"
                    dur="3s"
                    values="1;0"
                    calcMode="linear"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="stroke-width"
                    begin="3s"
                    dur="3s"
                    values="2;0"
                    calcMode="linear"
                    repeatCount="indefinite"
                  />
                </circle>
                <circle cx="22" cy="22" r="8">
                  <animate
                    attributeName="r"
                    begin="0s"
                    dur="1.5s"
                    values="6;1;2;3;4;5;6"
                    calcMode="linear"
                    repeatCount="indefinite"
                  />
                </circle>
              </g>
            </svg>
          )}
        </div>

        <input
          className={`peer h-full ${
            expanded ? "w-full pl-1" : "w-0"
          } border-none bg-gray-100 text-sm text-black outline-none transition-all duration-300 ease-in-out`}
          type="text"
          id="search"
          name="search"
          placeholder="Search something.."
          onChange={(e) => {
            startTransition(() => {
              setSearchtext(e.target.value);
            });
          }}
          onBlur={handleInputBlur}
          onFocus={handleInputFocus}
        />
      </div>
    </>
  );
};

export default SearchBar;
