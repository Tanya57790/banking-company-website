"use client";

import Link from "next/link";
import { login, navLinks } from "./data";

type Variant = "header" | "footer" | "mobileMenu";

interface NavProps {
  variant: Variant;
  isMobileMenu?: boolean;
}

const Nav = ({ variant, isMobileMenu }: NavProps) => {
  return (
    <ul
      className={`${
        variant === "header"
          ? "hidden md:flex items-center justify-between w-auto"
          : ""
      }  ${
        variant === "footer"
          ? "flex items-center justify-between w-auto pt-6 xl:pt-10 2xl:pt-12.5"
          : ""
      } ${
        variant === "mobileMenu" ? "flex flex-col w-full pt-18 pl-10.5" : ""
      }`}
    >
      {navLinks.map((link) => (
        <li key={link.id}>
          <Link
            href={link.href}
            className={`flex items-center font-lexend text-sm 2xl:text-lg text-white-absolute transition-all duration-200 ease-in-out  ${
              variant === "header"
                ? "justify-center md:h-10.25 2xl:h-12.75 mx-0.75 xl:mx-1.5 2xl:mx-1.75 md:px-2.5 lg:px-4.5 2xl:px-5 md:hover:bg-grey-150 hover:rounded-[82px]"
                : ""
            } ${
              variant === "footer"
                ? "justify-center mx-3.5 2xl:mx-6.5 hover:text-primary-600 active:text-primary-700"
                : ""
            } ${
              variant === "mobileMenu"
                ? "w-19.5 h-10.25 mb-3.75 hover:text-primary-600 active:text-primary-700"
                : ""
            }`}
          >
            {link.name}
          </Link>
        </li>
      ))}
      {isMobileMenu && (
        <>
          <li>
            <Link
              href="/auth/register/"
              className="flex items-center justify-center font-lexend text-sm text-white-absolute w-21.75 h-10.25 mb-2.75 bg-grey-200 rounded-[82px] hover:bg-grey-150 transition-all duration-200 ease-in-out"
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
    </ul>
  );
};

export default Nav;
