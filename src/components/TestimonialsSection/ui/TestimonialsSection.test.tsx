import { afterEach, describe } from "vitest";
import { cleanup } from "@testing-library/react";
import TestimonalsSection from "./TestimonialsSection";
import { runToggleSectionTests } from "@/tests/helpers/runToggleSectionTests";

afterEach(() => {
  cleanup();
});

describe("TestimonalsSection", () => {
  runToggleSectionTests(
    () => <TestimonalsSection />,
    /for individuals/i,
    /for businesses/i,
    /yourbank has been my trusted/i,
    /yourbank helped me set up/i
  );
});
