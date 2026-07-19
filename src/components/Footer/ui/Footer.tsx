import Link from "next/link";
import { Logo } from "@/shared/icons/Logo";
import { Nav } from "@/components/Nav";
import { EmailIcon } from "@/shared/icons/EmailIcon";
import { PhoneIcon } from "@/shared/icons/PhoneIcon";
import { MarkIcon } from "@/shared/icons/MarkIcon";
import { FacebookIcon } from "@/shared/icons/FacebookIcon";
import { XIcon } from "@/shared/icons/XIcon";
import { InstagramIcon } from "@/shared/icons/InstagramIcon";

const Footer = () => {
  return (
    <footer className="mt-20 xl:mt-30 2xl:mt-37.5">
      <div className="absolute h-[stretch] w-full bg-grey-110 -mx-4 md:-mx-14 xl:-mx-20 2xl:-mx-40.5 -z-10" />
      <div className="relative m-auto h-125.75 md:h-110 2xl:h-144.5 pt-12.5 pb-7.5 xl:pt-15 2xl:pt-25 2xl:pb-12.5">
        <div className="flex flex-wrap items-center justify-center flex-col">
          <Logo variant="footer" />
          <Nav variant="footer" />
        </div>
        <div className="flex flex-wrap gap-5 justify-center py-20">
          <div className="flex items-center">
            <EmailIcon />
            <Link
              href="mailto:hello@skillbirdge.com"
              className="font-lexend text-sm 2xl:text-lg text-white-absolute pl-1.5 hover:text-primary-600 active:text-primary-700 transition-all duration-200 ease-in-out"
            >
              hello@skillbirdge.com
            </Link>
          </div>
          <div className="flex items-center">
            <PhoneIcon />
            <Link
              href="tel:+9191813232309"
              className="font-lexend text-sm 2xl:text-lg text-white-absolute pl-1.5 hover:text-primary-600 active:text-primary-700 transition-all duration-200 ease-in-out"
            >
              +91 91813 23 2309
            </Link>
          </div>
          <div className="flex items-center">
            <MarkIcon />
            <p className="font-lexend text-sm 2xl:text-lg text-white-absolute pl-1.5">
              Somewhere in the World
            </p>
          </div>
        </div>
        <div className="flex justify-center h-35.5 bg-grey-100 pb-7.5 rounded-xl md:p-0 md:h-auto md:rounded-[100px]">
          <div className="relative w-85.5 flex flex-wrap justify-center items-center -top-5 md:p-[12px_24px_12px_12px] md:top-[unset] md:w-full md:justify-between">
            <div className="flex justify-between w-37">
              <Link
                href="#facebook"
                aria-label="Visit our Facebook profile"
                className="flex justify-center items-center w-11 h-11 bg-primary-600 hover:bg-primary-700 active:bg-primary-600 transition-all duration-200 ease-in-out rounded-[100px]"
              >
                <FacebookIcon variant="footer" />
              </Link>
              <Link
                href="#x"
                aria-label="Visit our X profile"
                className="flex justify-center items-center w-11 h-11 bg-primary-600 hover:bg-primary-700 active:bg-primary-600 transition-all duration-200 ease-in-out rounded-[100px]"
              >
                <XIcon />
              </Link>
              <Link
                href="#instagram"
                aria-label="Visit our Instagram profile"
                className="flex justify-center items-center w-11 h-11 bg-primary-600 hover:bg-primary-700 active:bg-primary-600 transition-all duration-200 ease-in-out rounded-[100px]"
              >
                <InstagramIcon />
              </Link>
            </div>
            <p className="font-lexend font-light text-sm 2xl:text-lg text-white-absolute pt-6.5 pb-5 md:p-0">
              YourBank All Rights Reserved
            </p>
            <div className="flex">
              <Link
                href="#privacy-policy"
                className="font-lexend font-light text-sm 2xl:text-lg text-white-absolute hover:text-primary-600 active:text-primary-700 transition-all duration-200 ease-in-out"
              >
                Privacy Policy
              </Link>
              <hr className="h-auto w-0 mx-2 border-white border border-r-0 border-t-0 border-b-0" />
              <Link
                href="#terms-of-service"
                className="font-lexend font-light text-sm 2xl:text-lg text-white-absolute hover:text-primary-600 active:text-primary-700 transition-all duration-200 ease-in-out"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
