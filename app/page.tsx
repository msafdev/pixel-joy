import Link from "next/link";
import Image from "next/image";

// Fonts
import { Poppins } from "next/font/google";

// Icons
import { FaArrowRight, FaAsterisk } from "react-icons/fa";

// Assets
import { FaArrowRightLong } from "react-icons/fa6";
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
      <section className="flex flex-col md:items-center md:justify-center w-full md:min-h-[calc(100vh-88px)] pad-x py-4 md:py-12 lg:py-20 gap-y-6 lg:gap-y-8">
        {/* Main Text */}
        <h1
          className={`text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl text-center ${poppins.className}`}
        >
          Transform Your Business{" "}
          <FaArrowRight className="inline-block w-4 h-4 lg:w-8 lg:h-8 text-background/50" />{" "}
          With Delightful Digital Experiences{" "}
          <FaAsterisk className="inline-block w-4 h-4 lg:w-8 lg:h-8 text-primary" />
        </h1>

        {/* Middle Text */}
        <div className="flex flex-col md:flex-row items-center md:items-start md:justify-between md:w-[90%] gap-x-12 gap-y-6">
          {/* Sub Text */}
          <div className="flex justify-center md:justify-start gap-x-4 max-w-lg">
            <FaArrowRightLong className="w-5 h-5 text-background hidden md:block translate-y-1" />
            <p className="text-base text-center md:text-left text-background/80 w-[90%] md:text-lg lg:text-xl font-light">
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
        </div>

        {/* Feature */}
        <div className="w-full md:w-[90%] grid md:grid-cols-4 lg:grid-cols-5 gap-y-6">
          <div className="flex md:flex-col gap-y-2 justify-around md:justify-center items-center md:items-start">
            <div className="flex items-center -space-x-3">
              {AvatarAsset.map((avatar, index) => (
                <div
                  key={index}
                  className="w-10 h-10 rounded-full overflow-hidden bg-black border-2 border-background/20"
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
              className="border-b-2 pb-1 group flex items-end w-fit anim gap-x-3 text-primary-foreground"
            >
              <div className="text-sm md:text-base uppercase font-medium">
                Our Team
              </div>
            </Link>
          </div>

          <div className="flex flex-col md:flex-row border-2 rounded-xl md:border-0 items-center w-full md:col-start-2 lg:col-start-3 md:col-span-3">
            <div className="flex flex-col gap-y-3 w-full p-3 rounded-t-[10px] bg-foreground hover:bg-background/40 hover:md:bg-foreground anim">
              <p className="text-sm text-center text-background md:text-base lg:text-lg font-light">
                Unlimited design and development support for your business.
              </p>
            </div>

            {/* Border */}
            <div className="md:w-[3px] md:h-12 w-full h-[2px] bg-background flex mx-4 md:rounded-full" />

            <div className="flex flex-col gap-y-3 w-full p-3 rounded-b-[10px] bg-foreground hover:bg-background/40 hover:md:bg-foreground anim">
              <p className="text-sm text-center text-background md:text-base lg:text-lg font-light">
                Continuous improvement and support for your digital products.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col items-center w-full pad-x py-4 md:py-12 lg:py-20 h-auto gap-y-6 lg:gap-y-8">
        <div className="flex w-full justify-center">
          <Badge head="Epic!" body="What we have to offer" />
        </div>

        {/* Cards */}
        <div className="grid lg:grid-cols-3 gap-4 w-full">
          <div className="w-full h-fit bg-background/40 rounded-lg flex flex-col">
            <div className="flex justify-between items-center">
              <CardBadge
                text="Web Development"
                className="translate-y-1 rounded-t-lg"
              />
              <div className="flex gap-x-2 px-2">
                <div className="w-3 h-3 bg-green-400 rounded-full" />
                <div className="w-3 h-3 bg-yellow-400 rounded-full" />
                <div className="w-3 h-3 bg-red-500 rounded-full" />
              </div>
            </div>
            <div className="w-full h-[200px] md:h-[250px] lg:h-[300px] bg-background flex flex-col rounded-b-lg rounded-tr-lg"></div>
          </div>
          <div className="w-full h-fit bg-background/40 rounded-lg flex flex-col">
            <div className="flex justify-between items-center">
              <CardBadge
                text="UI Design"
                className="translate-y-1 rounded-t-lg"
              />
              <div className="flex gap-x-2 px-2">
                <div className="w-3 h-3 bg-green-400 rounded-full" />
                <div className="w-3 h-3 bg-yellow-400 rounded-full" />
                <div className="w-3 h-3 bg-red-500 rounded-full" />
              </div>
            </div>
            <div className="w-full h-[200px] md:h-[250px] lg:h-[300px] bg-background flex flex-col rounded-b-lg rounded-tr-lg"></div>
          </div>
          <div className="w-full h-fit bg-background/40 rounded-lg flex flex-col">
            <div className="flex justify-between items-center">
              <CardBadge
                text="IT Consultant"
                className="translate-y-1 rounded-t-lg"
              />
              <div className="flex gap-x-2 px-2">
                <div className="w-3 h-3 bg-green-400 rounded-full" />
                <div className="w-3 h-3 bg-yellow-400 rounded-full" />
                <div className="w-3 h-3 bg-red-500 rounded-full" />
              </div>
            </div>
            <div className="w-full h-[200px] md:h-[250px] lg:h-[300px] bg-background flex flex-col rounded-b-lg rounded-tr-lg"></div>
          </div>
        </div>
      </section>
    </main>
  );
}
