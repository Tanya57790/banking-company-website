import Image from "next/image";
import flagIndia from "@/assets/images/flag-in.png";
import flagUs from "@/assets/images/flag-us.png";

type IconVariant = "India" | "USA";

interface IconProps {
  variant: IconVariant;
}

const FlagIcon = ({ variant }: IconProps) => {
  return (
    <>
      {variant === "India" ? (
        <Image
          src={flagIndia}
          width={35}
          height={35}
          priority
          className="size-5.25 xl:size-7 2xl:size-8.75"
          alt=""
        />
      ) : (
        <Image
          src={flagUs}
          width={35}
          height={35}
          priority
          className="size-5.25 xl:size-7 2xl:size-8.75"
          alt=""
        />
      )}
    </>
  );
};

export default FlagIcon;
