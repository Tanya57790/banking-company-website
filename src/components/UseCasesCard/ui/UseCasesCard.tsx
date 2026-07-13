import Image from "next/image";
import { UseCasesIcon } from "@/shared/icons/UseCasesIcon";
import { individualsIcons, businessIcons } from "./data";
import abstract from "@/assets/images/abstract-home-2_d.png";

type UseCasesCardVariant = "individuals" | "business";

interface UseCasesCardProps {
  variant: UseCasesCardVariant;
}

const UseCasesCard = ({ variant }: UseCasesCardProps) => {
  const icons = variant === "individuals" ? individualsIcons : businessIcons;

  return (
    <div className="relative grid grid-cols-2 gap-2.5 w-full h-auto p-5 xl:p-10 2xl:p-12.5 2xl:gap-5 bg-grey-110 rounded-[20px]">
      {variant === "individuals" ? (
        <div className="absolute">
          <Image
            src={abstract}
            sizes="(max-width: 767px) 118px, (min-width: 1280px) 224px"
            className="w-29.5 -z-10 rounded-tl-[20px] xl:w-56 mask-r-from-95% mask-r-to-100% mask-b-from-85% mask-b-to-90% mask-radial-at-bottom-right mask-radial-from-80% mask-radial-to-100%"
            alt=""
          />
        </div>
      ) : (
        <div className="absolute xl:right-0">
          <Image
            src={abstract}
            sizes="(max-width: 767px) 118px, (min-width: 1280px) 224px"
            className="w-29.5 -z-10 rounded-tl-[20px] xl:w-56 xl:scale-x-[-1] mask-r-from-95% mask-r-to-100% mask-b-from-85% mask-b-to-90% mask-radial-at-bottom-right mask-radial-from-80% mask-radial-to-100%
            xl:mask-r-from-100% xl:mask-r-to-100% xl:mask-b-from-85% xl:mask-b-to-90% xl:mask-radial-at-bottom-right xl:mask-radial-from-80% xl:mask-radial-to-100%
            "
            alt=""
          />
        </div>
      )}
      {icons.map((icon) => (
        <div
          key={icon.id}
          className="grid justify-items-center px-3.5 py-5 bg-grey-100 rounded-xl z-10 xl:content-start xl:p-6 2xl:p-7.5 2xl:rounded-2xl"
        >
          <div className="flex justify-center items-center h-17 w-17 2xl:h-23.5 2xl:w-23.5 rounded-[50px] bg-linear-to-b from-primary-600/10 via-primary-600/5 to-transparent mask-b-from-80% mask-b-to-100%">
            <div className="flex justify-center items-center h-13 w-13 2xl:h-17.5 2xl:w-17.5 border border-primary-600/5 rounded-[50px] bg-linear-to-b from-primary-600/10 via-primary-600/5 to-transparent mask-b-from-65% mask-b-to-100% transition-all duration-200 ease-in-out">
              <UseCasesIcon variant={icon.name} />
            </div>
          </div>
          <span className="font-lexend text-center text-white-absolute text-sm xl:text-[16px] desktop:text-[20px] pt-3.5 2xl:pt-6">
            {icon.label}
          </span>
        </div>
      ))}
    </div>
  );
};

export default UseCasesCard;
