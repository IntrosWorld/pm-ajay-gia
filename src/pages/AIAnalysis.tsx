import { motion } from 'framer-motion';
import {
  CpuChipIcon,
  ArrowTrendingUpIcon,
  ExclamationTriangleIcon,
  CheckCircleIcon,
  SparklesIcon
} from '@heroicons/react/24/outline';
import { useState } from 'react';

export const AIAnalysis = () => {
  const [selectedModel, setSelectedModel] = useState('eligibility');

  const mlModels = [
    {
      id: 'eligibility',
      name: 'Eligibility Prediction',
      accuracy: 94.5,
      description: 'Predicts beneficiary eligibility based on demographics and economic factors',
      icon: CheckCircleIcon,
      color: 'from-green-500 to-green-600',
    },
    {
      id: 'fraud',
      name: 'Fraud Detection',
      accuracy: 91.2,
      description: 'Identifies potential fraudulent applications and duplicate entries',
      icon: ExclamationTriangleIcon,
      color: 'from-red-500 to-red-600',
    },
    {
      id: 'impact',
      name: 'Impact Prediction',
      accuracy: 88.7,
      description: 'Forecasts program impact and success probability for beneficiaries',
      icon: ArrowTrendingUpIcon,
      color: 'from-blue-500 to-blue-600',
    },
    {
      id: 'recommendation',
      name: 'Program Recommendation',
      accuracy: 92.3,
      description: 'Suggests most suitable programs based on beneficiary profile',
      icon: SparklesIcon,
      color: 'from-purple-500 to-purple-600',
    },
  ];

  const recentPredictions = [
    { id: 'BEN1234', name: 'Rajesh Kumar', score: 87, status: 'Eligible', program: 'Income Generation', confidence: 94 },
    { id: 'BEN1235', name: 'Priya Sharma', score: 92, status: 'Highly Eligible', program: 'Skill Development', confidence: 96 },
    { id: 'BEN1236', name: 'Amit Patel', score: 45, status: 'Review Required', program: 'Infrastructure Support', confidence: 78 },
    { id: 'BEN1237', name: 'Sunita Devi', score: 78, status: 'Eligible', program: 'Income Generation', confidence: 89 },
    { id: 'BEN1238', name: 'Mohammed Ali', score: 35, status: 'Not Eligible', program: '-', confidence: 91 },
  ];

  const insights = [
    {
      title: 'High Risk Applications',
      value: '23',
      change: '-12%',
      description: 'Applications flagged for review',
      icon: ExclamationTriangleIcon,
      color: 'text-red-600 dark:text-red-400',
    },
    {
      title: 'Auto-Approved',
      value: '1,456',
      change: '+18%',
      description: 'Applications approved by AI',
      icon: CheckCircleIcon,
      color: 'text-green-600 dark:text-green-400',
    },
    {
      title: 'Avg Confidence',
      value: '92.3%',
      change: '+3.2%',
      description: 'Model prediction confidence',
      icon: CpuChipIcon,
      color: 'text-blue-600 dark:text-blue-400',
    },
    {
      title: 'Processing Time',
      value: '2.3s',
      change: '-45%',
      description: 'Avg time per application',
      icon: ArrowTrendingUpIcon,
      color: 'text-purple-600 dark:text-purple-400',
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-12 px-4 bg-gray-50 dark:bg-gray-950">
      <div className="container mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex items-center gap-3 mb-2">
            <CpuChipIcon className="w-10 h-10 text-purple-600 dark:text-purple-400" />
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white">AI/ML Analysis</h1>
          </div>
          <p className="text-gray-600 dark:text-gray-400">
            Machine learning powered beneficiary analysis and predictions
          </p>
        </motion.div>

        {/* Insights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {insights.map((insight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800"
            >
              <insight.icon className={`w-7 h-7 ${insight.color}`} />
              <h3 className="text-sm text-gray-600 dark:text-gray-400 mt-3">{insight.title}</h3>
              <div className="flex items-end justify-between mt-2">
                <p className="text-3xl font-bold text-gray-900 dark:text-white">{insight.value}</p>
                <span className={`text-sm font-semibold ${insight.change.startsWith('+') ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
                  {insight.change}
                </span>
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-500 mt-2">{insight.description}</p>
            </motion.div>
          ))}
        </div>

        {/* ML Models */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800 mb-8"
        >
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Active ML Models</h2>

          <div className="grid md:grid-cols-2 gap-4">
            {mlModels.map((model, index) => (
              <motion.div
                key={model.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                onClick={() => setSelectedModel(model.id)}
                className={`p-6 rounded-xl border-2 cursor-pointer transition-all ${
                  selectedModel === model.id
                    ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/20'
                    : 'border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700'
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${model.color} rounded-xl flex items-center justify-center`}>
                    <model.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">{model.accuracy}%</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">Accuracy</div>
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">{model.name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{model.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Recent Predictions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800"
        >
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Recent AI Predictions</h2>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-800">
                  <th className="text-left py-3 px-4 text-gray-700 dark:text-gray-300">Beneficiary ID</th>
                  <th className="text-left py-3 px-4 text-gray-700 dark:text-gray-300">Name</th>
                  <th className="text-center py-3 px-4 text-gray-700 dark:text-gray-300">Eligibility Score</th>
                  <th className="text-center py-3 px-4 text-gray-700 dark:text-gray-300">Status</th>
                  <th className="text-left py-3 px-4 text-gray-700 dark:text-gray-300">Recommended Program</th>
                  <th className="text-center py-3 px-4 text-gray-700 dark:text-gray-300">Confidence</th>
                </tr>
              </thead>
              <tbody>
                {recentPredictions.map((pred, index) => (
                  <motion.tr
                    key={pred.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.9 + index * 0.1 }}
                    className="border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800"
                  >
                    <td className="py-4 px-4">
                      <span className="font-mono text-sm text-gray-900 dark:text-white">{pred.id}</span>
                    </td>
                    <td className="py-4 px-4 text-gray-900 dark:text-white">{pred.name}</td>
                    <td className="py-4 px-4 text-center">
                      <div className="flex items-center justify-center gap-2">
                        <div className="flex-1 max-w-[100px] h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                          <div
                            className={`h-full ${
                              pred.score >= 75 ? 'bg-green-500' :
                              pred.score >= 50 ? 'bg-blue-500' :
                              pred.score >= 30 ? 'bg-yellow-500' : 'bg-red-500'
                            }`}
                            style={{ width: `${pred.score}%` }}
                          />
                        </div>
                        <span className="font-bold text-gray-900 dark:text-white">{pred.score}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-center">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        pred.status === 'Highly Eligible' ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400' :
                        pred.status === 'Eligible' ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400' :
                        pred.status === 'Review Required' ? 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400' :
                        'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400'
                      }`}>
                        {pred.status}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-gray-900 dark:text-white">{pred.program}</td>
                    <td className="py-4 px-4 text-center">
                      <span className="font-semibold text-gray-900 dark:text-white">{pred.confidence}%</span>
                    </td>
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
