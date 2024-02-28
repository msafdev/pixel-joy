"use client";

import Link from "next/link";
import { useParams } from "next/navigation";

// Icons
import {
  Code,
  Grid2X2,
  Info,
  LayoutGrid,
  Palette,
  Sparkles,
} from "lucide-react";

const FilterLink = () => {
  const params = useParams<{ category: string }>();

  return (
    <div className="no-scrollbar flex overflow-auto gap-x-2">
      <Link
        href={"/blog"}
        aria-label="All"
        className={`px-3 py-2 capitalize flex gap-2 items-center group bg-neutral-100 hover:bg-neutral-50 border-2 hover:border-gray-200 rounded-full font-medium hover:text-foreground anim text-sm hover:z-10 ml-4 md:ml-0 ${
          params.category === undefined
            ? "text-foreground bg-neutral-50"
            : "text-foreground/60 border-transparent"
        }`}
      >
        <LayoutGrid
          size={16}
          className={`inline group-hover:text-foreground ${
            params.category === undefined
              ? "text-foreground"
              : "text-foreground/60"
          }`}
        />
        All
      </Link>
      <Link
        href={"/blog/general"}
        aria-label="General"
        className={`px-3 py-2 capitalize flex gap-2 items-center group bg-neutral-100 hover:bg-neutral-50 border-2 hover:border-gray-200 rounded-full font-medium hover:text-foreground anim text-sm hover:z-10 ${
          params.category === "general"
            ? "text-foreground bg-neutral-50"
            : "text-foreground/60 border-transparent"
        }`}
      >
        <Info
          size={16}
          className={`inline group-hover:text-cyan-700 ${
            params.category === "general" ? "text-cyan-700" : ""
          }`}
        />
        general
      </Link>
      <Link
        href={"/blog/code"}
        aria-label="Code"
        className={`px-3 py-2 capitalize flex gap-2 items-center group bg-neutral-100 hover:bg-neutral-50 border-2 hover:border-gray-200 rounded-full font-medium hover:text-foreground anim text-sm hover:z-10 ${
          params.category === "code"
            ? "text-foreground bg-neutral-50"
            : "text-foreground/60 border-transparent"
        }`}
      >
        <Code
          size={16}
          className={`inline group-hover:text-foreground ${
            params.category === "code" ? "text-foreground" : "text-foreground/60"
          }`}
        />
        code
      </Link>
      <Link
        href={"/blog/design"}
        aria-label="Design"
        className={`px-3 py-2 capitalize flex gap-2 items-center group bg-neutral-100 hover:bg-neutral-50 border-2 hover:border-gray-200 rounded-full font-medium hover:text-foreground anim text-sm hover:z-10 ${
          params.category === "design"
            ? "text-foreground bg-neutral-50"
            : "text-foreground/60 border-transparent"
        }`}
      >
        <Palette
          size={16}
          className={`inline group-hover:text-violet-600 ${
            params.category === "design" ? "text-violet-600" : ""
          }`}
        />
        design
      </Link>
      <Link
        href={"/blog/portfolio"}
        aria-label="Portfolio"
        className={`px-3 py-2 capitalize flex gap-2 items-center group bg-neutral-100 hover:bg-neutral-50 border-2 hover:border-gray-200 rounded-full font-medium hover:text-foreground anim text-sm hover:z-10 mr-4 md:mr-0 ${
          params.category === "portfolio"
            ? "text-foreground bg-neutral-50"
            : "text-foreground/60 border-transparent"
        }`}
      >
        <Sparkles
          size={16}
          className={`inline group-hover:text-amber-500 ${
            params.category === "portfolio" ? "text-amber-500" : ""
          }`}
        />
        portfolio
      </Link>
    </div>
  );
};
export default FilterLink;
