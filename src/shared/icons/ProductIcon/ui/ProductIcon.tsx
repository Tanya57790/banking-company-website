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

  return Svg ? <Svg /> : null;
};

export default ProductIcon;
