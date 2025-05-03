import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

interface TestimonialCardProps {
  quote: string;
  author: {
    name: string;
    title: string;
  };
  delay?: number;
}

function TestimonialCard({ quote, author, delay = 0 }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
    >
      <Card className="bg-white p-8 h-full">
        <div className="flex items-center mb-6">
          <div className="text-primary-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M10 7L8 11H11V17H5V11L7 7H10ZM18 7L16 11H19V17H13V11L15 7H18Z" />
            </svg>
          </div>
        </div>
        <p className="text-gray-700 mb-6">
          {quote}
        </p>
        <div className="ml-3">
          <p className="text-sm font-bold text-gray-900">{author.name}</p>
          <p className="text-xs text-gray-500">{author.title}</p>
        </div>
      </Card>
    </motion.div>
  );
}

export default function TestimonialsSection() {
  const testimonials = [
    {
      quote: "The next YC cohort members from Manipal!",
      author: {
        name: "Zuber Ahmed",
        title: "Chief Innovation Officer, MAHE"
      }
    },
    {
      quote: "This is the need of the hour.",
      author: {
        name: "Atul Batra",
        title: "Startup Advisor and Mentor"
      }
    },
    {
      quote: "Great Product, with great Potential",
      author: {
        name: "Dr. Srinivas Padmanabhuni",
        title: "CTO, AIensured"
      }
    },
    {
      quote: "Team with high potential, product of the hour!",
      author: {
        name: "Neelima Vobugari",
        title: "CIO, AIensured"
      }
    },
    {
      quote: "This is a Good Product",
      author: {
        name: "Shri Chanchal Kumar",
        title: "IAS, Secretary, Ministry of DoNER, GOI"
      }
    },
    {
      quote: "Apt solution for current-day scenarios",
      author: {
        name: "Jai Prakash Govindraj",
        title: "Cyber Security Expert"
      }
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16 reveal"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-sm font-semibold text-primary-700 tracking-wide uppercase mb-3">Testimonials</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Trusted by Industry Leaders
          </h3>
          <p className="text-lg text-gray-600">
            See how organizations around the world are leveraging Axory AI's deepfake detection technology to protect their digital presence.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8 reveal">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              delay={index * 0.1}
            />
          ))}
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mt-8 reveal">
          {testimonials.slice(3, 6).map((testimonial, index) => (
            <TestimonialCard
              key={index + 3}
              quote={testimonial.quote}
              author={testimonial.author}
              delay={(index + 3) * 0.1}
            />
          ))}
        </div>
        
        {testimonials.length > 6 && (
          <div className="grid md:grid-cols-3 gap-8 mt-8 reveal">
            <TestimonialCard
              key={6}
              quote={testimonials[6].quote}
              author={testimonials[6].author}
              delay={0.7}
            />
          </div>
        )}
        
        {/* Logos */}
        <motion.div 
          className="mt-20 reveal"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h4 className="text-center text-gray-500 font-medium mb-8">Trusted by leading organizations worldwide</h4>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-8 items-center">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="flex justify-center">
                <div className="h-8 w-32 bg-gray-200 rounded"></div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}