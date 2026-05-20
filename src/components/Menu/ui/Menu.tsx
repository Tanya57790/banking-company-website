"use client";

import Link from "next/link";
import { Logo } from "@/components/Logo";
import { Nav } from "@/components/Nav";
import { login } from "@/components/Nav/ui/data";

type MenuProps = {
  handler: () => void;
};

const Menu = ({ handler }: MenuProps) => {
  return (
    <>
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
      <button
        type="button"
        onClick={handler}
        aria-label="Open menu"
        className="flex justify-center items-center md:hidden w-14 h-10 bg-primary-600 hover:bg-primary-800 active:bg-primary-600 transition-all duration-200 ease-in-out rounded-[82px]"
      >
        <svg
          aria-hidden="true"
          width="22"
          height="15"
          viewBox="0 0 22 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0.5 1.375C0.5 0.891751 0.891751 0.5 1.375 0.5H20.625C21.1082 0.5 21.5 0.891751 21.5 1.375C21.5 1.85825 21.1082 2.25 20.625 2.25H1.375C0.891751 2.25 0.5 1.85825 0.5 1.375ZM0.5 7.5C0.5 7.01675 0.891751 6.625 1.375 6.625H20.625C21.1082 6.625 21.5 7.01675 21.5 7.5C21.5 7.98325 21.1082 8.375 20.625 8.375H1.375C0.891751 8.375 0.5 7.98325 0.5 7.5ZM10.125 13.625C10.125 13.1418 10.5168 12.75 11 12.75H20.625C21.1082 12.75 21.5 13.1418 21.5 13.625C21.5 14.1082 21.1082 14.5 20.625 14.5H11C10.5168 14.5 10.125 14.1082 10.125 13.625Z"
            fill="#333333"
            stroke="black"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </>
  );
};

export default Menu;
