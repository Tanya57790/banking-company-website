export interface NavLink {
  id: number;
  name: string;
  href: string;
}

export const navLinks: NavLink[] = [
  { id: 1, name: "Home", href: "/" },
  { id: 2, name: "Careers", href: "/careers/" },
  { id: 3, name: "About", href: "/about/" },
  { id: 4, name: "Security", href: "/security/" },
  { id: 5, name: "Credits", href: "/credits/" },
];

export const login = {
  name: "Login",
  href: "/auth/login/",
  className: `
    font-lexend bg-primary-600 rounded-[100px] text-grey-110 text-sm 2xl:text-lg w-21.75 h-11.25 flex justify-center items-center border-0 2xl:w-[109px] 2xl:h-[55px]
    hover:bg-primary-800
    active:bg-primary-600
    transition-all duration-200 ease-in-out
  `,
};
