"use client";

import Image from "next/image";
import { AccountButton } from "@/components/AccountButton";
import abstract from "@/assets/images/abstract-home-4_d.png";
import abstractBg from "@/assets/images/abstract-home-bg.png";
import { authClient } from "@/lib/auth-client";

const CTASection = () => {
  const { data: session } = authClient.useSession();

  return (
    <div className="relative m-auto h-auto w-full bg-grey-110 border border-grey-150 rounded-[20px] p-7.5 xs:w-89.5 md:w-140 md:p-9 lg:w-full lg:p-15 2xl:p-20">
      <div className="absolute inset-0 z-1 bg-grey-110 rounded-[20px] h-full w-full xl:w-102.75 2xl:w-[585.2px]" />
      <div className="absolute inset-0 z-5 h-full w-full rounded-[20px] bg-linear-to-r from-transparent to-grey-110 from-0% to-60% xl:from-70% xl:to-100% xl:w-102.75 2xl:w-[585.2px]" />
      <div className="absolute -top-px -left-px opacity-20 h-full w-full bg-linear-to-tl from-transparent from-92% to-primary-600 to-100% rounded-[20px]" />
      <Image
        src={abstractBg}
        width={288}
        height={283}
        className="absolute top-0 left-0 rounded-[20px] z-4 h-full w-89.5 2xl:w-72"
        alt=""
      />
      <div className="absolute top-0 left-0 w-max h-auto z-5">
        <Image
          src={abstract}
          sizes="(max-width: 1279px) 151px, (max-width: 1535px) 202px, (min-width: 1536px) 298px"
          className="h-35.75 w-37.75 rounded-[20px] mask-r-from-90% mask-r-to-100% mask-b-from-50% mask-b-to-90% mask-radial-at-bottom-right mask-radial-from-70% mask-radial-to-100% xl:h-48 xl:w-50.5 2xl:h-70.75 2xl:w-74.5"
          alt=""
        />
      </div>
      <div className="relative flex flex-col items-center z-7 lg:flex-row lg:justify-between">
        <section className="text-center mb-6 lg:mb-0 lg:text-left lg:w-150 xl:w-200 2xl:w-208.5 desktop:w-275.75">
          <h2 className="font-lexend font-medium text-white-absolute pb-2.5 text-[24px] xl:text-[30px] 2xl:text-[40px]">
            Start your financial journey with{" "}
            <span className="text-primary-600">YourBank today!</span>
          </h2>
          <p className="font-lexend font-light text-grey-750 text-sm xl:text-[16px] 2xl:text-lg">
            Lorem ipsum dolor sit amet consectetur. Blandit odio semper risus
            pellentesque elit. Pellentesque eget ut imperdiet nulla penatibus.
            Nascetur viverra arcu sed amet cursus purus.
          </p>
        </section>
        <AccountButton session={session} />
      </div>
    </div>
  );
};

export default CTASection;
