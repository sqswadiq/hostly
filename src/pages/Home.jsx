import Counter from "../components/Counter";
import Facilities from "../components/Facility";
import FloatingCard from "../components/FloatingCard";
import HeroSection from "../components/Herosection";
import WhyHostly from "../components/WhyHostly";

export default function Home() {
  return (
    <div>
      <HeroSection/>
      <FloatingCard/>
      <WhyHostly/>
      <Facilities/>
      <Counter/>
    </div>
  );
}
