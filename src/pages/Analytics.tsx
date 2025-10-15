import { motion } from 'framer-motion';
import { TrendingUp, Users, DollarSign, Target, BarChart3, PieChart } from 'lucide-react';

export const Analytics = () => {
  const kpis = [
    {
      title: 'Total Investment',
      value: '₹153 Cr',
      change: '+18.2%',
      icon: DollarSign,
      color: 'from-green-500 to-green-600',
    },
    {
      title: 'Success Rate',
      value: '87.5%',
      change: '+5.3%',
      icon: Target,
      color: 'from-blue-500 to-blue-600',
    },
    {
      title: 'Avg. Project Duration',
      value: '8.3 months',
      change: '-12.5%',
      icon: BarChart3,
      color: 'from-purple-500 to-purple-600',
    },
    {
      title: 'Beneficiary Satisfaction',
      value: '92%',
      change: '+8.7%',
      icon: Users,
      color: 'from-orange-500 to-orange-600',
    },
  ];

  const categoryPerformance = [
    { category: 'Income Generation', projects: 142, budget: '₹58 Cr', satisfaction: 91, growth: 15 },
    { category: 'Skill Development', projects: 128, budget: '₹46 Cr', satisfaction: 94, growth: 22 },
    { category: 'Infrastructure Support', projects: 72, budget: '₹49 Cr', satisfaction: 89, growth: 12 },
  ];

  const monthlyTrends = [
    { month: 'Jan', beneficiaries: 820, projects: 28 },
    { month: 'Feb', beneficiaries: 950, projects: 32 },
    { month: 'Mar', beneficiaries: 1100, projects: 35 },
    { month: 'Apr', beneficiaries: 1280, projects: 38 },
    { month: 'May', beneficiaries: 1450, projects: 42 },
    { month: 'Jun', beneficiaries: 1620, projects: 45 },
  ];

  const stateComparison = [
    { state: 'Maharashtra', score: 94, projects: 68, budget: '₹28 Cr' },
    { state: 'Karnataka', score: 91, projects: 55, budget: '₹22 Cr' },
    { state: 'Tamil Nadu', score: 89, projects: 52, budget: '₹21 Cr' },
    { state: 'Uttar Pradesh', score: 86, projects: 48, budget: '₹19 Cr' },
    { state: 'West Bengal', score: 83, projects: 42, budget: '₹17 Cr' },
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
          <h1 className="text-4xl font-bold mb-2 text-gray-900 dark:text-white">Analytics</h1>
          <p className="text-gray-600 dark:text-gray-400">
            Comprehensive insights and performance metrics
          </p>
        </motion.div>

        {/* KPIs */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {kpis.map((kpi, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800 shadow-lg"
            >
              <div className={`w-12 h-12 bg-gradient-to-br ${kpi.color} rounded-xl flex items-center justify-center mb-4`}>
                <kpi.icon className="text-white" size={24} />
              </div>
              <h3 className="text-gray-600 dark:text-gray-400 text-sm mb-2">{kpi.title}</h3>
              <div className="flex items-end justify-between">
                <p className="text-3xl font-bold text-gray-900 dark:text-white">{kpi.value}</p>
                <span className="text-green-600 dark:text-green-400 text-sm font-semibold">
                  {kpi.change}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Category Performance */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800 mb-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <PieChart className="text-primary-500" size={28} />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Category Performance</h2>
          </div>

          <div className="space-y-6">
            {categoryPerformance.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="p-4 bg-gray-50 dark:bg-gray-800 rounded-xl"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">{category.category}</h3>
                  <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400
                                 rounded-full text-sm font-semibold">
                    +{category.growth}% growth
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-3">
                  <div>
                    <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Projects</div>
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">{category.projects}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Budget</div>
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">{category.budget}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Satisfaction</div>
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">{category.satisfaction}%</div>
                  </div>
                </div>

                <div className="relative h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${category.satisfaction}%` }}
                    transition={{ delay: 0.6 + index * 0.1, duration: 0.8 }}
                    className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary-500 to-primary-600"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Monthly Trends */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800 mb-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <TrendingUp className="text-primary-500" size={28} />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Monthly Trends</h2>
          </div>

          <div className="space-y-4">
            {monthlyTrends.map((trend, index) => {
              const maxBeneficiaries = Math.max(...monthlyTrends.map(t => t.beneficiaries));
              const maxProjects = Math.max(...monthlyTrends.map(t => t.projects));

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.9 + index * 0.05 }}
                  className="grid grid-cols-12 gap-4 items-center"
                >
                  <div className="col-span-2 font-semibold text-gray-900 dark:text-white">{trend.month}</div>

                  <div className="col-span-5">
                    <div className="text-xs text-gray-600 dark:text-gray-400 mb-1">
                      Beneficiaries: {trend.beneficiaries}
                    </div>
                    <div className="h-8 bg-gray-200 dark:bg-gray-800 rounded-lg overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${(trend.beneficiaries / maxBeneficiaries) * 100}%` }}
                        transition={{ delay: 1 + index * 0.05, duration: 0.8 }}
                        className="h-full bg-gradient-to-r from-blue-500 to-blue-600"
                      />
                    </div>
                  </div>

                  <div className="col-span-5">
                    <div className="text-xs text-gray-600 dark:text-gray-400 mb-1">
                      Projects: {trend.projects}
                    </div>
                    <div className="h-8 bg-gray-200 dark:bg-gray-800 rounded-lg overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${(trend.projects / maxProjects) * 100}%` }}
                        transition={{ delay: 1 + index * 0.05, duration: 0.8 }}
                        className="h-full bg-gradient-to-r from-green-500 to-green-600"
                      />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* State Comparison */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800"
        >
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">State-wise Performance</h2>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-800">
                  <th className="text-left py-3 px-4 text-gray-700 dark:text-gray-300">Rank</th>
                  <th className="text-left py-3 px-4 text-gray-700 dark:text-gray-300">State</th>
                  <th className="text-center py-3 px-4 text-gray-700 dark:text-gray-300">Performance Score</th>
                  <th className="text-right py-3 px-4 text-gray-700 dark:text-gray-300">Projects</th>
                  <th className="text-right py-3 px-4 text-gray-700 dark:text-gray-300">Budget Allocated</th>
                </tr>
              </thead>
              <tbody>
                {stateComparison.map((state, index) => (
                  <motion.tr
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.3 + index * 0.1 }}
                    className="border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800"
                  >
                    <td className="py-4 px-4">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold ${
                        index === 0 ? 'bg-yellow-500' :
                        index === 1 ? 'bg-gray-400' :
                        index === 2 ? 'bg-orange-600' :
                        'bg-gray-500'
                      }`}>
                        {index + 1}
                      </div>
                    </td>
                    <td className="py-4 px-4 font-semibold text-gray-900 dark:text-white">{state.state}</td>
                    <td className="py-4 px-4">
                      <div className="flex items-center justify-center gap-3">
                        <div className="flex-1 h-2 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden max-w-[120px]">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${state.score}%` }}
                            transition={{ delay: 1.4 + index * 0.1, duration: 0.8 }}
                            className="h-full bg-gradient-to-r from-primary-500 to-primary-600"
                          />
                        </div>
                        <span className="font-bold min-w-[40px] text-right text-gray-900 dark:text-white">{state.score}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-right font-semibold text-gray-900 dark:text-white">{state.projects}</td>
                    <td className="py-4 px-4 text-right font-semibold text-gray-900 dark:text-white">{state.budget}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
