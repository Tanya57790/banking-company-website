import { type NavStyleProps } from "./types";

export const ulStyle: NavStyleProps = {
  header: "hidden md:flex items-center justify-between w-auto",
  mobileMenu: "flex flex-col w-full pt-18 pl-10.5",
  footer:
    "flex flex-wrap gap-[10px_5px] items-center justify-around w-auto pt-6 xl:pt-10 2xl:pt-12.5",
};

export const liStyle: NavStyleProps = {
  header:
    "justify-center md:h-10.25 2xl:h-12.75 mx-0.75 xl:mx-1.5 2xl:mx-1.75 md:px-2.5 lg:px-4.5 2xl:px-5 md:hover:bg-grey-150 rounded-[82px]",
  mobileMenu:
    "w-19.5 h-10.25 mb-3.75 hover:text-primary-600 active:text-primary-700",
  footer:
    "justify-center mx-2.5 xs:mx-3.5 2xl:mx-6.5 hover:text-primary-600 active:text-primary-700",
};
