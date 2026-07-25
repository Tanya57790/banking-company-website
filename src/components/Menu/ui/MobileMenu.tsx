"use client";

import { useEffect, useState } from "react";
import { Nav } from "@/components/Nav";
import { Logo } from "@/shared/icons/Logo";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handler = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", isOpen);
    return () => document.body.classList.remove("overflow-hidden");
  }, [isOpen]);

  return (
    <div className="flex md:hidden items-center justify-between mx-auto max-w-none w-full">
      <Logo variant="header" />
      <button
        type="button"
        onClick={handler}
        aria-expanded={isOpen}
        aria-label="Toggle menu"
        className={`relative cursor-pointer rounded-[82px] md:hidden ${
          isOpen
            ? `bg-transparent z-100`
            : `flex justify-center items-center w-14 h-10 bg-primary-600 hover:bg-primary-800 active:bg-primary-600 transition-all duration-200 ease-in-out rounded-[82px]`
        }`}
      >
        <span
          className={`${
            isOpen
              ? "opacity-100 transition-opacity duration-1000"
              : "opacity-0 absolute"
          } text-white-absolute`}
        >
          X
        </span>
        <span
          className={`${
            isOpen
              ? "opacity-0"
              : "opacity-100 absolute transition-opacity duration-400"
          }`}
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
        </span>
      </button>
      <div
        data-testid="overlay"
        className={`fixed inset-0 bg-black/50 z-40 md:hidden transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={handler}
      />
      <div
        id="mobile-menu-panel"
        className={`fixed top-0 right-0 h-screen w-60 bg-grey-100/80 z-50 md:hidden p-5 shadow-lg transform transition-all duration-300 ${
          isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        }`}
      >
        <Nav variant="mobileMenu" isMobileMenu />
      </div>
    </div>
  );
};

export default MobileMenu;
