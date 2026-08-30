import { type Variant, type NavStyleProps } from "./types";

export function getNavClasses(
  style: NavStyleProps,
  variant: Variant
): string | null {
  if (variant === "header") {
    return style.header;
  } else if (variant === "footer") {
    return style.footer;
  } else if (variant === "mobileMenu") {
    return style.mobileMenu;
  }

  return null;
}
