import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "wouter";
import { motion } from "framer-motion";
import logoImage from "@/assets/logo2.png";
import logoImage2 from "@/assets/logo1.png";

export default function Navbar() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Determine if we're on the home page
  const isHomePage = location === "/";

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled || !isHomePage ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <img 
              src={isScrolled || !isHomePage ? logoImage2 : logoImage} 
              alt="Company Logo" 
              className="h-14 w-30 transition-all duration-300"
            />
          </Link>
          
          <div className="hidden md:flex items-center space-x-6">
            {isHomePage ? (
              <>
                <a 
                  href="#about" 
                  className={`hover:text-[#20b2aa] transition-colors ${
                    isScrolled ? "text-[#42403f]" : "text-white"
                  }`}
                >
                  About
                </a>
                <a 
                  href="#features" 
                  className={`hover:text-[#20b2aa] transition-colors ${
                    isScrolled ? "text-[#42403f]" : "text-white"
                  }`}
                >
                  Features
                </a>
                <a 
                  href="#technology" 
                  className={`hover:text-[#20b2aa] transition-colors ${
                    isScrolled ? "text-[#42403f]" : "text-white"
                  }`}
                >
                  Technology
                </a>
                <a 
                  href="#usecases" 
                  className={`hover:text-[#20b2aa] transition-colors ${
                    isScrolled ? "text-[#42403f]" : "text-white"
                  }`}
                >
                  Use Cases
                </a>
              </>
            ) : null}
            
            <Link 
              href="/achievements" 
              className={`hover:text-[#20b2aa] transition-colors ${
                isScrolled || !isHomePage ? "text-[#42403f]" : "text-white"
              } ${location === "/achievements" ? "text-[#20b2aa] font-medium" : ""}`}
            >
              Achievements
            </Link>
            
            <Link 
              href="/blog" 
              className={`hover:text-[#20b2aa] transition-colors ${
                isScrolled || !isHomePage ? "text-[#42403f]" : "text-white"
              } ${location === "/blog" ? "text-[#20b2aa] font-medium" : ""}`}
            >
              Blog
            </Link>
            
            {isHomePage ? (
              <a href="#contact">
                <Button 
                  variant={isScrolled ? "default" : "secondary"}
                  className="rounded-full"
                >
                  Contact Us
                </Button>
              </a>
            ) : (
              <Link href="/#contact">
                <Button 
                  variant="default"
                  className="rounded-full"
                >
                  Contact Us
                </Button>
              </Link>
            )}
          </div>
          
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className={`md:hidden ${isScrolled || !isHomePage ? "text-[#42403f]" : "text-white"}`}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
              />
            </svg>
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
          className="md:hidden bg-white shadow-lg rounded-b-lg mx-6 mt-2"
        >
          <div className="px-4 py-3 space-y-3">
            {isHomePage && (
              <>
                <a 
                  href="#about" 
                  className="block text-[#4d427c] hover:text-[#20b2aa]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </a>
                <a 
                  href="#features" 
                  className="block text-[#4d427c] hover:text-[#20b2aa]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Features
                </a>
                <a 
                  href="#technology" 
                  className="block text-[#4d427c] hover:text-[#20b2aa]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Technology
                </a>
                <a 
                  href="#usecases" 
                  className="block text-[#4d427c] hover:text-[#20b2aa]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Use Cases
                </a>
              </>
            )}
            
            <Link 
              href="/achievements" 
              className={`block hover:text-[#20b2aa] ${location === "/achievements" ? "text-[#20b2aa] font-medium" : "text-[#4d427c]"}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Achievements
            </Link>
            
            <Link 
              href="/blog" 
              className={`block hover:text-[#20b2aa] ${location === "/blog" ? "text-[#20b2aa] font-medium" : "text-[#4d427c]"}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            
            {isHomePage ? (
              <a 
                href="#contact" 
                className="block px-4 py-2 rounded-md bg-[#4d427c] text-white font-medium text-center hover:bg-[#3d3365]"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </a>
            ) : (
              <Link 
                href="/#contact" 
                className="block px-4 py-2 rounded-md bg-[#4d427c] text-white font-medium text-center hover:bg-[#3d3365]"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </Link>
            )}
          </div>
        </motion.div>
      )}
    </header>
  );
}