"use client";

import { navList } from "@/utils/constants/navlink";
import Link from "next/link";
import { useState } from "react";

const MenuBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    if (isOpen) {
      setIsOpen(false);
      document.body.style.overflow = "unset";
    } else {
      setIsOpen(true);
      document.body.style.overflow = "hidden";
    }
  };

  return (
    <>
      <div
        onClick={toggleMenu}
        className="flex md:hidden z-50 flex-col w-[32px] h-[32px] items-center justify-center gap-y-2 ml-auto cursor-pointer group"
      >
        <div
          className={`w-full h-[2px] bg-foreground anim ${
            isOpen
              ? "rotate-45 translate-y-[5px] bg-red-500 h-[3px]"
              : ""
          }`}
        />
        <div
          className={`w-1/2 group-hover:w-full h-[2px] bg-foreground anim ml-auto ${
            isOpen ? "-rotate-45 -translate-y-[5px] bg-red-500 h-[3px] w-full ml-0" : ""
          }`}
        />
      </div>
      <div
        className={`w-full min-h-screen absolute top-0 left-0 bg-foreground text-background z-40 transition-all ease-in-out duration-500 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <Link
          href={"/"}
          aria-label="Pixel Joy"
          onClick={toggleMenu}
          className="w-fit flex items-start md:items-center gap-x-1 group peer cursor-pointer z-30 pad-x py-8"
        >
          <h1 className="text-xl md:text-2xl uppercase z-10 leading-none md:leading-normal">
            Pixel
          </h1>
          <h1 className="font-semibold text-xl md:text-2xl uppercase md:-translate-x-14 group-hover:translate-x-0 md:anim leading-none md:leading-normal">
            Joy
          </h1>
        </Link>
        <div className="flex flex-col items-start justify-center gap-y-2 pad-x">
          {navList.map((nav, index) => (
            <Link
              key={index}
              href={nav.path}
              onClick={toggleMenu}
              aria-label={nav.name}
              className="flex gap-x-6 items-center"
            >
              {nav.icon}
              <span className="font-medium text-2xl uppercase anim">
                {nav.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default MenuBar;
