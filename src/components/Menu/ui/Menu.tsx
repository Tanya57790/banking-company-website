"use client";

import Link from "next/link";
import { Logo } from "@/shared/icons/Logo";
import { ProfileIcon } from "@/shared/icons/ProfileIcon";
import { Nav } from "@/components/Nav";
import { login } from "@/components/Nav/ui/data";
import { useSession } from "@/lib/auth-client";

const Menu = () => {
  const { data: session } = useSession();

  return (
    <div className="hidden md:flex items-center justify-between mx-auto max-w-none w-full">
      <Logo variant="header" />
      <Nav variant="header" />
      <div className="hidden md:flex items-center justify-between w-max">
        {session ? (
          <Link
            href="/account"
            className="flex items-center font-lexend text-sm 2xl:text-lg text-white-absolute transition-all duration-200 ease-in-out justify-center md:h-10.25 2xl:h-12.75 mx-0.75 xl:mx-1.5 2xl:mx-1.75 md:px-2.5 hover:bg-grey-150 rounded-[82px]"
          >
            <ProfileIcon />
          </Link>
        ) : (
          <>
            <Link
              href="/auth/register"
              className="flex items-center justify-center font-lexend text-sm 2xl:text-lg text-white-absolute w-21.75 md:mr-2.75 md:w-19.5 2xl:mr-3.25 h-10.25 hover:bg-grey-150 hover:rounded-[82px] transition-all duration-200 ease-in-out"
            >
              Sign Up
            </Link>
            <Link href={login.href} className={login.className}>
              {login.name}
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Menu;
