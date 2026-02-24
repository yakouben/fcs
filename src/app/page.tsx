import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import CategoriesSection from "@/components/CategoriesSection";
import ProjectsSection from "@/components/ProjectsSection";
import MapSection from "@/components/MapSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <CategoriesSection />
      <ProjectsSection />
      <MapSection />
      <ContactSection />
      <Footer />
    </>
  );
}
