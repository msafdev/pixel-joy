import Link from "next/link";

// Icons
import { Code, Cpu, Notebook, Palette, Sparkles } from "lucide-react";

const FilterLink = () => {
  return (
    <div className="no-scrollbar flex overflow-auto gap-x-2">
      <Link
        href={"/blog/general"}
        className="px-3 py-2 flex gap-2 items-center group bg-neutral-100 hover:bg-neutral-50 border-2 border-transparent hover:border-gray-200 rounded-full font-medium text-foreground/60 hover:text-foreground anim text-sm hover:z-10 ml-4 md:ml-0"
      >
        <Notebook size={16} className="inline group-hover:text-emerald-600" />
        General
      </Link>
      <Link
        href={"/blog/code"}
        className="px-3 py-2 flex gap-2 items-center group bg-neutral-100 hover:bg-neutral-50 border-2 border-transparent hover:border-gray-200 rounded-full font-medium text-foreground/60 hover:text-foreground anim text-sm hover:z-10"
      >
        <Cpu size={16} className="inline group-hover:text-foreground" />
        Code
      </Link>
      <Link
        href={"/blog/design"}
        className="px-3 py-2 flex gap-2 items-center group bg-neutral-100 hover:bg-neutral-50 border-2 border-transparent hover:border-gray-200 rounded-full font-medium text-foreground/60 hover:text-foreground anim text-sm hover:z-10"
      >
        <Palette size={16} className="inline group-hover:text-violet-600" />
        Design
      </Link>
      <Link
        href={"/blog/portfolio"}
        className="px-3 py-2 flex gap-2 items-center group bg-neutral-100 hover:bg-neutral-50 border-2 border-transparent hover:border-gray-200 rounded-full font-medium text-foreground/60 hover:text-foreground anim text-sm hover:z-10 mr-4 md:mr-0"
      >
        <Sparkles size={16} className="inline group-hover:text-amber-500" />
        Portfolio
      </Link>
    </div>
  );
};
export default FilterLink;
