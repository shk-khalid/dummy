import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import { LineChart, ArrowRight, BarChart, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

const Merchant: React.FC = () => {
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
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-800">Merchant Dashboard</h1>
              <p className="text-gray-600">Welcome back! Here's your business at a glance</p>
            </div>
            <div className="mt-4 md:mt-0 flex space-x-3">
              <Link 
                to="/merchant/policies"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-protega-600 hover:bg-protega-700"
              >
                <FileText className="mr-2 h-4 w-4" />
                View Policies
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium text-gray-700">Total Revenue</h3>
              <LineChart className="text-protega-600" size={24} />
            </div>
            <p className="text-3xl font-bold text-gray-900">₹187,429</p>
            <div className="mt-2 flex items-center text-sm">
              <span className="text-green-500 font-medium">+12.5%</span>
              <span className="text-gray-500 ml-2">from last month</span>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium text-gray-700">Active Customers</h3>
              <BarChart className="text-protega-600" size={24} />
            </div>
            <p className="text-3xl font-bold text-gray-900">2,413</p>
            <div className="mt-2 flex items-center text-sm">
              <span className="text-green-500 font-medium">+7.2%</span>
              <span className="text-gray-500 ml-2">from last month</span>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium text-gray-700">Conversion Rate</h3>
              <BarChart className="text-protega-600" size={24} />
            </div>
            <p className="text-3xl font-bold text-gray-900">3.8%</p>
            <div className="mt-2 flex items-center text-sm">
              <span className="text-red-500 font-medium">-0.5%</span>
              <span className="text-gray-500 ml-2">from last month</span>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-800">Recent Transactions</h2>
          </div>
          <div className="px-6 py-4">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                    <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {[1, 2, 3, 4, 5].map((item) => (
                    <tr key={item} className="hover:bg-gray-50">
                      <td className="px-4 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="w-8 h-8 bg-protega-600 rounded-full flex items-center justify-center text-white font-medium">
                            {String.fromCharCode(64 + item)}
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">Customer {item}</div>
                            <div className="text-sm text-gray-500">customer{item}@example.com</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">₹{(499 * item).toLocaleString()}</div>
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          item % 3 === 0 ? 'bg-yellow-100 text-yellow-800' : 
                          item % 2 === 0 ? 'bg-green-100 text-green-800' : 
                          'bg-gray-100 text-gray-800'
                        }`}>
                          {item % 3 === 0 ? 'Pending' : item % 2 === 0 ? 'Completed' : 'Processing'}
                        </span>
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                        {new Date(2023, 10, item).toLocaleDateString()}
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button className="text-protega-600 hover:text-protega-800 flex items-center space-x-1 ml-auto">
                          <span>View</span>
                          <ArrowRight size={16} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </motion.div>
  );
};

export default Merchant;