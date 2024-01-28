import Link from "next/link";
import Image from "next/image";

// Fonts
import { Poppins } from "next/font/google";

// Icons
import { FaArrowRight, FaAsterisk } from "react-icons/fa";

// Assets
import Memoji01 from "@/public/assets/memojis/salman.jpg";
import { FaArrowRightLong } from "react-icons/fa6";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export default function Home() {
  return (
    <main className="flex min-h-[calc(100vh-80px)] md:min-h-[calc(100vh-88px)] w-full flex-col md:flex-row pad-x py-6 md:pt-12 md:pb-0">
      <div className="flex flex-col text-center items-center md:items-end md:text-left w-full md:w-1/2 pr-0 md:pr-8 h-auto gap-y-6 lg:gap-y-8">
        {/* Main Text */}
        <h1
          className={`text-2xl md:text-4xl lg:text-5xl xl:text-5xl 2xl:text-6xl ${poppins.className}`}
        >
          Transform Your Business{" "}
          <FaArrowRight className="inline-block w-4 h-4 lg:w-8 lg:h-8 text-background/50" />{" "}
          With Delightful Digital Experiences{" "}
          <FaAsterisk className="inline-block w-4 h-4 lg:w-8 lg:h-8 text-primary" />
        </h1>

        {/* Sub Text */}
        <div className="flex justify-center md:justify-end gap-x-4">
          <FaArrowRightLong className="w-5 h-5 text-background hidden md:block" />
          <p className="text-base text-background/80 w-[90%] md:text-lg lg:text-xl font-light">
            We are a digital product design and development company. We help
            businesses build delightful digital experiences.
          </p>
        </div>

        {/* CTAs */}
        <div className="flex items-center justify-center md:justify-start">
          <Link
            href="/"
            className="border-b-2 pb-1 group flex items-center w-fit anim gap-x-3 text-primary-foreground"
          >
            <div className="text-base md:text-lg uppercase font-medium">
              Learn More
            </div>
          </Link>
        </div>

        {/* Feature */}

      </div>
    </main>
  );
}
