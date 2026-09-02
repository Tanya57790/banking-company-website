import Image from "next/image";
import abstractImage from "@/assets/images/abstract-register_d.png";
import meetingImage from "@/assets/images/meeting_d.webp";

const CareersHero = () => {
  return (
    <div className="relative w-full flex flex-col items-center">
      <div className="relative w-72 mt-7.5 p-3.5 rounded-[20px] bg-grey-110 xs:w-89.25 md:w-164 md:p-10 lg:w-full lg:flex lg:flex-row-reverse 2xl:mt-12.5 2xl:p-12.5 desktop:mt-13.25 ">
        <Image
          src={abstractImage}
          width={325}
          height={342}
          sizes="167px"
          priority
          className="absolute top-0 right-0 z-1 w-41.75 md:w-40.75 lg:w-51.25 xl:w-64 2xl:w-85.5 mask-l-from-70% mask-l-to-90% mask-b-from-50% mask-b-to-90% mask-radial-at-bottom-left mask-radial-from-70% mask-radial-to-100%"
          alt="Abstract green image"
        />
        <Image
          src={meetingImage}
          width={329}
          height={253}
          sizes="(max-width: 767px) 329px, (min-width: 768px) 715px, (min-width: 1920px) 968px"
          priority
          className="relative top-0 h-auto w-82.25 z-1 object-cover rounded-2xl md:h-142 md:w-178.75 lg:right-0 desktop:w-242"
          alt="Meeting image"
        />
        <div className="relative h-auto w-full z-1 bg-grey-100 rounded-[20px] -mt-10 p-6 xs:w-full md:-mt-20 md:p-15 lg:absolute lg:w-164.5 lg:mt-10 lg:ml-10 lg:rounded-tr-none lg:rounded-br-[60px] lg:top-0 lg:left-0 2xl:mt-12.5 2xl:ml-12.5 2xl:p-20 desktop:w-197.75 desktop:rounded-br-[80px]">
          <section className="relative text-center w-auto xs:w-70.25 md:w-full md:text-left">
            <h1 className="font-lexend font-medium text-white-absolute text-[28px] pb-2 md:pb-2.5 xl:text-[38px] xl:pb-3.5 2xl:text-[48px]">
              Welcome to{" "}
              <span className="font-lexend font-medium text-primary-600 text-[28px] xl:text-[38px] 2xl:text-[48px]">
                YourBank
              </span>{" "}
              Careers
            </h1>
            <p className="font-lexend font-light text-grey-700 text-[14px] md:text-[16px] 2xl:text-lg">
              Join our team and embark on a rewarding journey in the banking
              industry. At YourBank, we are committed to fostering a culture of
              excellence and providing opportunities for professional growth.
              With a focus on innovation, customer service, and integrity, we
              strive to make a positive impact in the lives of our customers and
              communities. Join us today and be a part of our mission to shape
              the future of banking.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CareersHero;
