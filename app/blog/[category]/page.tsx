"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";

// Fetch
import { getPostsCategory } from "@/hygraph";
import { FetchPostResponse } from "@/utils/types/post";

// Components
import Breadcrumb from "@/components/shared/breadcrumb";
import FilterLink from "@/components/shared/filterlink";
import BlogEmpty from "@/components/errors/blogempty";
import BlogCard from "@/components/shared/blogcard";

const Category = () => {
  const [filteredPosts, setFilteredPosts] = useState<FetchPostResponse>();

  const params = useParams<{ category: string }>();

  useEffect(() => {
    if (params) {
      const fetchPosts = async () => {
        const posts = await getPostsCategory({ category: params.category });
        setFilteredPosts(posts);
      };
      fetchPosts();
    }
  }, [params]);

  return (
    <div className="flex h-full w-full flex-col">
      <div className="flex flex-col py-4 md:py-12 pad-x">
        <h1 className="text-4xl font-medium text-foreground">
          Explore what we have written for you
        </h1>
        <p className="text-lg text-foreground/60 mt-2 max-w-[800px]">
          Discover our latest articles and blog posts, ranging from tech-talks,
          tutorials, design, storytelling, and{" "}
          <span className="italic">many more</span>.
        </p>
        <div className="flex mt-4 w-full">
          <Breadcrumb />
        </div>
      </div>

      <div className="w-full h-[1px] bg-gray-200" />

      {/* Blog Badges */}
      <div className="flex gap-x-2 pt-4 pb-2 items-center relative md:pad-x">
        <FilterLink />
        <div className="md:hidden absolute top-0 left-0 right-[90%] bottom-0 pointer-events-none bg-gradient-to-l from-transparent to-background" />
        <div className="md:hidden absolute top-0 left-[90%] right-0 bottom-0 pointer-events-none bg-gradient-to-r from-transparent to-background" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full h-fit pad-x gap-4 pt-4 pb-8">
        {filteredPosts ? (
          filteredPosts.postsConnection?.edges?.length ? (
            filteredPosts.postsConnection?.edges.map((p, index) => (
              <BlogCard key={index} post={p} />
            ))
          ) : (
            <BlogEmpty />
          )
        ) : (
          /* Skeleton */
          Array.from({ length: 3 }).map((_, index) => (
            <div
              key={index}
              className="w-full h-auto aspect-[4/3] bg-gray-100 animate-pulse relative"
            >
              <div className="w-24 h-8 rounded-full bg-gray-200 absolute right-0 top-0 m-4" />
              <div className="w-full h-32 bg-gray-200 absolute bottom-0" />
            </div>
          ))
        )}
      </div>
    </div>
  );
};
export default Category;
