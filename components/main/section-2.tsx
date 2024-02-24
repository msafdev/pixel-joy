import Link from "next/link";

// Icons
import { HiArrowLongRight } from "react-icons/hi2";

const Section2 = () => {
  return (
    <section className="flex flex-col w-full pt-8 h-auto bg-background text-foreground">
      <div className="flex pad-x pb-4 w-full items-center justify-between">
        <div className="flex flex-col">
          <p className="font-medium text-lg">Our services</p>
          <h1 className="text-2xl lg:text-3xl 2xl:text-4xl font-semibold">
            What We Do
          </h1>
        </div>

        <Link
          href="/"
          className="border-b-2 border-foreground/80 pb-1 hover:pl-3 group flex items-center w-fit anim gap-x-3 text-foreground anim"
        >
          <div className="text-base md:text-lg uppercase font-medium">
            View all
          </div>
          <HiArrowLongRight className="w-6 h-6 text-foreground" />
        </Link>
      </div>
      {/* Services */}
      <div className="flex w-full pad-x gap-x-4 py-8 group hover:text-background hover:bg-foreground anim cursor-pointer">
        <code className="text-sm md:text-base lg:text-lg">01</code>
        <h2 className="text-2xl lg:text-5xl 2xl:text-6xl font-medium">
          Website Development
        </h2>
        <div className="flex flex-col ml-auto justify-end">
          <p className="text-end text-xs md:text-sm">Learn more</p>
          <h3 className="font-medium text-end text-xl hidden md:block">
            Next, React, Webflow
          </h3>
        </div>
      </div>
      <div className="flex w-full pad-x gap-x-4 py-8 group hover:text-background hover:bg-foreground anim cursor-pointer">
        <code className="text-sm md:text-base lg:text-lg">02</code>
        <h2 className="text-2xl lg:text-5xl 2xl:text-6xl font-medium">
          UI/UX Design
        </h2>
        <div className="flex flex-col ml-auto justify-end">
          <p className="text-end text-xs md:text-sm">Learn more</p>
          <h3 className="font-medium text-end text-xl hidden md:block">
            Figma
          </h3>
        </div>
      </div>
      <div className="flex w-full pad-x gap-x-4 py-8 group hover:text-background hover:bg-foreground anim cursor-pointer">
        <code className="text-sm md:text-base lg:text-lg">03</code>
        <h2 className="text-2xl lg:text-5xl 2xl:text-6xl font-medium">
          Mobile Development
        </h2>
        <div className="flex flex-col ml-auto justify-end">
          <p className="text-end text-xs md:text-sm">Learn more</p>
          <h3 className="font-medium text-end text-xl hidden md:block">
            React Native, Flutter
          </h3>
        </div>
      </div>
    </section>
  );
};
export default Section2;
