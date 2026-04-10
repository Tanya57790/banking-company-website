"use client";

import Link from "next/link";
import { navLinks, login } from "./data";

type MobileMenuProps = {
  handler: () => void;
  isOpen: boolean;
};

const MobileMenu = ({ handler, isOpen }: MobileMenuProps) => {
  return (
    <>
      <div
        className={`fixed inset-0 bg-black/50 z-40 md:hidden transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={handler}
      />
      <div
        className={`fixed top-0 right-0 h-screen w-60 bg-grey-100/80 z-50 md:hidden p-5 shadow-lg transform transition-all duration-300 ${
          isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        }`}
      >
        <button
          name="close"
          className="absolute text-white-absolute right-6"
          onClick={handler}
        >
          X
        </button>
        <ul className="flex flex-col w-full pt-18 pl-10.5">
          {navLinks.map((link) => (
            <li key={link.id}>
              <Link
                href={link.href}
                className="flex w-19.5 h-10.25 font-lexend text-sm text-white-absolute hover:bg-grey-150 hover:rounded-[82px] transition-all duration-200 ease-in-out pb-3.75"
              >
                {link.name}
              </Link>
            </li>
          ))}
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
        </ul>
      </div>
    </>
  );
};

export default MobileMenu;
