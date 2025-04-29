import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import OfferCard from '../components/OfferCard';

interface OfferData {
  id: number;
  price: string;
  term: string;
  features: string[];
}

const Storefront: React.FC = () => {
  const [offers, setOffers] = useState<OfferData[]>([]);
  const [loading, setLoading] = useState(true);

  // Simulate fetching mock data from API
  useEffect(() => {
    const fetchMockOffers = () => {
      setTimeout(() => {
        setOffers([
          {
            id: 1,
            price: '₹499',
            term: 'Monthly',
            features: [
              'Unlimited transactions',
              'Advanced security features',
              '24/7 customer support',
              'Detailed analytics',
            ],
          },
          {
            id: 2,
            price: '₹1299',
            term: 'Quarterly',
            features: [
              'Unlimited transactions',
              'Priority support',
              'Business insights',
              'Dedicated dashboard',
            ],
          },
          {
            id: 3,
            price: '₹4999',
            term: 'Yearly',
            features: [
              'Everything in Quarterly',
              'Custom integrations',
              'White-labeling support',
              'Account manager',
            ],
          },
        ]);
        setLoading(false);
      }, 1000);
    };

    fetchMockOffers();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen bg-gray-900"
    >
      <Header isStorefront={true} />
      <main>
        <HeroSection />
        <section className="container mx-auto px-4 py-12">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8">Special Offers</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {offers.map((offer) => (
                <OfferCard
                  key={offer.id}
                  offerData={{
                    price: offer.price,
                    term: offer.term,
                    features: offer.features
                  }}
                  loading={loading}
                />
              ))}

            </div>
          </div>
        </section>
      </main>
    </motion.div>
  );
};

export default Storefront;
