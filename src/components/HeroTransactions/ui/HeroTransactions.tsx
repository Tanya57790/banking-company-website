import { ArrowsIcon } from "@/components/ArrowsIcon";

const HeroTransactions = () => {
  return (
    <div className="relative flex flex-col items-center z-10">
      <div className="relative top-0 flex justify-between items-center w-46.25 h-11.5 xs:w-66.25 sm:w-76.25 md:w-68.25 xl:w-88.75 xl:h-15.5 2xl:w-111.5 2xl:h-19.25 px-3.25 py-2 xl:px-4.25 xl:py-2.75 2xl:px-5.25 2xl:py-3.5 rounded-md xl:rounded-lg 2xl:rounded-[10px] bg-grey-110">
        <div className="flex items-center justify-center">
          <div className="flex items-center justify-center bg-primary-600 size-5.75 p-1.25 xl:p-1.75 2xl:p-2.25 xl:size-7.5 2xl:size-9.5 rounded-[28px] xl:rounded-[37px] 2xl:rounded-[46px]">
            <ArrowsIcon />
          </div>
          <div className="flex flex-col pl-1.25 xl:pl-1.75 2xl:pl-2.25">
            <span className="font-lexend font-light text-white-absolute text-[9px] xl:text-[12px] 2xl:text-[16px]">
              Transaction
            </span>
            <span className="text-white-absolute text-[10.26px] xl:text-[14px] 2xl:text-[17px]">
              Joel Kenley
            </span>
          </div>
        </div>
        <span className="font-lexend font-medium text-white-absolute text-[12px] xl:text-[17px] 2xl:text-[21px]">
          -$68.00
        </span>
      </div>
      <div className="relative -top-3.75 xl:-top-5 2xl:-top-6.25 opacity-80 -z-10 flex justify-between items-center w-41 h-11.5 xs:w-61 sm:w-71 md:w-63 xl:w-81.75 xl:h-15.5 2xl:w-102.75 2xl:h-19.25 px-3.25 py-2 xl:px-4.25 xl:py-2.75 2xl:px-5.25 2xl:py-3.5 rounded-md xl:rounded-lg 2xl:rounded-[10px] bg-grey-110 shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
        <div className="flex items-center justify-center">
          <div className="flex items-center justify-center bg-primary-600 size-5.75 p-1.25 xl:p-1.75 2xl:p-2.25 xl:size-7.5 2xl:size-9.5 rounded-[28px] xl:rounded-[37px] 2xl:rounded-[46px]">
            <ArrowsIcon />
          </div>
          <div className="flex flex-col pl-1.25 xl:pl-1.75 2xl:pl-2.25">
            <span className="font-lexend font-light text-white-absolute text-[9px] xl:text-[12px] 2xl:text-[16px]">
              Transaction
            </span>
            <span className="text-white-absolute text-[10.26px] xl:text-[14px] 2xl:text-[17px]">
              Mark Smith
            </span>
          </div>
        </div>
        <span className="font-lexend font-medium text-white-absolute text-[12px] xl:text-[17px] 2xl:text-[21px]">
          -$68.00
        </span>
      </div>
      <div className="relative -top-7.5 xl:-top-10 2xl:-top-12.5 opacity-40 -z-20 flex justify-between items-center w-35.75 h-11.5 xs:w-55.75 sm:w-65.75 md:w-57.75 xl:w-75 xl:h-15.5 2xl:w-94 2xl:h-19.25 px-3.25 py-2 xl:px-4.25 xl:py-2.75 2xl:px-5.25 2xl:py-3.5 rounded-md xl:rounded-lg 2xl:rounded-[10px] bg-grey-110 shadow-[0_4px_4px_rgba(0,0,0,0.40)]">
        <div className="flex items-center justify-center">
          <div className="flex items-center justify-center bg-primary-600 size-5.75 p-1.25 xl:p-1.75 2xl:p-2.25 xl:size-7.5 2xl:size-9.5 rounded-[28px] xl:rounded-[37px] 2xl:rounded-[46px]">
            <ArrowsIcon />
          </div>
          <div className="flex flex-col pl-1.25 xl:pl-1.75 2xl:pl-2.25">
            <span className="font-lexend font-light text-white-absolute text-[9px] xl:text-[12px] 2xl:text-[16px]">
              Transaction
            </span>
            <span className="text-white-absolute text-[10.26px] xl:text-[14px] 2xl:text-[17px]">
              Lenen Roy
            </span>
          </div>
        </div>
        <span className="font-lexend font-medium text-white-absolute text-[12px] xl:text-[17px] 2xl:text-[21px]">
          -$68.00
        </span>
      </div>
    </div>
  );
};

export default HeroTransactions;
