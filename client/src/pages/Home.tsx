import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import TechnologySection from "@/components/home/TechnologySection";
import UseCasesSection from "@/components/home/UseCasesSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import ContactSection from "@/components/home/ContactSection";
import NewsSection from "@/components/home/NewsSection";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // Scroll reveal functionality
    const revealElements = () => {
      const reveals = document.querySelectorAll('.reveal');
      const windowHeight = window.innerHeight;
      
      reveals.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
          element.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', revealElements);
    revealElements(); // Initial check
    
    return () => window.removeEventListener('scroll', revealElements);
  }, []);

  return (
    <div className="font-sans text-gray-800 bg-gray-50">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <TechnologySection />
      <NewsSection /> 
      <UseCasesSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}