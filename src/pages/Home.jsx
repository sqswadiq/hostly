import About from "../components/About";
import Counter from "../components/Counter";
import Facilities from "../components/Facility";
import FaqSection from "../components/FaqSection";
import FloatingCard from "../components/FloatingCard";
import Footer from "../components/Footer";
import HeroSection from "../components/Herosection";
import Pricing from "../components/PricingSection";
import WhatsAppButton from "../components/Whatsapp";
import WhyHostly from "../components/WhyHostly";

export default function Home() {
  return (
    <div>
      <HeroSection/>
      <FloatingCard/>
      <WhyHostly/>
      <Pricing/>
      <Facilities/>
      <Counter/>
      <WhatsAppButton/>
      <About/>
      <FaqSection/>
      <Footer/>
    </div>
  );
}
