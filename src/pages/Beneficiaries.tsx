import { motion } from 'framer-motion';
import { Search, Filter, Download, Eye, MapPin, Phone, Mail } from 'lucide-react';
import { useState } from 'react';

export const Beneficiaries = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const beneficiaries = [
    {
      id: 'BEN001',
      name: 'Rajesh Kumar',
      location: 'Mumbai, Maharashtra',
      category: 'Income Generation',
      status: 'Active',
      projects: 2,
      phone: '+91 98765 43210',
      email: 'rajesh.kumar@example.com',
    },
    {
      id: 'BEN002',
      name: 'Priya Sharma',
      location: 'Bangalore, Karnataka',
      category: 'Skill Development',
      status: 'Active',
      projects: 1,
      phone: '+91 98765 43211',
      email: 'priya.sharma@example.com',
    },
    {
      id: 'BEN003',
      name: 'Amit Patel',
      location: 'Ahmedabad, Gujarat',
      category: 'Infrastructure Support',
      status: 'Completed',
      projects: 3,
      phone: '+91 98765 43212',
      email: 'amit.patel@example.com',
    },
    {
      id: 'BEN004',
      name: 'Sunita Devi',
      location: 'Lucknow, Uttar Pradesh',
      category: 'Income Generation',
      status: 'Active',
      projects: 1,
      phone: '+91 98765 43213',
      email: 'sunita.devi@example.com',
    },
    {
      id: 'BEN005',
      name: 'Mohammed Ali',
      location: 'Hyderabad, Telangana',
      category: 'Skill Development',
      status: 'Active',
      projects: 2,
      phone: '+91 98765 43214',
      email: 'mohammed.ali@example.com',
    },
  ];

  const categories = ['all', 'Income Generation', 'Skill Development', 'Infrastructure Support'];

  const filteredBeneficiaries = beneficiaries.filter((ben) => {
    const matchesSearch = ben.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         ben.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || ben.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen pt-24 pb-12 px-4 bg-white dark:bg-gray-950">
      <div className="container mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold mb-2 text-gray-900 dark:text-white">Beneficiaries</h1>
          <p className="text-gray-600 dark:text-gray-400">
            Manage and track beneficiary information
          </p>
        </motion.div>

        {/* Filters and Search */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800 mb-6"
        >
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search by name or ID..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700
                         rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center gap-2">
              <Filter size={20} className="text-gray-400" />
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${
                    selectedCategory === category
                      ? 'bg-primary-600 text-white shadow-lg'
                      : 'bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-900 dark:text-white'
                  }`}
                >
                  {category === 'all' ? 'All' : category}
                </button>
              ))}
            </div>

            {/* Export Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-xl font-semibold
                       flex items-center space-x-2 shadow-lg"
            >
              <Download size={20} />
              <span>Export</span>
            </motion.button>
          </div>
        </motion.div>

        {/* Stats Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6"
        >
          <div className="bg-white dark:bg-gray-900 rounded-xl p-4 border border-gray-200 dark:border-gray-800">
            <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Total</div>
            <div className="text-2xl font-bold text-gray-900 dark:text-white">{beneficiaries.length}</div>
          </div>
          <div className="bg-white dark:bg-gray-900 rounded-xl p-4 border border-gray-200 dark:border-gray-800">
            <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Active</div>
            <div className="text-2xl font-bold text-green-600 dark:text-green-400">
              {beneficiaries.filter(b => b.status === 'Active').length}
            </div>
          </div>
          <div className="bg-white dark:bg-gray-900 rounded-xl p-4 border border-gray-200 dark:border-gray-800">
            <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Completed</div>
            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              {beneficiaries.filter(b => b.status === 'Completed').length}
            </div>
          </div>
          <div className="bg-white dark:bg-gray-900 rounded-xl p-4 border border-gray-200 dark:border-gray-800">
            <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Filtered</div>
            <div className="text-2xl font-bold text-gray-900 dark:text-white">{filteredBeneficiaries.length}</div>
          </div>
        </motion.div>

        {/* Beneficiaries List */}
        <div className="grid gap-4">
          {filteredBeneficiaries.map((beneficiary, index) => (
            <motion.div
              key={beneficiary.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.05 }}
              whileHover={{ scale: 1.01 }}
              className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800
                       hover:shadow-xl transition-shadow"
            >
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                <div className="flex items-start gap-4 flex-1">
                  {/* Avatar */}
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full
                               flex items-center justify-center text-white text-xl font-bold flex-shrink-0">
                    {beneficiary.name.split(' ').map(n => n[0]).join('')}
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">{beneficiary.name}</h3>
                      <span className="px-3 py-1 text-xs font-semibold rounded-full bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white">
                        {beneficiary.id}
                      </span>
                      <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                        beneficiary.status === 'Active'
                          ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400'
                          : 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400'
                      }`}>
                        {beneficiary.status}
                      </span>
                    </div>

                    <div className="grid md:grid-cols-2 gap-2 text-sm text-gray-600 dark:text-gray-400">
                      <div className="flex items-center gap-2">
                        <MapPin size={16} />
                        <span>{beneficiary.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone size={16} />
                        <span>{beneficiary.phone}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Mail size={16} />
                        <span className="truncate">{beneficiary.email}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold">Category:</span>
                        <span>{beneficiary.category}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-4 lg:flex-col lg:items-end">
                  <div className="text-center">
                    <div className="text-2xl font-bold">{beneficiary.projects}</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">Projects</div>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg
                             flex items-center gap-2 font-medium"
                  >
                    <Eye size={18} />
                    <span>View Details</span>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* No Results */}
        {filteredBeneficiaries.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              No beneficiaries found matching your criteria
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
};
