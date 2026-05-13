export const breakpoints = {
  768: {
    slidesPerView: 2,
    spaceBetween: 20,
  },
  1024: {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesOffsetBefore: 50,
    slidesOffsetAfter: 50,
  },
  1280: {
    slidesPerView: 3,
    spaceBetween: 60,
    slidesOffsetBefore: 60,
    slidesOffsetAfter: 60,
  },
  1440: {
    slidesPerView: 3,
    spaceBetween: 60,
    slidesOffsetBefore: 30,
    slidesOffsetAfter: 30,
  },
  1536: {
    slidesPerView: 3,
    spaceBetween: 80,
    slidesOffsetBefore: 50,
    slidesOffsetAfter: 50,
  },
};

export const accessibility = {
  slideRole: "group",
  containerRoleDescriptionMessage: "Testimonials",
  containerMessage: "Slider of testimonials",
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
