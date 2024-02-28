import Link from "next/link";
import Image from "next/image";

// Libs
import Balancer from "react-wrap-balancer";

// Fonts
import { Poppins } from "next/font/google";

// Assets
import Ava1 from "@/public/assets/avatar/avatar-1.png";
import Ava2 from "@/public/assets/avatar/avatar-2.png";

// Icons
import { Asterisk, MoveRight } from "lucide-react";

const AvatarAsset = [Ava1, Ava2];

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

const Section1 = () => {
  return (
    <section className="flex flex-col items-center md:items-center md:justify-center w-full pad-x py-4 md:py-12 lg:py-20 gap-y-6 lg:gap-y-8">
      {/* Main Text */}

      <h1
        className={`text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl text-center font-medium ${poppins.className}`}
      >
        <Balancer>
          Transform Your Business{" "}
          <MoveRight className="inline-block w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-gray-500" />{" "}
          With Delightful Digital Experiences{" "}
          <Asterisk className="inline-block w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-primary" />
        </Balancer>
      </h1>

      {/* Middle Text */}
      <div className="flex flex-col md:flex-row items-center md:items-start md:justify-between md:w-[90%] gap-x-12 gap-y-6">
        {/* Sub Text */}
        <div className="flex justify-center md:justify-start gap-x-4 max-w-lg">
          <MoveRight className="w-5 h-5 text-foreground hidden md:block translate-y-1" />
          <p className="text-base font-medium text-center md:text-left text-foreground/80 w-[90%] md:text-lg lg:text-xl">
            We are a digital product design and development company. We help
            businesses build delightful digital experiences.
          </p>
        </div>

        {/* CTAs */}
        <div className="flex items-center justify-center md:justify-start min-w-[120px]">
          <Link
            href="/"
            aria-label="Learn More"
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
        <div className="flex md:flex-col flex-wrap gap-y-2 gap-x-2 justify-around md:justify-center items-center md:items-start">
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
            href="/team"
            aria-label="Our Team"
            className="border-b-2 border-foreground/80 pb-1 hover:pl-3 group flex items-end w-fit anim gap-x-3 text-foreground anim min-w-[70px]"
          >
            <div className="text-sm md:text-base uppercase font-medium">
              Our Team
            </div>
          </Link>
        </div>

        <div className="flex flex-col mx-auto md:mx-0 md:ml-auto max-w-[400px] gap-y-2 md:items-end w-full md:col-start-2 lg:col-start-3 md:col-span-3">
          <p className="text-sm text-center md:text-end">Our mission</p>
          <h2 className="font-medium text-center md:text-end">
            Let's change your product with a more joyful experience
          </h2>
        </div>
      </div>
    </section>
  );
};
export default Section1;
