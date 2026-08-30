"use client";

import Link from "next/link";
import { login, navLinks } from "./data";
import { useSession } from "@/lib/auth-client";
import { ulStyle, liStyle } from "./styles";
import { getNavClasses } from "./getNavClasses";
import { type NavProps } from "./types";

const Nav = ({ variant, isMobileMenu }: NavProps) => {
  const { data: session } = useSession();

  return (
    <ul className={`${getNavClasses(ulStyle, variant)}`}>
      {navLinks.map((link) =>
        (variant === "header" || variant === "mobileMenu") &&
        link.name === "Credits" ? null : (
          <li key={link.id}>
            <Link
              href={link.href}
              className={`flex items-center font-lexend text-sm 2xl:text-lg text-white-absolute transition-all duration-200 ease-in-out ${getNavClasses(
                liStyle,
                variant
              )}`}
            >
              {link.name}
            </Link>
          </li>
        )
      )}
      {isMobileMenu && (
        <>
          {session ? (
            <>
              <Link
                href="/account"
                className="flex items-center font-lexend text-sm 2xl:text-lg text-white-absolute transition-all duration-200 ease-in-out w-19.5 h-10.25 mb-3.75 hover:text-primary-600 active:text-primary-700"
              >
                Account
              </Link>
            </>
          ) : (
            <>
              <li>
                <Link
                  href="/auth/register"
                  className="flex items-center justify-center font-lexend text-sm text-white-absolute w-21.75 h-10.25 mb-2.75 bg-grey-200 hover:bg-grey-150 transition-all duration-200 ease-in-out rounded-[82px]"
                >
                  Sign Up
                </Link>
              </li>
              <li>
                <Link href={login.href} className={login.className}>
                  {login.name}
                </Link>
              </li>
            </>
          )}
        </>
      )}
    </ul>
  );
};

export default Nav;
