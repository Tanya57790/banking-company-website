import Link from "next/link";
import { UseCasesCard } from "@/components/UseCasesCard";
import { cases } from "./data";

const UseCasesSection = () => {
  return (
    <div className="m-auto xs:w-89.5 sm:w-141 md:w-155 lg:w-auto mt-20 ">
      <div className="flex flex-col items-center justify-center lg:items-end lg:justify-between lg:flex-row lg:pr-1.5">
        <section className="text-center lg:text-left lg:w-full">
          <h2 className="font-lexend font-medium text-[28px] xl:text-[38px] 2xl:text-[48px] text-primary-600 pb-2.5">
            Use Cases
          </h2>
          <p className="font-light font-lexend text-sm xl:text-[16px] 2xl:text-lg text-grey-750">
            At YourBank, we cater to the diverse needs of individuals and
            businesses alike, offering a wide range of financial solutions
          </p>
        </section>
      </div>
      <div className="relative flex flex-col items-center">
        <div className="flex flex-col justify-center xl:justify-start">
          {cases.map((caseValue) => (
            <div
              key={caseValue.id}
              className="grid mt-15 2xl:mt-20 xl:grid-cols-[1fr_1fr] xl:gap-15 2xl:gap-25"
            >
              <UseCasesCard variant={caseValue.card} />
              <div
                className={
                  caseValue.card === "individuals" ? "" : "xl:-order-1"
                }
              >
                <section>
                  <h3 className="font-lexend text-center xl:text-left text-white-absolute text-[20px] 2xl:text-[24px] pt-5 md:pt-6 2xl:pt-7.5">
                    {caseValue.title}
                  </h3>
                  <p className="font-lexend font-light text-center xl:text-left text-grey-750 text-sm xl:text-[16px] desktop:text-lg pt-3 md:pt-4 2xl:pt-5">
                    {caseValue.text}
                  </p>
                </section>
                <div className="flex flex-col justify-between xl:flex-row">
                  {caseValue.result.map((caseResult) => (
                    <div
                      key={caseResult.id}
                      className="flex flex-col mt-12.5 2xl:mt-15.5 xl:w-34.25 2xl:w-45.75 "
                    >
                      <span className="font-lexend font-medium text-center xl:text-left text-primary-600 text-[40px] desktop:text-[58px]">
                        {caseResult.value}
                      </span>
                      <span className="font-lexend font-light text-center xl:text-left text-grey-750 text-sm xl:text-[16px] desktop:text-lg">
                        {caseResult.label}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="flex justify-center w-full xl:justify-start">
                  <Link
                    href={caseValue.link.href}
                    className="flex items-center justify-center font-lexend bg-grey-110 hover:bg-[#22251B] active:bg-grey-110 transition-all duration-200 ease-in-out text-white-absolute w-29.5 h-12.25 mt-12.5 rounded-[82px] xl:w-37 xl:h-15.75 text-sm xl:text-[16px] desktop:text-lg"
                  >
                    {caseValue.link.text}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UseCasesSection;
