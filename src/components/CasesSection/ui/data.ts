export const cases = [
  {
    id: 1,
    card: "individuals",
    title: "For Individuals",
    text: [
      "For individuals, our mortgage services pave the way to homeownership, ",
      "and our flexible personal loans provide vital support during various ",
      "life milestones. We also prioritize retirement planning, ",
      "ensuring a financially secure future for our customers",
    ],
    result: [
      { id: 1, value: "78%", label: "Secure Retirement Planning" },
      { id: 2, value: "63%", label: "Manageable Debt Consolidation" },
      { id: 3, value: "91%", label: "Reducing financial burdens" },
    ],
    link: {
      text: "Learn More",
      href: "#individuals",
    },
  },
  {
    id: 2,
    card: "business",
    title: "For Business",
    text: [
      "For businesses, we empower growth with working capital solutions ",
      "that optimize cash flow, and our tailored financing options ",
      "fuel business expansion. Whatever your financial aspirations, ",
      "YourBank is committed to providing the right tools and support to achieve them",
    ],
    result: [
      { id: 1, value: "65%", label: "Cash Flow Management" },
      { id: 2, value: "70%", label: "Drive Business Expansion" },
      { id: 3, value: "45%", label: "Streamline payroll processing" },
    ],
    link: {
      text: "Learn More",
      href: "#business",
    },
  },
] as const;
