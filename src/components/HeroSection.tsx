import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Truck, Zap } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative py-24 md:py-32 px-6 overflow-hidden">
      {/* Video background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/90 to-black/95 z-10"></div>
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg"
        >
          <source src="https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      
      {/* Background elements - keeping as a fallback if video doesn't load */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-20 right-10 w-72 h-72 bg-protega-600 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-cyan-400 rounded-full filter blur-3xl opacity-10 animate-pulse"></div>
      </div>
      
      <div className="container relative mx-auto z-10">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-gradient-to-r from-protega-800 to-protega-700 text-white text-sm font-medium mb-5">
            Powering the future of eCommerce assurance
          </span>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text leading-tight">
            The smartest post-purchase platform driven by AI built for Indian eCommerce
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Boost your margins, build brand trust, and protect customer happiness — with every shipment and sale.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/" className="inline-flex items-center px-6 py-3 bg-protega-600 text-white rounded-md hover:bg-protega-700 transition-colors font-medium text-base shadow-lg hover:shadow-protega-500/20">
              Schedule a Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
          
          <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm text-gray-300">
            <div className="flex items-center">
              <ShieldCheck className="mr-2 h-5 w-5 text-cyan-400" />
              <span>AI-Powered Claims Processed in 90 Seconds</span>
            </div>
            <div className="flex items-center">
              <Truck className="mr-2 h-5 w-5 text-cyan-400" />
              <span>Self-Service Claim Journey for End Customers</span>
            </div>
            <div className="flex items-center">
              <Zap className="mr-2 h-5 w-5 text-cyan-400" />
              <span>Fully Embedded Shopify + WooCommerce SDK</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;