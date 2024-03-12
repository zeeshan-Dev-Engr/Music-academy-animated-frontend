import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Instractor from "@/components/Instractor";
import Moving_card from "@/components/Moving_card";
import SecondHero from "@/components/SecondHero";
import Sticky_Scroll_Reveal from "@/components/Sticky_Scroll_Reveal";
import { CardHoverEffectDemo } from "@/components/cardhovereffect";
import { WavyBackground } from "@/components/ui/wavy-background";
import Image from "next/image";



export default function Home() {
  return (
    <main className=" min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection/>
      <SecondHero/>
      <Sticky_Scroll_Reveal/>
      <Moving_card/>
      <CardHoverEffectDemo/>
      <Instractor/>
      <Footer/>
      
         
    </main>
  );
}
