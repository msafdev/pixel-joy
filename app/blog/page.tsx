"use client";

import { useState, useEffect } from "react";

import { getPosts } from "@/hygraph";
import { FetchPostResponse } from "@/utils/types";

// Icons
import {
  Code,
  Cpu,
  MoveRight,
  Notebook,
  Palette,
  Sparkles,
} from "lucide-react";
import Image from "next/image";

const Blog = () => {
  const [post, setPost] = useState<FetchPostResponse>();

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    const posts = await getPosts();
    setPost(posts);
  };

  return (
    <div className="flex min-h-[calc(100vh-88px)] w-full flex-col">
      <div className="flex flex-col py-4 md:py-12 pad-x">
        <h1 className="text-4xl font-medium text-foreground">
          Explore what we have written for you
        </h1>
        <p className="text-lg text-foreground/60 mt-2 max-w-[800px]">
          Discover our latest articles and blog posts, ranging from tech-talks,
          tutorials, design, storytelling, and many more.
        </p>
      </div>

      <div className="w-full h-[1px] bg-gray-200" />

      {/* Blog Badges */}
      <div className="flex gap-x-2 py-2 items-center relative md:pad-x">
        <div className="no-scrollbar flex overflow-auto gap-x-2">
          <button className="px-3 py-2 flex gap-2 items-center bg-neutral-100 hover:bg-neutral-200 border-2 border-transparent hover:border-gray-200 rounded-full font-medium text-foreground/60 hover:text-foreground anim text-sm hover:z-10 ml-4 md:ml-0">
            <Notebook size={16} className="inline" />
            Journal
          </button>
          <button className="px-3 py-2 flex gap-2 items-center bg-neutral-100 hover:bg-neutral-200 border-2 border-transparent hover:border-gray-200 rounded-full font-medium text-foreground/60 hover:text-foreground anim text-sm hover:z-10">
            <Cpu size={16} className="inline" />
            Tech
          </button>
          <button className="px-3 py-2 flex gap-2 items-center bg-neutral-100 hover:bg-neutral-200 border-2 border-transparent hover:border-gray-200 rounded-full font-medium text-foreground/60 hover:text-foreground anim text-sm hover:z-10">
            <Palette size={16} className="inline" />
            Design
          </button>
          <button className="px-3 py-2 flex gap-2 items-center bg-neutral-100 hover:bg-neutral-200 border-2 border-transparent hover:border-gray-200 rounded-full font-medium text-foreground/60 hover:text-foreground anim text-sm hover:z-10">
            <Code size={16} className="inline" />
            Tutorial
          </button>
          <button className="px-3 py-2 flex gap-2 items-center bg-neutral-100 hover:bg-neutral-200 border-2 border-transparent hover:border-gray-200 rounded-full font-medium text-foreground/60 hover:text-foreground anim text-sm hover:z-10 mr-4 md:mr-0">
            <Sparkles size={16} className="inline" />
            Portfolio
          </button>
        </div>
        <div className="md:hidden absolute top-0 left-0 right-[90%] bottom-0 pointer-events-none bg-gradient-to-l from-transparent to-background" />
        <div className="md:hidden absolute top-0 left-[90%] right-0 bottom-0 pointer-events-none bg-gradient-to-r from-transparent to-background" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full h-fit pad-x gap-4 py-2">
        {!post
          ? /* Skeleton */
            Array.from({ length: 3 }).map((_, index) => (
              <div
                key={index}
                className="w-full h-auto aspect-[4/3] bg-gray-100 animate-pulse relative"
              >
                <div className="w-24 h-8 rounded-full bg-gray-200 absolute right-0 top-0 m-4" />
                <div className="w-full h-32 bg-gray-200 absolute bottom-0" />
              </div>
            ))
          : post?.postsConnection?.edges?.map((p, index) => (
              <div
                key={index}
                className="w-full h-auto aspect-[4/3] relative group overflow-hidden cursor-pointer bg-cover hover:bg-[50%]"
                style={{
                  backgroundImage: `url(${p.node.thumbnail.url})`,
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <div className="z-[5] px-4 py-1 group-hover:-translate-y-20 translate-y-0 anim font-medium uppercase rounded-full bg-background/80 backdrop-blur text-foreground text-xs md:text-sm absolute right-0 top-0 m-4">
                  {p.node.category}
                </div>
                <div className="z-[5] w-full absolute bottom-0 p-3 bg-background group-hover:translate-y-full translate-y-0 anim flex flex-col">
                  <p className="text-[5vw] md:text-lg xl:text-xl font-medium">
                    {p.node.title}
                  </p>
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
                <div className="absolute inset-0 bg-foreground/20 hover:opacity-0 opacity-100 transition-opacity duration-300 z-0" />
              </div>
            ))}
      </div>
    </div>
  );
};
export default Blog;
