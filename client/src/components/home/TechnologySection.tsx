import { motion } from "framer-motion";
import { Progress } from "@/components/ui/progress";

export default function TechnologySection() {
  return (
    <section id="technology" className="py-20 bg-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-primary-800 opacity-5"></div>
        <div className="grid grid-cols-10 h-full">
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className={`col-span-1 ${i < 9 ? 'border-r border-primary-300/10' : ''}`}></div>
          ))}
        </div>
        <div className="grid grid-rows-10 h-full absolute inset-0">
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className={`row-span-1 ${i < 9 ? 'border-b border-primary-300/10' : ''}`}></div>
          ))}
        </div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16 reveal"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-sm font-semibold text-primary-700 tracking-wide uppercase mb-3">Our Technology</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            How Our Deepfake Detection Works
          </h3>
          <p className="text-lg text-gray-600">
            Our proprietary AI technology combines multiple detection methods to identify even the most sophisticated deepfakes with industry-leading accuracy.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-16 items-center reveal">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <img 
                src="/src/assets/i1.png" 
                alt="AI technology visualization" 
                className="rounded-xl shadow-lg w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-800/40 to-transparent rounded-xl"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-xl flex items-center justify-center cursor-pointer hover:bg-white/30 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {[
              {
                number: 1,
                title: "Input Analysis",
                description: "Media is processed through our secure API, where it's broken down into frames for comprehensive analysis. Our system can handle images, videos, and audio."
              },
              {
                number: 2,
                title: "Multi-Modal Detection",
                description: "Our neural networks simultaneously analyze visual, audio, and metadata components to identify inconsistencies across multiple dimensions."
              },
              {
                number: 3,
                title: "Signal Processing",
                description: "Advanced signal processing techniques identify artifacts and inconsistencies that are imperceptible to the human eye but reveal AI generation."
              },
              {
                number: 4,
                title: "Confidence Scoring",
                description: "Our system assigns a confidence score based on the cumulative analysis, providing clear metrics on the likelihood of manipulation."
              }
            ].map((step, index) => (
              <motion.div 
                key={index}
                className="flex items-start"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center mr-4 mt-1">
                  <span className="text-primary-700 font-bold">{step.number}</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h4>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
        
        {/* Metrics */}
        <motion.div 
          className="mt-20 bg-white rounded-2xl shadow-lg p-8 md:p-12 reveal"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-12">
            <h4 className="text-2xl font-bold text-gray-900 mb-4">Industry-Leading Performance</h4>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our technology consistently outperforms competitors across all key performance metrics, delivering unparalleled protection against deepfakes.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-6">
              {[
                { label: "Detection Accuracy", value: 99.7 },
                { label: "False Positive Rate", value: 0.3 },
                { label: "Processing Speed", value: 94 }
              ].map((metric, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-gray-700">{metric.label}</span>
                    <span className="font-bold text-primary-700">
                      {metric.label === "Processing Speed" ? "3.5ms" : `${metric.value}%`}
                    </span>
                  </div>
                  <Progress value={metric.value} className="h-2.5" />
                </motion.div>
              ))}
            </div>
            
            <div className="space-y-6">
              {[
                { label: "API Reliability", value: 99.99 },
                { label: "Audio Detection", value: 98.5 },
                { label: "Video Detection", value: 99.2 }
              ].map((metric, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-gray-700">{metric.label}</span>
                    <span className="font-bold text-primary-700">{metric.value}%</span>
                  </div>
                  <Progress value={metric.value} className="h-2.5" />
                </motion.div>
              ))}
            </div>
            
            <div className="space-y-6">
              {[
                { label: "Deepfake Type Coverage", value: 97.8 },
                { label: "Integration Flexibility", value: 100 },
                { label: "Model Update Frequency", value: 100, text: "Daily" }
              ].map((metric, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-gray-700">{metric.label}</span>
                    <span className="font-bold text-primary-700">{metric.text || `${metric.value}%`}</span>
                  </div>
                  <Progress value={metric.value} className="h-2.5" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
