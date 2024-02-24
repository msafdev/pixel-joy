import Link from "next/link";
import Image from "next/image";

// Fonts
import { Poppins } from "next/font/google";

// Icons
import { FaArrowRight, FaAsterisk } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { HiArrowLongRight } from "react-icons/hi2";

// Assets
import Ava1 from "@/public/assets/avatar/avatar-1.jpg";
import Ava2 from "@/public/assets/avatar/avatar-2.jpg";
import Ava3 from "@/public/assets/avatar/avatar-3.png";
import Ava4 from "@/public/assets/avatar/avatar-4.png";

// Components
import Badge from "@/components/shared/badge";
import CardBadge from "@/components/shared/cardbadge";

const AvatarAsset = [Ava1, Ava2, Ava3, Ava4];

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export default function Home() {
  return (
    <main className="flex h-fit w-full flex-col">
      <section className="flex flex-col md:items-center md:justify-center w-full pad-x py-4 md:py-12 lg:py-20 gap-y-6 lg:gap-y-8">
        {/* Main Text */}
        <h1
          className={`text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl text-center ${poppins.className}`}
        >
          Transform Your Business{" "}
          <FaArrowRight className="inline-block w-4 h-4 lg:w-8 lg:h-8 text-foreground/60" />{" "}
          With Delightful Digital Experiences{" "}
          <FaAsterisk className="inline-block w-4 h-4 lg:w-8 lg:h-8 text-primary" />
        </h1>

        {/* Middle Text */}
        <div className="flex flex-col md:flex-row items-center md:items-start md:justify-between md:w-[90%] gap-x-12 gap-y-6">
          {/* Sub Text */}
          <div className="flex justify-center md:justify-start gap-x-4 max-w-lg">
            <FaArrowRightLong className="w-5 h-5 text-foreground hidden md:block translate-y-1" />
            <p className="text-base text-center md:text-left text-foreground/80 w-[90%] md:text-lg lg:text-xl">
              We are a digital product design and development company. We help
              businesses build delightful digital experiences.
            </p>
          </div>

          {/* CTAs */}
          <div className="flex items-center justify-center md:justify-start">
            <Link
              href="/"
              className="border-b-2 border-foreground/80 pb-1 hover:pr-3 group flex items-end w-fit anim gap-x-3 text-foreground anim"
            >
              <div className="text-base md:text-lg uppercase font-medium">
                Learn More
              </div>
            </Link>
          </div>
        </div>

        {/* Feature */}
        <div className="w-full md:w-[90%] grid md:grid-cols-4 lg:grid-cols-5 gap-y-6">
          <div className="flex md:flex-col gap-y-2 justify-around md:justify-center items-center md:items-start">
            <div className="flex items-center -space-x-3">
              {AvatarAsset.map((avatar, index) => (
                <div
                  key={index}
                  className="w-10 h-10 rounded-full overflow-hidden bg-black border-2 border-foreground"
                >
                  <Image
                    src={avatar}
                    alt="Avatar"
                    placeholder="blur"
                    className="rounded-full"
                  />
                </div>
              ))}
            </div>
            <Link
              href="/"
              className="border-b-2 border-foreground/80 pb-1 hover:pl-3 group flex items-end w-fit anim gap-x-3 text-foreground anim"
            >
              <div className="text-sm md:text-base uppercase font-medium">
                Our Team
              </div>
            </Link>
          </div>

          <div className="flex flex-col mx-auto max-w-[400px] md:max-w-none md:flex-row rounded-xl items-center w-full md:col-start-2 lg:col-start-3 md:col-span-3">
            <div className="flex flex-col gap-y-3 w-full p-3 rounded-t-[10px] anim">
              <p className="text-sm text-center text-foreground md:text-base lg:text-lg">
                Unlimited design and development support for your business.
              </p>
            </div>

            {/* Border */}
            <code className="font-semibold text-xl mx-4">&</code>

            <div className="flex flex-col gap-y-3 w-full p-3 rounded-b-[10px] anim">
              <p className="text-sm text-center text-foreground md:text-base lg:text-lg">
                Continuous improvement and support for your digital products.
              </p>
            </div>
          </div>
        </div>
      </section>

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
        <div className="flex w-full pad-x gap-x-4 py-8 group hover:text-background hover:bg-foreground anim">
          <code className="text-sm md:text-base lg:text-lg">01</code>
          <h2 className="text-2xl lg:text-5xl 2xl:text-6xl font-semibold">
            Website Development
          </h2>
          <div className="flex flex-col ml-auto justify-end">
            <p className="text-end text-xs md:text-sm">Learn more</p>
            <h3 className="font-medium text-end text-xl hidden md:block">
              Next, React, Webflow
            </h3>
          </div>
        </div>
        <div className="flex w-full pad-x gap-x-4 py-8 group hover:text-background hover:bg-foreground anim">
          <code className="text-sm md:text-base lg:text-lg">02</code>
          <h2 className="text-2xl lg:text-5xl 2xl:text-6xl font-semibold">
            UI/UX Design
          </h2>
          <div className="flex flex-col ml-auto justify-end">
            <p className="text-end text-xs md:text-sm">Learn more</p>
            <h3 className="font-medium text-end text-xl hidden md:block">
              Figma
            </h3>
          </div>
        </div>
        <div className="flex w-full pad-x gap-x-4 py-8 group hover:text-background hover:bg-foreground anim">
          <code className="text-sm md:text-base lg:text-lg">03</code>
          <h2 className="text-2xl lg:text-5xl 2xl:text-6xl font-semibold">
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
    </main>
  );
}
