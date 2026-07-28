import { afterEach, describe } from "vitest";
import { cleanup } from "@testing-library/react";
import ProductsSection from "./ProductsSection";
import { runToggleSectionTests } from "@/tests/helpers/runToggleSectionTests";

afterEach(() => {
  cleanup();
});

describe("ProductsSection", () => {
  runToggleSectionTests(
    () => <ProductsSection />,
    /for individuals/i,
    /for businesses/i,
    /enjoy easy and convenient/i,
    /manage day-to-day operations/i
  );
});
