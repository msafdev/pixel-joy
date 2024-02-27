import Link from "next/link";

const BlogEmpty = () => {
  return (
    <div className="flex flex-col items-center justify-center col-span-3 py-12 md:py-20 pad-x">
      <h1 className="text-xl md:text-3xl text-center font-semibold text-gray-800">
        Sorry!
      </h1>
      <p className="text-gray-500 text-base md:text-xl text-center mt-2 mb-4 max-w-72">
        We have no articles for this category,{" "}
        <span className="italic">yet</span>
      </p>
      <Link
        href="/blog"
        className="text-foreground uppercase font-medium pb-[2px] hover:pr-3 anim border-b-2 border-foreground"
      >
        Go back?
      </Link>
    </div>
  );
};
export default BlogEmpty;
