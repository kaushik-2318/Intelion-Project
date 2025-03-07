import './globals.css'
import Hero from "@/components/hero";
import Navbar from "@/components/navbar"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0f1729] overflow-hidden">
      <Navbar />
      <Hero />
    </main>
  );
}
