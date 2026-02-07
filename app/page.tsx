import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ResearchSection from "@/components/ResearchSection";
import InnovationSection from "@/components/InnovationSection";
import PlatformSection from "@/components/PlatformSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <ResearchSection />
      <InnovationSection />
      <PlatformSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
