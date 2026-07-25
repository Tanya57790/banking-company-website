"use client";

import { Menu, MobileMenu } from "@/components/Menu";

const Header = () => {
  return (
    <header className="relative w-full mt-10 xl:mt-7.5 2xl:mt-12.5 z-10 border border-grey-150 bg-grey-110 rounded-[100px]">
      <nav
        role="navigation"
        className="flex items-center justify-between mx-auto max-w-none w-full py-3.5 pr-3.5 pl-6 h-17 md:h-auto"
      >
        <Menu />
        <MobileMenu />
      </nav>
    </header>
  );
};

export default Header;
