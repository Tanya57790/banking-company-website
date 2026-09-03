import { cards } from "./data";

const CareersValues = () => {
  return (
    <div className="relative w-full flex flex-col items-center mt-20 xl:mt-30 desktop:mt-37.5">
      <section className="relative text-center w-auto xs:w-70.25 sm:text-left sm:w-full">
        <h2 className="font-lexend font-medium text-white-absolute text-[28px] pb-2 md:pb-2.5 xl:text-[38px] xl:pb-3.5 2xl:text-[48px]">
          Our{" "}
          <span className="font-lexend font-medium text-primary-600 text-[28px] xl:text-[38px] 2xl:text-[48px]">
            Values
          </span>{" "}
        </h2>
        <p className="font-lexend font-light text-grey-700 text-[14px] md:text-[16px] 2xl:text-lg">
          At YourBank, our values form the foundation of our organization and
          guide our actions. We believe in upholding the highest standards of
          integrity, delivering exceptional service, and embracing innovation.
          These values define our culture and shape the way we work together to
          achieve our goals.
        </p>
      </section>
      <div className="grid sm:grid-cols-2 sm:gap-x-7 xl:gap-x-15 desktop:gap-x-27.5">
        {cards.map((card) => (
          <section
            key={card.id}
            className="relative mt-12.5 pl-5 text-left w-auto border border-l-primary-600 border-t-0 border-r-0 border-b-0 xs:w-72.25 md:w-full xl:mt-15 xl:pl-6 desktop:mt-20 desktop:pl-7.5"
          >
            <h3 className="font-lexend font-medium text-grey-300 text-[30px] xl:text-[40px] 2xl:text-[48px] desktop:text-[58px]">
              {card.title}
            </h3>
            <p className="font-lexend font-light pt-3.5 text-grey-700 text-[14px] md:text-[16px] xl:pt-5 2xl:text-lg desktop:pt-7.5">
              {card.text}
            </p>
          </section>
        ))}
      </div>
    </div>
  );
};

export default CareersValues;
