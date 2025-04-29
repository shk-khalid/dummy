import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import { Search, Filter, FileText, Calendar } from 'lucide-react';

interface Policy {
  id: string;
  policyNumber: string;
  productName: string;
  startDate: string;
  endDate: string;
}

// Integrated Policy Service
const policyService = {
  getPolicies: async (merchantId: string): Promise<Policy[]> => {
    // Simulated API delay
    await new Promise(resolve => setTimeout(resolve, 800));

    // Generate 15 mock policies with only required fields
    return Array.from({ length: 15 }, (_, i) => {
      const startDate = new Date();
      startDate.setMonth(startDate.getMonth() - Math.floor(Math.random() * 6));

      const endDate = new Date(startDate);
      endDate.setFullYear(endDate.getFullYear() + 1);

      return {
        id: `policy-${i + 1}`,
        policyNumber: `POL-${Math.floor(10000 + Math.random() * 90000)}`,
        productName: [
          'Mobile Protection Plan',
          'Extended Warranty',
          'Accidental Damage Coverage',
          'Travel Insurance',
          'Home Electronics Protection'
        ][Math.floor(Math.random() * 5)],
        startDate: startDate.toISOString().split('T')[0],
        endDate: endDate.toISOString().split('T')[0]
      };
    });
  }
};

const PolicyCard: React.FC<{ policy: Policy }> = ({ policy }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 p-6">
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-protega-50 rounded-lg">
            <FileText className="h-5 w-5 text-protega-600" />
          </div>
          <span className="text-sm font-semibold text-gray-900">{policy.policyNumber}</span>
        </div>
      </div>

      <h3 className="text-lg font-medium text-gray-900 mb-3">{policy.productName}</h3>

      <div className="flex items-center text-sm text-gray-600 bg-gray-50 rounded-lg p-2">
        <Calendar className="h-4 w-4 text-gray-400 mr-2" />
        <span>{policy.startDate} - {policy.endDate}</span>
      </div>
    </div>
  );
};

const Policies: React.FC = () => {
  const [policies, setPolicies] = useState<Policy[]>([]);
  const [filteredPolicies, setFilteredPolicies] = useState<Policy[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  useEffect(() => {
    const fetchPolicies = async () => {
      try {
        const fetchedPolicies = await policyService.getPolicies('merchant-123');
        setPolicies(fetchedPolicies);
        setFilteredPolicies(fetchedPolicies);
      } catch (error) {
        console.error('Failed to fetch policies:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPolicies();
  }, []);

  useEffect(() => {
    let result = policies;

    /* if (statusFilter !== 'all') {
      result = result.filter(policy => policy.status === statusFilter);
    } */

    if (searchTerm) {
      const lowercasedTerm = searchTerm.toLowerCase();
      result = result.filter(
        policy =>
          policy.policyNumber.toLowerCase().includes(lowercasedTerm) ||
          policy.productName.toLowerCase().includes(lowercasedTerm)
      );
    }

    setFilteredPolicies(result);
  }, [policies, searchTerm, statusFilter]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen bg-gray-50"
    >
      <Header isStorefront={false} />

      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Insurance Policies</h1>
              <p className="text-gray-600 mt-1">View and manage all insurance policies</p>
            </div>
          </div>
        </div>
      </div>

      <main className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-sm">
          <div className="p-6 border-b border-gray-100">
            <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-4">
              <div className="relative flex-1">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  className="block w-full pl-10 pr-3 py-2.5 border border-gray-200 rounded-lg bg-gray-50 text-gray-900 placeholder-gray-500"
                  placeholder="Search policies..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              {/* <div className="flex-shrink-0">
                <div className="relative inline-block text-left">
                  <div className="flex items-center">
                    <Filter className="h-5 w-5 text-gray-400 mr-2" />
                    <select
                      className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-protega-500 focus:border-protega-500 sm:text-sm"
                      value={statusFilter}
                      onChange={(e) => setStatusFilter(e.target.value)}
                    >
                      <option value="all">All Statuses</option>
                      <option value="active">Active</option>
                      <option value="pending">Pending</option>
                      <option value="expired">Expired</option>
                    </select>
                  </div>
                </div>
              </div> */}
            </div>
          </div>

          {loading ? (
            <div className="p-6">
              <div className="animate-pulse space-y-4">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="h-32 bg-gray-100 rounded-xl"></div>
                ))}
              </div>
            </div>
          ) : filteredPolicies.length === 0 ? (
            <div className="p-12 text-center">
              <div className="mx-auto w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                <FileText className="h-6 w-6 text-gray-400" />
              </div>
              <h3 className="text-lg font-medium text-gray-900">No policies found</h3>
              <p className="mt-2 text-sm text-gray-500 max-w-sm mx-auto">
                {searchTerm || statusFilter !== 'all'
                  ? 'Try adjusting your search or filter to find what you\'re looking for.'
                  : 'Get started by creating a new policy.'}
              </p>
            </div>
          ) : (
            <div className="p-6 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {filteredPolicies.map(policy => (
                <PolicyCard key={policy.id} policy={policy} />
              ))}
            </div>
          )}

          <div className="px-6 py-4 bg-gray-50 text-right rounded-b-xl border-t border-gray-100">
            <div className="flex justify-between items-center">
              <div className="text-sm text-gray-600">
                Showing <span className="font-medium text-gray-900">{filteredPolicies.length}</span> of{' '}
                <span className="font-medium text-gray-900">{policies.length}</span> policies
              </div>
            </div>
          </div>
        </div>
      </main>
    </motion.div>
  );
};

export default Policies;