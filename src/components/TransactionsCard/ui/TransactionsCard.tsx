import Image from "next/image";
import { FlagIcon } from "@/shared/icons/FlagIcon";
import { HeroTransactions } from "@/components/HeroTransactions";
import { PlusIcon } from "@/shared/icons/PlusIcon";
import { CornersGlow } from "@/components/CornersGlow";
import abstract from "@/assets/images/abstract-bg.png";
import abstractArrow from "@/assets/images/arrow-home_d.png";

const TransactionsCard = () => {
  return (
    <div className="relative z-0 mb-[10.46px] xl:mb-[13.95px] 2xl:mb-[12.52px]">
      <div className="absolute top-[-18.57px] -right-10 w-53.75 h-50.25 -z-10 xl:top-[-30.34px] xl:right-[-58.34px] 2xl:top-[-20.35px] 2xl:right-[-120.69px] desktop:top-2.5 desktop:-right-16.25 xl:w-75 xl:h-68.75 2xl:w-104.5 2xl:h-95.75">
        <Image
          src={abstractArrow}
          fill
          sizes="(min-width: 320px) 215px, (min-width: 1280px) 300px, (min-width: 1536px) 418px"
          priority
          className="w-full h-full"
          alt=""
        />
      </div>
      <div className="relative w-auto h-auto p-5.25 box-content border border-grey-150 rounded-md shadow-[0_4px_4px_rgba(0,0,0,0.25)] md:shadow-none 2xl:w-128.75 xl:p-7 2xl:p-8.75 desktop:-left-25">
        <CornersGlow />
        <Image
          src={abstract}
          width={516}
          height={625}
          priority
          className="absolute inset-0 z-2 h-full w-full"
          alt=""
        />
        <div className="absolute flex justify-center items-center w-27.75 h-11 z-20 bg-[#22251B] rounded-[6.15px] shadow-[0_4px_4px_rgba(0,0,0,0.25)] top-[-25.57px] -left-9 xl:top-[-34.34px] xl:left-[-48.34px] 2xl:top-[-43.35px] 2xl:left-[-60.69px] xl:rounded-[8.26px] 2xl:rounded-[10.4px] xl:w-37.5 xl:h-15.25 2xl:w-47.25 2xl:h-19">
          <div className="flex justify-center items-center w-[22.6px] h-[22.53px] xl:w-[30.35px] xl:h-[30.26px] 2xl:w-[38.15px] 2xl:h-[38.15px] bg-primary-600 rounded-[27px]">
            <PlusIcon />
          </div>
          <div className="flex flex-col pl-[5.13px] xl:pl-[6.89px] 2xl:pl-[8.67px]">
            <span className="font-lexend text-white-absolute text-[10.26px] xl:text-[13.77px] 2xl:text-[17.34px]">
              + $5000,00
            </span>
            <span className="font-lexend font-light text-white-absolute text-[8.2px] xl:text-[11.02px] 2xl:text-[13.87px]">
              Monthly Income
            </span>
          </div>
        </div>
        <div className="relative pb-4 z-10 xl:pb-5.25 2xl:pb-6.5">
          <h2 className="font-lexend font-medium text-white-absolute text-[10.26px] pb-2.75 xl:text-[14px] 2xl:text-lg 2xl:pb-4.5">
            Your Transactions
          </h2>
          <HeroTransactions />
        </div>
        <div className="relative pb-3.75 z-10 xl:pb-5 2xl:pb-6.25">
          <h2 className="font-lexend font-medium text-white-absolute text-[10.26px] pb-3.5 xl:text-[14px] 2xl:text-lg 2xl:pb-4.5">
            Money Exchange
          </h2>
          <div className="flex bg-grey-110 rounded-md">
            <div className="grid grid-cols-2 w-full h-auto">
              <div className="p-2.75 xl:p-3.5 2xl:p-4.5">
                <div className="flex items-center pb-1.25">
                  <FlagIcon variant="India" />
                  <span className="font-lexend text-white-absolute  pl-1.25 text-[9px] xl:text-[12px] 2xl:text-[16px]">
                    INR
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="font-lexend font-light text-white-absolute text-[8px] xl:text-[11px] 2xl:text-[14px]">
                    Indian Rupees
                  </span>
                </div>
              </div>
              <div className="p-2.75">
                <div className="flex items-center pb-1.25">
                  <FlagIcon variant="USA" />
                  <span className="font-lexend text-white-absolute text-[9px] pl-1.25 xl:text-[12px] 2xl:text-[16px]">
                    USD
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="font-lexend font-light text-white-absolute text-[8px] xl:text-[11px] 2xl:text-[14px] ">
                    United State Dollar
                  </span>
                </div>
              </div>
              <span className="font-lexend font-medium text-white-absolute text-[10.26px] py-4 px-2.75 xl:text-[14px] 2xl:text-[17px]">
                5,0000
              </span>
              <span className="font-lexend font-medium text-white-absolute text-[10.26px] py-4 px-2.75 xl:text-[14px] 2xl:text-[17px]">
                12.00
              </span>
            </div>
          </div>
        </div>
        <button className="relative font-lexend bg-[#22251B] z-10 w-full h-7.75 cursor-pointer text-primary-650 text-[9.23px] rounded-[42px] scale-100 hover:shadow-[0_0_8px_rgba(0,0,0,0.25)] hover:scale-105 active:shadow-none active:scale-100 transition-all duration-200 ease-in-out xl:h-10.25 2xl:h-12.75 xl:text-[12.4px] 2xl:text-[15.61px]">
          Exchange
        </button>
      </div>
    </div>
  );
};

export default TransactionsCard;
