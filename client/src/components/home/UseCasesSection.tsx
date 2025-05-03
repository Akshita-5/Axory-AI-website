import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Building2, Radio, ShieldAlert, Globe, Phone, BookOpen } from "lucide-react";

interface UseCaseCardProps {
  icon: React.ReactNode;
  iconBgColor: string;
  iconColor: string;
  title: string;
  description: string;
  delay?: number;
}

function UseCaseCard({ icon, iconBgColor, iconColor, title, description, delay = 0 }: UseCaseCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
    >
      <Card className="bg-gray-50 p-8 h-full">
        <div className={`w-14 h-14 ${iconBgColor} rounded-lg flex items-center justify-center mb-6`}>
          {icon}
        </div>
        <h4 className="text-xl font-bold text-gray-900 mb-3">{title}</h4>
        <p className="text-gray-600 mb-4">{description}</p>
      </Card>
    </motion.div>
  );
}

export default function UseCasesSection() {
  const useCases = [
    {
      icon: <Building2 className="h-8 w-8 text-blue-600" />,
      iconBgColor: "bg-blue-100",
      iconColor: "text-blue-600",
      title: "Financial Services",
      description: "Prevent voice deepfakes used for fraudulent transactions and protect identity verification systems."
    },
    {
      icon: <Radio className="h-8 w-8 text-green-600" />,
      iconBgColor: "bg-green-100",
      iconColor: "text-green-600",
      title: "Media & News",
      description: "Verify the authenticity of news footage and protect against fake videos of public figures."
    },
    {
      icon: <ShieldAlert className="h-8 w-8 text-red-600" />,
      iconBgColor: "bg-red-100",
      iconColor: "text-red-600",
      title: "Government & Defense",
      description: "Identify manipulated intelligence materials and verify the authenticity of official communications."
    },
    {
      icon: <Globe className="h-8 w-8 text-purple-600" />,
      iconBgColor: "bg-purple-100",
      iconColor: "text-purple-600",
      title: "Social Media Platforms",
      description: "Scan user-generated content to prevent the spread of misleading deepfake videos and images."
    },
    {
      icon: <Phone className="h-8 w-8 text-yellow-600" />,
      iconBgColor: "bg-yellow-100",
      iconColor: "text-yellow-600",
      title: "Telecommunications",
      description: "Protect voice authentication systems and prevent fraudulent calls using voice cloning technology."
    },
    {
      icon: <BookOpen className="h-8 w-8 text-pink-600" />,
      iconBgColor: "bg-pink-100",
      iconColor: "text-pink-600",
      title: "Education",
      description: "Verify student identity during remote exams and protect academic integrity with deepfake detection."
    }
  ];

  return (
    <section id="usecases" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16 reveal"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-sm font-semibold text-primary-700 tracking-wide uppercase mb-3">Use Cases</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Industries We Protect
          </h3>
          <p className="text-lg text-gray-600">
            Our deepfake detection technology safeguards organizations across multiple sectors from the growing threat of synthetic media.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 reveal">
          {useCases.map((useCase, index) => (
            <UseCaseCard
              key={index}
              icon={useCase.icon}
              iconBgColor={useCase.iconBgColor}
              iconColor={useCase.iconColor}
              title={useCase.title}
              description={useCase.description}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}