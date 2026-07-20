import { CheckMarkIcon } from "@/shared/icons/CheckMarkIcon";
import { AccountButton } from "@/components/AccountButton";
import { TransactionsCard } from "@/components/TransactionsCard";
import { USDIcon } from "@/shared/icons/USDIcon";
import { EURIcon } from "@/shared/icons/EURIcon";
import { BTCIcon } from "@/shared/icons/BTCIcon";
import { ETHIcon } from "@/shared/icons/ETHIcon";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center pt-12.5 md:items-baseline md:flex-row md:justify-between xl:pt-22.5 2xl:pt-38.25">
      <div className="flex flex-col items-center h-auto md:items-baseline sm:w-124.5 md:w-auto md:pr-5 lg:w-142.5 xl:w-162.5 desktop:w-200">
        <div className="flex justify-between gap-1 pb-5 2xl:gap-1.5 md:pl-2.5 xl:pl-3.5 md:pb-6 xl:pb-7.5">
          <CheckMarkIcon />
          <span className="font-lexend font-light text-white-absolute text-[14px] 2xl:text-lg">
            No LLC Required, No Credit Check.
          </span>
        </div>
        <section className="text-center md:text-left">
          <h1 className="font-lexend font-medium text-white-absolute text-[28px] pb-2 md:pb-2.5 xl:pb-3.5 xl:text-[38px] 2xl:text-[48px]">
            Welcome to YourBank Empowering Your{" "}
            <span className="font-lexend font-medium text-primary-600 text-[28px] xl:text-[38px] 2xl:text-[48px]">
              Financial Journey
            </span>
          </h1>
          <p className="font-lexend font-light text-white-absolute text-[14px] pb-7.5 xl:pb-10 2xl:pb-12.5 md:text-[16px] 2xl:text-lg">
            At YourBank, our mission is to provide comprehensive banking
            solutions that empower individuals and businesses to achieve their
            financial goals. We are committed to delivering personalized and
            innovative services that prioritize our customers&apos; needs.
          </p>
        </section>
        <AccountButton margin="mb-20 md:mb-0" />
      </div>
      <div>
        <TransactionsCard />
        <div className="relative flex justify-end items-center -right-10 md:-right-11.25 xl:-right-16.25 2xl:-right-32.5">
          <div className="flex items-center bg-[#22251B] w-[219.57px] h-auto pl-[12.31px] pr-[5.13px] py-[5.13px] rounded-[41.2px] shadow-[0_4px_4px_rgba(0,0,0,0.25)] xl:rounded-[55.09px] 2xl:rounded-[69.36px] xl:pl-[16.53px] xl:pr-[6.89px] xl:py-[6.89px] 2xl:pl-[20.81px] 2xl:pr-[8.67px] 2xl:py-[8.67px] xl:w-[294.87px] 2xl:w-[370.2px] md:shadow-none">
            <span
              aria-hidden="true"
              className="font-lexend text-white-absolute text-[9.23px] xl:text-[12.4px] 2xl:text-[15.61px]"
            >
              Supported Currency
            </span>
            <span className="sr-only">
              Supported currencies: US dollar, euro, bitcoin, ethereum
            </span>
            <div className="flex justify-around items-center bg-grey-100 w-[104.84px] h-[30.71px] p-[5.13px] ml-[6.3px] rounded-[28.2px] xl:ml-[9.66px] 2xl:ml-[10.87px] xl:w-[140.79px] 2xl:w-[176.88px] xl:h-[41.24px] 2xl:h-[52.02px] xl:p-[6.89px] 2xl:p-[8.67px] xl:rounded-[37.88px] 2xl:rounded-[47.69px]">
              <USDIcon />
              <EURIcon />
              <BTCIcon />
              <ETHIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
