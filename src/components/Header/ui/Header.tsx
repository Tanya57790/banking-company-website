"use client";

import { useEffect, useState } from "react";
import { Menu, MobileMenu } from "@/components/Menu";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handler = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", isOpen);
    return () => document.body.classList.remove("overflow-hidden");
  }, [isOpen]);

  return (
    <header className="relative w-full mt-10 xl:mt-7.5 2xl:mt-12.5 z-10 border border-grey-150 bg-grey-110 rounded-[100px]">
      <nav
        role="navigation"
        className="flex items-center justify-between py-3.5 pr-3.5 pl-6 mx-auto max-w-none w-full"
      >
        <Menu handler={handler} isOpen={isOpen} />
        <MobileMenu handler={handler} isOpen={isOpen} />
      </nav>
    </header>
  );
};

export default Header;
