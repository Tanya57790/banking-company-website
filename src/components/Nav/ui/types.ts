export type Variant = "header" | "footer" | "mobileMenu";

export interface NavProps {
  variant: Variant;
  isMobileMenu?: boolean;
}

export interface NavStyleProps {
  header: string;
  mobileMenu: string;
  footer: string;
}
