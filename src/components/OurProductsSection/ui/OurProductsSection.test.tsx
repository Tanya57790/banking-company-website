import { afterEach, describe } from "vitest";
import { cleanup } from "@testing-library/react";
import OurProductsSection from "./OurProductsSection";
import { runToggleSectionTests } from "@/tests/helpers/runToggleSectionTests";

afterEach(() => {
  cleanup();
});

describe("OurProductsSection", () => {
  runToggleSectionTests(
    () => <OurProductsSection />,
    /for individuals/i,
    /for businesses/i,
    /enjoy easy and convenient/i,
    /manage day-to-day operations/i
  );
});
