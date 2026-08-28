import Link from "next/link";
import { FormBackground } from "@/components/FormBackground";

export default function Credits() {
  return (
    <FormBackground>
      <section className="relative text-center m-auto py-8 w-max z-2">
        <h1 className="font-lexend font-medium text-[28px] 2xl:text-[38px] text-primary-600 pb-2.5">
          Credits
        </h1>
        <p className="flex flex-col">
          <Link
            href="https://www.flaticon.com/ru/free-icon/user_1946429#"
            target="_blank"
            rel="noopener"
            title="Profile icon from Flaticon"
            className="font-lexend text-sm 2xl:text-lg pb-2 text-white-absolute hover:text-primary-600 active:text-primary-700 transition-all duration-200 ease-in-out"
          >
            Profile icon by Magnific - Flaticon
          </Link>
          <Link
            href="https://www.flaticon.com/ru/free-icon/twitter_5968958"
            target="_blank"
            rel="noopener"
            title="X icon from Flaticon"
            className="font-lexend text-sm 2xl:text-lg text-white-absolute hover:text-primary-600 active:text-primary-700 transition-all duration-200 ease-in-out"
          >
            X by Magnific - Flaticon
          </Link>
        </p>
      </section>
    </FormBackground>
  );
}
