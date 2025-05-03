import { motion } from "framer-motion";
import { Shield, Zap, LightbulbIcon, Users } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16 reveal"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-sm font-semibold text-primary-700 tracking-wide uppercase mb-3">About Us</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Pioneering Deepfake Detection Technology
          </h3>
          <p className="text-lg text-gray-600">
            Axory AI is at the forefront of combating digital misinformation with our advanced deepfake detection technology, protecting individuals and organizations from the growing threat of synthetic media.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center reveal">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="rounded-2xl shadow-lg overflow-hidden">
              <img 
                src="/src/assets/di1.jpeg" 
                alt="about" 
                className="w-full h-auto"
              />
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h4 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h4>
            <p className="text-gray-600 mb-6">
              In a world where AI-generated content is increasingly indistinguishable from reality, we envision a digital landscape where authenticity is verifiable and deepfakes are instantly recognized.
            </p>
            
            <h4 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h4>
            <p className="text-gray-600 mb-6">
              We are committed to developing and deploying the most advanced deepfake detection technology to preserve the integrity of digital media across all platforms and industries.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 mt-1">
                  <Shield className="h-6 w-6 text-primary-600" />
                </div>
                <div>
                  <h5 className="font-medium text-gray-900">Security First</h5>
                  <p className="text-sm text-gray-600">Enterprise-grade protection systems</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 mt-1">
                  <Zap className="h-6 w-6 text-primary-600" />
                </div>
                <div>
                  <h5 className="font-medium text-gray-900">Fast Processing</h5>
                  <p className="text-sm text-gray-600">Real-time analysis & detection</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 mt-1">
                  <LightbulbIcon className="h-6 w-6 text-primary-600" />
                </div>
                <div>
                  <h5 className="font-medium text-gray-900">Innovative AI</h5>
                  <p className="text-sm text-gray-600">Cutting-edge neural networks</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 mt-1">
                  <Users className="h-6 w-6 text-primary-600" />
                </div>
                <div>
                  <h5 className="font-medium text-gray-900">Expert Team</h5>
                  <p className="text-sm text-gray-600">Industry-leading researchers</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
