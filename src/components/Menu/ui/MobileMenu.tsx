"use client";

import { Nav } from "@/components/Nav";

type MobileMenuProps = {
  handler: () => void;
  isOpen: boolean;
};

const MobileMenu = ({ handler, isOpen }: MobileMenuProps) => {
  return (
    <>
      <div
        data-testid="overlay"
        className={`fixed inset-0 bg-black/50 z-40 md:hidden transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={handler}
      />
      <div
        id="mobile-menu"
        className={`fixed top-0 right-0 h-screen w-60 bg-grey-100/80 z-50 md:hidden p-5 shadow-lg transform transition-all duration-300 ${
          isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        }`}
      >
        <button
          type="button"
          onClick={handler}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label="Close menu"
          className="absolute cursor-pointer text-white-absolute right-6"
        >
          X
        </button>
        <Nav variant="mobileMenu" isMobileMenu />
      </div>
    </>
  );
};

export default MobileMenu;
