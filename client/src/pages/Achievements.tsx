import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Blob } from "@/components/ui/blob";
import { Button } from "@/components/ui/button";

// Achievement data structure
interface Achievement {
  id: number;
  title: string;
  imageUrl: string;
  carouselText: string;
  articleText: string;
}

// Achievement data from the paste.txt file
const achievementsData: Achievement[] = [
  {
    id: 1,
    title: "Hult Prize MAHE 2025: Third Place Achieved",
    imageUrl: "src/assets/hult.jpg",
    carouselText: "Secured 3rd place at the Hult Prize MAHE 2025 On-Campus Finals! Axory AI's innovative deepfake detection solution stood out among top competitors addressing global challenges.",
    articleText: "Axory AI was awarded Third Place at the Hult Prize MAHE 2025 On-Campus Finals. Our deepfake detection product impressed the judges with its real-world relevance and scalability. Among hundreds of applicants, we were recognized as one of the Top 3 social innovation startups, highlighting our commitment to combating misinformation and digital threats with AI. This achievement marks a significant milestone in our mission to build secure AI tools for global impact."
  },
  {
    id: 2,
    title: "Pioneira 2025: Runner-Up at VIT Vellore",
    imageUrl: "/src/assets/p.jpg", // Replace with actual image path
    carouselText: "Runner-Up at Pioneira 2025, VIT Vellore's national entrepreneurship summit! Axory AI showcased DetectifAI among India's leading student startups.",
    articleText: "Axory AI achieved Runner-Up status at Pioneira 2025, hosted by VIT Vellore. Competing against over 100 startups, our team presented DetectifAI to a panel of seasoned investors, entrepreneurs, and VCs. We demonstrated our product's capabilities in AI-generated media detection, garnering interest from multiple industry leaders. This recognition validates our vision of securing digital spaces with advanced AI."
  },
  {
    id: 3,
    title: "Smart India Hackathon 2024 Finalists",
    imageUrl: "/src/assets/sih.jpg", // Replace with actual image path
    carouselText: "Tarini and Akshita, co-founders of Axory AI, finalists at Smart India Hackathon 2024 with their flagship product, DetectifAI.",
    articleText: "Tarini Sai Padmanabhuni (CEO) and Akshita Jain (COO), co-founders of Axory AI, were finalists at the Smart India Hackathon 2024. They presented DetectifAI, Axory AI's flagship deepfake detection product, showcasing its advanced capabilities and potential to address critical challenges in digital security. Their participation and recognition in this prestigious national event highlight their commitment to developing cutting-edge AI solutions for real-world impact."
  },
  {
    id: 4,
    title: "India's Top 20 Under 20 Honoree",
    imageUrl: "/src/assets/20u20.jpg", // Replace with actual image path
    carouselText: "Tarini Sai Padmanabhuni, CEO of Axory AI, recognized as one of India's Top 20 Under 20 for innovation and national impact.",
    articleText: "Tarini Sai Padmanabhuni, CEO and Co-founder of Axory AI, was named among India's Top 20 Under 20, a prestigious national recognition celebrating young achievers in technology, sustainability, and leadership. This award highlights Tarini's exceptional contributions to developing ethical AI solutions and her prior innovative work in water conservation, reflecting her dedication to driving meaningful change through innovation."
  },
  {
    id: 5,
    title: "National Media Recognition for Water Conservation Project",
    imageUrl: "/src/assets/watertech.jpg", // Replace with actual image path
    carouselText: "At 16, Tarini's city-wide water conservation project in Bangalore gained national media attention for its impact.",
    articleText: "At just 16, Tarini—now CEO and Co-founder of Axory AI—led a water conservation initiative across Bangalore, implementing cost-effective methods to reduce water waste. Her project received national media coverage, featuring in major newspapers and publications like Brainfeed Educational magazine and Guiding Young Minds magazine, acknowledging her measurable environmental impact. This early work laid the groundwork for her path as a mission-driven tech entrepreneur."
  },
  {
    id: 6,
    title: "Featured in 'The Growth Mindset' Book",
    imageUrl: "/src/assets/book.jpg", 
    carouselText: "Tarini's journey as a young changemaker featured in a full chapter of Samaresh Shah's 'The Growth Mindset' book.",
    articleText: "Tarini Sai Padmanabhuni, CEO and Co-founder of Axory AI, is featured in Samaresh Shah's best-selling book 'The Growth Mindset: Its All You Need to Succeed,'' with a dedicated chapter chronicling her story. The chapter details her evolution from launching grassroots projects to building a cutting-edge deepfake detection startup, showcasing her resilience, purpose, and unwavering drive to address global challenges through technology."
  }
];

