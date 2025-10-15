import { motion } from 'framer-motion';
import { Users, TrendingUp, CheckCircle, AlertCircle, ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { useState } from 'react';

export const Dashboard = () => {
  const [timeRange, setTimeRange] = useState('month');

  const stats = [
    {
      title: 'Total Beneficiaries',
      value: '15,847',
      change: '+12.5%',
      isPositive: true,
      icon: Users,
      color: 'from-blue-500 to-blue-600',
    },
    {
      title: 'Active Projects',
      value: '342',
      change: '+8.2%',
      isPositive: true,
      icon: TrendingUp,
      color: 'from-green-500 to-green-600',
    },
    {
      title: 'Completed Projects',
      value: '1,256',
      change: '+15.3%',
      isPositive: true,
      icon: CheckCircle,
      color: 'from-purple-500 to-purple-600',
    },
    {
      title: 'Pending Reviews',
      value: '89',
      change: '-5.4%',
      isPositive: false,
      icon: AlertCircle,
      color: 'from-orange-500 to-orange-600',
    },
  ];

  const recentActivities = [
    { id: 1, action: 'New beneficiary registered', location: 'Maharashtra', time: '5 minutes ago' },
    { id: 2, action: 'Project milestone completed', location: 'Karnataka', time: '15 minutes ago' },
    { id: 3, action: 'Skill training session scheduled', location: 'Tamil Nadu', time: '1 hour ago' },
    { id: 4, action: 'Income generation project approved', location: 'Uttar Pradesh', time: '2 hours ago' },
    { id: 5, action: 'Infrastructure support granted', location: 'West Bengal', time: '3 hours ago' },
  ];

  const projectsByCategory = [
    { category: 'Income Generation', count: 142, percentage: 42, color: 'bg-blue-500' },
    { category: 'Skill Development', count: 128, percentage: 37, color: 'bg-green-500' },
    { category: 'Infrastructure Support', count: 72, percentage: 21, color: 'bg-purple-500' },
  ];

  const topStates = [
    { state: 'Maharashtra', beneficiaries: 2456, growth: 12.5 },
    { state: 'Uttar Pradesh', beneficiaries: 2234, growth: 10.8 },
    { state: 'Karnataka', beneficiaries: 1987, growth: 15.2 },
    { state: 'Tamil Nadu', beneficiaries: 1765, growth: 8.7 },
    { state: 'West Bengal', beneficiaries: 1543, growth: 11.3 },
  ];

  return (
    <div className="min-h-screen pt-24 pb-12 px-4 bg-white dark:bg-gray-950">
      <div className="container mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold mb-2 text-gray-900 dark:text-white">Dashboard</h1>
          <p className="text-gray-600 dark:text-gray-400">
            Overview of AJAYGRAM beneficiary management system
          </p>
        </motion.div>

        {/* Time Range Selector */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8 flex flex-wrap gap-2"
        >
          {['week', 'month', 'quarter', 'year'].map((range) => (
            <button
              key={range}
              onClick={() => setTimeRange(range)}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                timeRange === range
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-900 dark:text-white'
              }`}
            >
              {range.charAt(0).toUpperCase() + range.slice(1)}
            </button>
          ))}
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800 shadow-lg"
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center`}>
                  <stat.icon className="text-white" size={24} />
                </div>
                <div className={`flex items-center space-x-1 ${stat.isPositive ? 'text-green-600' : 'text-red-600'}`}>
                  {stat.isPositive ? <ArrowUpRight size={16} /> : <ArrowDownRight size={16} />}
                  <span className="text-sm font-semibold">{stat.change}</span>
                </div>
              </div>
              <h3 className="text-gray-600 dark:text-gray-400 text-sm mb-1">{stat.title}</h3>
              <p className="text-3xl font-bold text-gray-900 dark:text-white">{stat.value}</p>
            </motion.div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Projects by Category */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="lg:col-span-2 bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800"
          >
            <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Projects by Category</h2>
            <div className="space-y-6">
              {projectsByCategory.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-gray-900 dark:text-white">{project.category}</span>
                    <span className="text-gray-600 dark:text-gray-400">{project.count} projects</span>
                  </div>
                  <div className="relative h-4 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${project.percentage}%` }}
                      transition={{ delay: 0.6 + index * 0.1, duration: 0.8 }}
                      className={`absolute top-0 left-0 h-full ${project.color}`}
                    />
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    {project.percentage}% of total
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Recent Activities */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800"
          >
            <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Recent Activities</h2>
            <div className="space-y-4">
              {recentActivities.map((activity, index) => (
                <motion.div
                  key={activity.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                >
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-sm text-gray-900 dark:text-white">{activity.action}</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">{activity.location}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">{activity.time}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Top Performing States */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="lg:col-span-3 bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800"
          >
            <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Top Performing States</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200 dark:border-gray-800">
                    <th className="text-left py-3 px-4 text-gray-700 dark:text-gray-300">Rank</th>
                    <th className="text-left py-3 px-4 text-gray-700 dark:text-gray-300">State</th>
                    <th className="text-right py-3 px-4 text-gray-700 dark:text-gray-300">Beneficiaries</th>
                    <th className="text-right py-3 px-4 text-gray-700 dark:text-gray-300">Growth</th>
                  </tr>
                </thead>
                <tbody>
                  {topStates.map((state, index) => (
                    <motion.tr
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.7 + index * 0.1 }}
                      className="border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                    >
                      <td className="py-4 px-4">
                        <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center text-white font-bold">
                          {index + 1}
                        </div>
                      </td>
                      <td className="py-4 px-4 font-semibold text-gray-900 dark:text-white">{state.state}</td>
                      <td className="py-4 px-4 text-right text-gray-900 dark:text-white">{state.beneficiaries.toLocaleString()}</td>
                      <td className="py-4 px-4 text-right">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400">
                          <ArrowUpRight size={14} className="mr-1" />
                          {state.growth}%
                        </span>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
