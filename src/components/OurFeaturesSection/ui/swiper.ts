export const breakpoints = {
  320: {
    spaceBetween: 10,
  },
  390: {
    spaceBetween: 20,
  },
  640: {
    spaceBetween: 0,
  },
};

export const accessibility = {
  slideRole: "group",
  containerRoleDescriptionMessage: "Features",
  containerMessage: "Slider of features",
  prevSlideMessage: "Previous slide",
  nextSlideMessage: "Next slide",
  firstSlideMessage: "This is the first slide",
  lastSlideMessage: "This is the last slide",
  slideLabelMessage: "{{index}} from {{slidesCount}}",
};

export const keyboard = {
  enabled: true,
  onlyInViewport: false,
  pageUpDown: true,
};

export const slides = [
  {
    id: 1,
    active: "onlineBanking",
    style:
      "flex justify-center items-center cursor-pointer rounded-[100px] text-sm w-32 h-12.25 xs:w-36 lg:w-41.25 lg:pl-5 lg:justify-start 2xl:w-52 2xl:h-15.75 2xl:text-lg",
    text: "Online banking",
  },
  {
    id: 2,
    active: "financialTools",
    style:
      "flex justify-center items-center cursor-pointer rounded-[100px] text-sm w-31 h-12.25 xs:w-35 lg:w-41.25 lg:pl-5 lg:justify-start 2xl:w-52 2xl:h-15.75 2xl:text-lg",
    text: "Financial tools",
  },
  {
    id: 3,
    active: "customerSupport",
    style:
      "flex justify-center items-center cursor-pointer rounded-[100px] text-sm w-37.25 h-12.25 xs:w-36 lg:w-41.25 lg:pl-5 lg:justify-start 2xl:w-52 2xl:h-15.75 2xl:text-lg",
    text: "Customer support",
  },
] as const;
