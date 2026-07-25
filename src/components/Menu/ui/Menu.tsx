"use client";

import Link from "next/link";
import { Logo } from "@/shared/icons/Logo";
import { Nav } from "@/components/Nav";
import { login } from "@/components/Nav/ui/data";

const Menu = () => {
  return (
    <div className="hidden md:flex items-center justify-between mx-auto max-w-none w-full">
      <Logo variant="header" />
      <Nav variant="header" />
      <div className="hidden md:flex items-center justify-between w-43.25 lg:w-44 2xl:w-50">
        <Link
          href="/auth/register/"
          className="flex items-center justify-center font-lexend text-sm 2xl:text-lg text-white-absolute w-19.5 h-10.25 hover:bg-grey-150 hover:rounded-[82px] transition-all duration-200 ease-in-out"
        >
          Sign Up
        </Link>
        <Link href={login.href} className={login.className}>
          {login.name}
        </Link>
      </div>
    </div>
  );
};

export default Menu;
