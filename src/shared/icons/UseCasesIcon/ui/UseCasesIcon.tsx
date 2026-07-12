import { MoneyIcon } from "../../MoneyIcon";
import { StartupsIcon } from "../../StartupsIcon";
import { SaveMoneyIcon } from "../../SaveMoneyIcon";
import { PaymentIcon } from "../../PaymentIcon";
import { FinanceManagementIcon } from "../../FinanceManagementIcon";
import { HomeOwnershipIcon } from "../../HomeOwnershipIcon";
import { EducationFundingIcon } from "../../EducationFundingIcon";
import { BusinessExpansionIcon } from "../../BusinessExpansionIcon";

type UseCasesIconVariant =
  | "financeManagement"
  | "startups"
  | "money"
  | "saveMoney"
  | "homeownership"
  | "educationFunding"
  | "businessExpansion"
  | "payment";

interface UseCasesIconProps {
  variant: UseCasesIconVariant;
}

const icon = {
  financeManagement: FinanceManagementIcon,
  startups: StartupsIcon,
  money: MoneyIcon,
  saveMoney: SaveMoneyIcon,
  homeownership: HomeOwnershipIcon,
  educationFunding: EducationFundingIcon,
  businessExpansion: BusinessExpansionIcon,
  payment: PaymentIcon,
};

const UseCasesIcon = ({ variant }: UseCasesIconProps) => {
  const Svg = icon[variant];

  if (!Svg) return null;

  if (variant === "money") {
    return <Svg size={{ mobile: 6, desktop: 7.5 }} />;
  }

  return <Svg />;
};

export default UseCasesIcon;
