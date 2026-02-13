import './globals.css'
import Hero from "@/components/hero";
import ParticleBackground from "@/components/particle-background";
import Navbar from "@/components/navbar"
import Metrics from "@/components/metrics"
import FeatureSection from "@/components/features";
import Services from '@/components/services';
import TechStackSection from '@/components/tech-stack';
import Testimonials from '@/components/testimonials';
import Pricing from '@/components/pricing';
import Contact from '@/components/contact';
import Footer from '@/components/footer';
import Banner from '@/components/banner';

export default function Home() {


  return (
    <main className="min-h-screen overflow-hidden">
      <ParticleBackground />
      <Navbar />
      <Hero />
      <Metrics />
      <FeatureSection />
      <Services />
      <TechStackSection />
      <Testimonials />
      <Pricing />
      <Contact />
      <Footer />
     <Banner/>
    </main>
  );
}
