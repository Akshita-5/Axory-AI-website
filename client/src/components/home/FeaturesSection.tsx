import { motion } from "framer-motion";
import { Eye, MessageSquare, FileText, Sliders, ClipboardList, ShieldCheck, Check } from "lucide-react";
import { Card } from "@/components/ui/card";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  delay?: number;
}

function FeatureCard({ icon, title, description, features, delay = 0 }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="feature-card"
    >
      <Card className="bg-gray-50 p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
        <div className="w-14 h-14 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
          {icon}
        </div>
        <h4 className="text-xl font-bold text-gray-900 mb-3">{title}</h4>
        <p className="text-gray-600 mb-4">{description}</p>
        <ul className="space-y-2 text-gray-600">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <Check className="h-5 w-5 text-green-500 mr-2" />
              {feature}
            </li>
          ))}
        </ul>
      </Card>
    </motion.div>
  );
}

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16 reveal"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-sm font-semibold text-primary-700 tracking-wide uppercase mb-3">Features</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Advanced Detection Capabilities
          </h3>
          <p className="text-lg text-gray-600">
            Our multi-layered analysis technology identifies even the most sophisticated deepfakes with unprecedented accuracy and efficiency.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8 reveal">
          <FeatureCard
            icon={<Eye className="h-8 w-8 text-primary-700" />}
            title="Facial Inconsistency Detection"
            description="Identifies micro-expressions, blinking patterns, and facial geometry inconsistencies that reveal deepfake content."
            features={[
              "Micro-expression analysis",
              "Blink pattern verification",
              "3D facial reconstruction"
            ]}
            delay={0.1}
          />
          
          <FeatureCard
            icon={<MessageSquare className="h-8 w-8 text-primary-700" />}
            title="Audio Forgery Analysis"
            description="Detects artificial voice generation and manipulation through sophisticated frequency and pattern analysis."
            features={[
              "Voice pattern authentication",
              "Speech cadence verification",
              "Background noise consistency"
            ]}
            delay={0.2}
          />
          
          <FeatureCard
            icon={<FileText className="h-8 w-8 text-primary-700" />}
            title="Digital Fingerprinting"
            description="Identifies telltale signs of AI generation through pixel-level analysis and metadata verification."
            features={[
              "Pixel pattern analysis",
              "Metadata integrity checking",
              "AI generation artifacts detection"
            ]}
            delay={0.3}
          />
        </div>
        
        <div className="mt-16 grid md:grid-cols-3 gap-8 reveal">
          <FeatureCard
            icon={<Sliders className="h-8 w-8 text-primary-700" />}
            title="Real-Time Screening"
            description="Scans and analyzes media in real-time before it's published or shared across your platforms."
            features={[
              "API integration",
              "Pre-publication scanning",
              "Millisecond response time"
            ]}
            delay={0.1}
          />
          
          <FeatureCard
            icon={<ClipboardList className="h-8 w-8 text-primary-700" />}
            title="Comprehensive Reports"
            description="Provides detailed analysis reports with confidence scores and specific detection insights."
            features={[
              "Confidence scoring",
              "Visual heatmap highlighting",
              "Evidence documentation"
            ]}
            delay={0.2}
          />
          
          <FeatureCard
            icon={<ShieldCheck className="h-8 w-8 text-primary-700" />}
            title="Enterprise Integration"
            description="Seamlessly integrates with your existing security infrastructure and content management systems."
            features={[
              "CMS integration",
              "Security infrastructure compatibility",
              "Custom workflow automation"
            ]}
            delay={0.3}
          />
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        .feature-card {
          transition: all 0.3s ease;
        }
        
        .feature-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px -15px rgba(0, 0, 0, 0.1);
        }
        `
      }} />
    </section>
  );
}
