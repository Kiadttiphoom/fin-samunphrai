import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import Product from "@/components/Product";
import BenefitSection from "@/components/BenefitSection";
import IngredientSection from "@/components/IngredientSection";
import TestimonialSection from "@/components/TestimonialSection";
import BuySection from "@/components/BuySection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative z-10">
      <Navbar></Navbar>
      <HeroSection />
      <AboutSection />
      <Product />
      <BenefitSection />
      <IngredientSection />
      <TestimonialSection />
      <BuySection />
      <Footer />
    </main>
  );
}
