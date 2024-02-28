import Link from "next/link";

// Icons
import { HiArrowLongRight } from "react-icons/hi2";
import Service from "../service";

// Constants
import { serviceList } from "@/utils/constants/home";

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
      </div>
      {/* Services */}
      {serviceList.map((service, index) => (
        <Service
          key={index}
          number={service.number}
          title={service.title}
          text={service.text}
        />
      ))}
      <div className="flex pad-x pt-4 pb-4 md:pb-8 justify-end">
        <Link
          href="/"
          aria-label="View all"
          className="border-b-2 border-foreground/80 pb-1 hover:pl-3 group flex items-center w-fit anim gap-x-3 text-foreground anim"
        >
          <div className="text-base md:text-lg uppercase font-medium">
            View all
          </div>
          <HiArrowLongRight className="w-6 h-6 text-foreground group-hover:-rotate-12 anim" />
        </Link>
      </div>
    </section>
  );
};
export default Section2;
