"use client";

import { useState, useEffect } from "react";

// Next
import Link from "next/link";
import { usePathname } from "next/navigation";

// Icons
import { BsTelephone, BsArrowRight } from "react-icons/bs";

// Components
import SquareButton from "../buttons/squarebutton";

// Libs
import { navList } from "@/utils/constants/navlink";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { CalendarHeart } from "lucide-react";

const NavItem = () => {
  const [currentTime, setCurrentTime] = useState("");
  const pathname = usePathname();

  console.log(pathname);

  useEffect(() => {
    const updateCurrentTime = () => {
      const now = new Date();
      const formattedTime = now.toLocaleTimeString("en-US", {
        timeZone: "Asia/Jakarta",
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      });
      setCurrentTime(formattedTime);
    };

    const intervalId = setInterval(updateCurrentTime, 1000);
    updateCurrentTime();

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <div className="hidden md:flex flex-col items-center font-medium md:-translate-x-12 peer-hover:translate-x-0 anim">
        <h2 className="text-sm text-primary">JKT</h2>
        <p className="text-sm text-foreground/60 min-w-[50px] min-h-[20px]">
          {currentTime || <Skeleton />}
        </p>
      </div>

      <div className="hidden md:flex items-center text-xl ml-auto gap-x-6 font-medium">
        {navList.map((nav, index) => (
          <Link
            key={index}
            href={nav.path}
            className={`flex flex-col items-start relative anim group hover:text-foreground ${
              pathname === nav.path ||
              (pathname.includes("/blog/") && nav.path.startsWith("/blog"))
                ? "text-foreground"
                : "text-foreground/60"
            }`}
          >
            {nav.name}
            <div
              className={`group-hover:w-1/2 group-hover:h-[2px] anim bg-foreground rounded-full absolute bottom-0 translate-y-[4px] ${
                pathname === nav.path ||
                (pathname.includes("/blog/") && nav.path.startsWith("/blog"))
                  ? "w-1/2 h-[2px]"
                  : "w-0 h-0"
              }`}
            />
          </Link>
        ))}
      </div>
    </>
  );
};
export default NavItem;
