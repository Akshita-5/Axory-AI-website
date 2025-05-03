import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Blob } from "@/components/ui/blob";

const i1 = "./src/assets/i1.png";
const i2 = "./src/assets/i2.png";
const i3 = "./src/assets/i3.webp";
const i4 = "./src/assets/i4.jpg";

const images = [i1, i2, i3, i4];

export default function HeroSection() {
  const [activeIndex, setActiveIndex] = useState<number>(3); // Bottom image starts enlarged
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change size every 3 seconds
  
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex items-center relative overflow-hidden" 
      style={{ 
        background: "linear-gradient(-45deg, #4d427c, #3d3365, #20b2aa, #42403f)",
        backgroundSize: "400% 400%",
        animation: "gradient 15s ease infinite"
      }}>
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-white opacity-5 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-[#20b2aa] opacity-10 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-[#4d427c] opacity-10 rounded-full blur-xl"></div>
      </div>
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="reveal"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1 bg-white/10 backdrop-blur-md rounded-full text-white text-sm mb-6">
              AI-Powered Deepfake Detection
            </span>
            <h1 className="text-4xl md:text-4xl font-bold text-white leading-tight mb-6">
              Protecting Digital Truth in an AI-Generated World
            </h1>
            <p className="text-xl text-white/80 mb-8 max-w-lg">
              Axory AI's cutting-edge technology detects and prevents deepfake content with unparalleled accuracy, safeguarding authenticity in the digital landscape.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button 
                size="lg" 
                variant="secondary" 
                className="rounded-lg"
                asChild
              >
                <a href="#contact">Request a Demo</a>
              </Button>
              <Button 
                size="lg" 
                variant="secondary" 
                className="rounded-lg"
                asChild
              >
                <a href="#features">Explore Features</a>
              </Button>
            </div>
          </motion.div>
          
          <motion.div 
            className="relative reveal"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Blob className="bg-gradient-to-br from-[#4d427c]/40 to-[#20b2aa]/40 backdrop-blur-md">
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Circular Image Layout */}
                <div className="relative w-80 h-80">
                  {images.map((img, index) => {
                    // Calculate positions for each image
                    let posX, posY;
                    
                    // Specific positions for each image based on the reference
                    if (index === 0) { // Top image
                      posX = "50%";
                      posY = "15%";
                    } else if (index === 1) { // Right image
                      posX = "65%";
                      posY = "50%";
                    } else if (index === 2) { // Left image
                      posX = "15%";
                      posY = "50%";
                    } else { // Bottom image
                      posX = "50%";
                      posY = "85%";
                    }
                    
                    return (
                      <div
                        key={index}
                        className="absolute transform -translate-x-1/2 -translate-y-1/2"
                        style={{
                          top: posY,
                          left: posX,
                          zIndex: index === activeIndex ? 20 : 10,
                          transition: "all 0.5s ease-in-out"
                        }}
                      >
                        <img
                          src={img}
                          alt={`image-${index}`}
                          className={`rounded-full object-cover border-2 border-white/20 shadow-lg transition-all duration-500 ease-in-out ${
                            index === activeIndex 
                              ? "w-48 h-48" 
                              : "w-28 h-28"
                          }`}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            </Blob>
          </motion.div>
        </div>
        
        <motion.div 
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 reveal"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="text-center p-4 bg-white/10 backdrop-blur-md rounded-xl">
            <h3 className="text-3xl font-bold text-white mb-1">95%</h3>
            <p className="text-white/70">Detection Accuracy</p>
          </div>
          <div className="text-center p-4 bg-white/10 backdrop-blur-md rounded-xl">
            <h3 className="text-3xl font-bold text-white mb-1">1000+</h3>
            <p className="text-white/70">Page Visitors</p>
          </div>
          <div className="text-center p-4 bg-white/10 backdrop-blur-md rounded-xl">
            <h3 className="text-3xl font-bold text-white mb-1">1M+</h3>
            <p className="text-white/70">Media Analyzed</p>
          </div>
          <div className="text-center p-4 bg-white/10 backdrop-blur-md rounded-xl">
            <h3 className="text-3xl font-bold text-white mb-1">4.5ms</h3>
            <p className="text-white/70">Processing Time</p>
          </div>
        </motion.div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-gray-50 to-transparent"></div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        .reveal {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease;
        }
        
        .reveal.active {
          opacity: 1;
          transform: translateY(0);
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}} />
    </section>
  );
}