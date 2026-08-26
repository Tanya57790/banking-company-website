import Image from "next/image";
import { HeroSection } from "@/components/HeroSection";
import { ProductsSection } from "@/components/ProductsSection";
import { CasesSection } from "@/components/CasesSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { FAQSection } from "@/components/FAQSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { CTASection } from "@/components/CTASection";
import abstract from "@/assets/images/abstract-home-1_d.png";

export default function Home() {
  return (
    <div>
      <div className="absolute top-0 left-0 -z-100 h-69 w-70 md:w-87 xl:h-88.25 xl:w-124.25 2xl:h-124.75 2xl:w-172.25">
        <div className="relative h-full w-full">
          <Image
            src={abstract}
            fill
            sizes="(max-width: 768px) 280px, (max-width: 1280px) 348px, (max-width: 1536px) 497px, 689px"
            priority
            alt=""
          />
        </div>
      </div>
      <HeroSection />
      <ProductsSection />
      <CasesSection />
      <FeaturesSection />
      <FAQSection />
      <TestimonialsSection />
      <CTASection />
    </div>
  );
}
