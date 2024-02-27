"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";

// Fetch
import { getPostsCategory } from "@/hygraph";
import { FetchPostResponse } from "@/utils/types";

// Components
import Breadcrumb from "@/components/shared/breadcrumb";
import FilterLink from "@/components/shared/filterlink";

// Icons
import { MoveRight } from "lucide-react";
import BlogEmpty from "@/components/errors/blogempty";

const Category = () => {
  const [filteredPosts, setFilteredPosts] = useState<FetchPostResponse>();

  const params = useParams<{ category: string }>();

  console.log(params.category);

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
          tutorials, design, storytelling, and many more.
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
              <div
                key={index}
                className="w-full h-auto aspect-[4/3] relative group overflow-hidden cursor-pointer bg-cover hover:bg-[50%]"
              >
                {/* Image */}
                <Image
                  src={p.node.thumbnail.url}
                  alt={p.node.title}
                  sizes="100%"
                  className="w-full h-full flex grow"
                  priority
                  fill
                />

                {/* Overlay */}
                <div className="z-[5] px-4 py-1 trans group-hover:translate-x-10 translate-x-0 group-hover:-translate-y-20 translate-y-0 anim font-medium uppercase rounded-full bg-background/80 backdrop-blur text-foreground text-xs md:text-sm absolute right-0 top-0 m-4">
                  {p.node.category}
                </div>

                {/* Post Details */}
                <div className="z-[5] w-full absolute bottom-0 p-3 bg-background group-hover:translate-y-full translate-y-0 anim-slower flex flex-col">
                  <p className="text-[5vw] md:text-lg xl:text-xl font-medium">
                    {p.node.title}
                  </p>

                  {/* Avatar */}
                  <div className="flex gap-x-2 items-center">
                    <Image
                      src={p.node.person.avatar.url}
                      alt={p.node.person.name}
                      width={35}
                      height={35}
                      className="rounded-full overflow-hidden"
                    />
                    <MoveRight size={16} className="text-foreground/60 mr-2" />
                    <p className="text-foreground/60 font-medium">
                      {p.node.person.name}
                    </p>
                  </div>
                </div>

                {/* Hover Effect */}
                {/* <div className="absolute inset-0 bg-foreground/20 hover:opacity-0 opacity-100 transition-opacity duration-300 z-0" /> */}
              </div>
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
