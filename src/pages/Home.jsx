import About from "../components/About";
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
    <div id="home">
      <HeroSection/>
      <FloatingCard/>
      <WhyHostly/>
      <Pricing/>
      <Facilities/>
      <WhatsAppButton/>
      <About/>
      <FaqSection/>
      <Footer/>
    </div>
  );
}
