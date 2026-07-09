import { BriefcaseIcon } from "../../BriefcaseIcon";
import { BasketIcon } from "../../BasketIcon";
import { MoneyIcon } from "../../MoneyIcon";

type ProductIconVariant = "briefcase" | "basket" | "money";

interface ProductIconProps {
  variant: ProductIconVariant;
}

const icon = { briefcase: BriefcaseIcon, basket: BasketIcon, money: MoneyIcon };

const ProductIcon = ({ variant }: ProductIconProps) => {
  const Svg = icon[variant];

  if (!Svg) return null;

  if (variant === "briefcase" || variant === "money") {
    return <Svg size={{ mobile: 7, desktop: 8.5 }} />;
  }

  return <Svg />;
};

export default ProductIcon;
