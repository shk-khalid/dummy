import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

interface OfferData {
  price: string;
  term: string;
  features: string[];
}

interface OfferCardProps {
  offerData: OfferData;
  loading?: boolean;
}

const OfferCard: React.FC<OfferCardProps> = ({ offerData, loading = false }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
    >
      <div className="bg-protega-700 p-4 text-white text-center">
        <h3 className="text-xl font-semibold">Premium Plan</h3>
      </div>

      <div className="p-6">
        {loading ? (
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded mb-4 w-3/4 mx-auto"></div>
            <div className="h-4 bg-gray-200 rounded mb-2 w-1/2 mx-auto"></div>
            <div className="space-y-2 mt-6">
              <div className="h-4 bg-gray-200 rounded w-full"></div>
              <div className="h-4 bg-gray-200 rounded w-full"></div>
              <div className="h-4 bg-gray-200 rounded w-full"></div>
            </div>
          </div>
        ) : (
          <>
            <div className="text-center mb-6">
              <p className="text-4xl font-bold text-gray-800">{offerData.price}</p>
              <p className="text-gray-500">{offerData.term}</p>
            </div>

            <ul className="space-y-3 mb-6">
              {offerData.features.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <Check className="text-green-500 mr-2" size={20} />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </>
        )}

        <button className="w-full bg-protega-600 text-white py-2 rounded-md hover:bg-protega-700 transition-colors font-medium">
          {loading ? 'Loading...' : 'Subscribe Now'}
        </button>
      </div>
    </motion.div>
  );
};

export default OfferCard;
