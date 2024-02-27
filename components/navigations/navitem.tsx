"use client";

import { useState, useEffect } from "react";

// Icons
import { BsTelephone, BsArrowRight } from "react-icons/bs";
import { IconType } from "react-icons/lib";

// Components
import SquareButton from "../buttons/squarebutton";

// Libs
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Link from "next/link";
import { navList } from "@/utils/constants/navlink";

const NavItem = () => {
  const [currentTime, setCurrentTime] = useState("");

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
      <div className="hidden md:flex items-center text-lg ml-auto gap-x-6 font-medium">
        {navList.map((nav, index) => (
          <Link
            key={index}
            href={nav.path}
            className="flex flex-col items-start relative anim group text-foreground/60 hover:text-foreground"
          >
            {nav.name}
            <div className="w-0 h-0 group-hover:w-1/2 group-hover:h-[2px] anim bg-primary rounded-full absolute bottom-0 translate-y-[4px]" />
          </Link>
        ))}
        <div className="flex items-center gap-x-3">
          <a href="#" className="anim">
            <SquareButton
              background="hover:bg-accent-foreground group bg-accent-foreground/90"
              foreground="text-primary-foreground"
            >
              <BsTelephone className="w-4 h-4 group-hover:scale-110 anim group-hover:rotate-12" />
            </SquareButton>
          </a>
          <a href="#" className="anim">
            <SquareButton
              background="hover:bg-primary group bg-primary/90"
              foreground="text-primary-foreground"
            >
              <BsArrowRight className="w-4 h-4 group-hover:scale-110 anim group-hover:-rotate-12" />
            </SquareButton>
          </a>
        </div>
      </div>
    </>
  );
};
export default NavItem;