// Achievement Carousel Card Component
const AchievementCard = ({ achievement, isExpanded, toggleExpand }: { 
  achievement: Achievement, 
  isExpanded: boolean, 
  toggleExpand: () => void 
}) => {
  return (
    <motion.div 
      className="bg-white rounded-xl shadow-md overflow-hidden"
      layout
    >
      <div 
        className="h-64 bg-cover bg-center" 
        style={{ 
          backgroundImage: `url(${achievement.imageUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      <motion.div className="p-6" layout>
        <h3 className="text-xl font-bold text-gray-900 mb-3">{achievement.title}</h3>
        <p className="text-gray-600 mb-4">{achievement.carouselText}</p>
        
        <div className="flex justify-between items-center">
          <Button 
            variant="ghost" 
            className="text-primary-700 hover:text-[#f39c12] transition-colors flex items-center"
            onClick={toggleExpand}
          >
            {isExpanded ? "Show Less" : "Read More"}
            {isExpanded ? <ChevronUp className="h-4 w-4 ml-1" /> : <ChevronDown className="h-4 w-4 ml-1" />}
          </Button>
        </div>
        
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-4 pt-4 border-t border-gray-200"
            >
              <p className="text-gray-700">{achievement.articleText}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

// Achievement Carousel Component
const AchievementsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [expandedId, setExpandedId] = useState<number | null>(null);
  
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % achievementsData.length);
    setExpandedId(null);
  };
  
  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + achievementsData.length) % achievementsData.length);
    setExpandedId(null);
  };
  
  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };
  
  // Get visible achievements (3 at a time on desktop, 1 on mobile)
  const visibleAchievements = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % achievementsData.length;
      visible.push(achievementsData[index]);
    }
    return visible;
  };
  
  return (
    <div className="relative">
      <div className="grid md:grid-cols-3 gap-8">
        {visibleAchievements().map((achievement) => (
          <AchievementCard 
            key={achievement.id}
            achievement={achievement}
            isExpanded={expandedId === achievement.id}
            toggleExpand={() => toggleExpand(achievement.id)}
          />
        ))}
      </div>
      
      <div className="flex justify-center mt-8 gap-4">
        <Button onClick={prevSlide} variant="outline" className="rounded-full w-12 h-12 flex items-center justify-center">
          <ChevronDown className="h-6 w-6 rotate-90" />
        </Button>
        <Button onClick={nextSlide} variant="outline" className="rounded-full w-12 h-12 flex items-center justify-center">
          <ChevronDown className="h-6 w-6 -rotate-90" />
        </Button>
      </div>
    </div>
  );
};

export default function Achievements() {
  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="relative py-20 bg-white overflow-hidden">
        <Blob className="absolute -top-32 -right-32 text-primary/10 w-96 h-96 rotate-45" />
        <Blob className="absolute -bottom-32 -left-32 text-[#20b2aa]/10 w-80 h-80 -rotate-45" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-sm font-semibold text-primary-700 tracking-wide uppercase mb-3">Recognition & Awards</h1>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our Achievements
              </h2>
              <p className="text-xl text-gray-600 mb-12">
                Every recognition we receive reaffirms our commitment to create technology 
                that protects authenticity in our digital world. Here are some milestones on our journey.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Achievements Carousel Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-6">
          <AchievementsCarousel />
        </div>
      </section>

      {/* Additional Content Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Impact Journey</h2>
              <p className="text-lg text-gray-600 mb-10">
                Beyond awards and recognition, our journey is defined by the real-world impact we create through 
                our deepfake detection technology. We measure our success by how effectively we can protect 
                individuals, businesses, and organizations from the harmful effects of synthetic media.
              </p>
              
              <div className="grid md:grid-cols-3 gap-8 mt-12">
                <div className="bg-gray-50 p-8 rounded-xl shadow-sm">
                  <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-primary-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Secured Content</h3>
                  <p className="text-gray-600">
                    Protected 10 media files from being manipulated or misrepresented.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-8 rounded-xl shadow-sm">
                  <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-primary-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Industry Partners</h3>
                  <p className="text-gray-600">
                    Collaborating with 3+ leading media organizations to authenticate content.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-8 rounded-xl shadow-sm">
                  <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-primary-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Research Impact</h3>
                  <p className="text-gray-600">
                    Publishing 2  research papers advancing the field of synthetic media detection.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}