"use client";

import { useState, useEffect } from "react";

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
        className="flex md:hidden z-30 flex-col w-[32px] h-[32px] items-center justify-center gap-y-2 ml-auto cursor-pointer"
      >
        <div
          className={`w-full h-[2px] bg-foreground anim ${
            isOpen ? "rotate-45 translate-y-[5px] bg-red-500 h-[3px]" : ""
          }`}
        />
        <div
          className={`w-full h-[2px] bg-foreground anim ${
            isOpen ? "-rotate-45 -translate-y-[5px] bg-red-500 h-[3px]" : ""
          }`}
        />
      </div>
      <div
        className={`w-full min-h-screen absolute top-0 left-0 bg-foreground text-background z-20 transition-all ease-in-out duration-500 pt-20 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <h1 className="text-2xl font-medium uppercase text-center">Menu</h1>
      </div>
    </>
  );
};

export default MenuBar;
