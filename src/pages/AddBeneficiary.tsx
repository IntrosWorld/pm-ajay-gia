import { motion } from 'framer-motion';
import { Save, Sparkles, TrendingUp, AlertCircle, CheckCircle } from 'lucide-react';
import { useState } from 'react';

export const AddBeneficiary = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    state: '',
    district: '',
    income: '',
    education: '',
    occupation: '',
    familyMembers: '',
  });

  const [aiScore, setAiScore] = useState<number | null>(null);
  const [analyzing, setAnalyzing] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const runAIAnalysis = () => {
    setAnalyzing(true);
    // Simulate AI analysis
    setTimeout(() => {
      // Mock eligibility calculation based on form data
      let score = 0;

      if (parseInt(formData.age) >= 18 && parseInt(formData.age) <= 45) score += 25;
      if (parseInt(formData.income) < 100000) score += 35;
      if (['Below 10th', '10th Pass', '12th Pass'].includes(formData.education)) score += 25;
      if (parseInt(formData.familyMembers) > 3) score += 15;

      setAiScore(Math.min(score, 100));
      setAnalyzing(false);
    }, 2000);
  };

  const getEligibilityStatus = (score: number) => {
    if (score >= 75) return { status: 'Highly Eligible', color: 'text-green-600 dark:text-green-400', bg: 'bg-green-100 dark:bg-green-900/30' };
    if (score >= 50) return { status: 'Eligible', color: 'text-blue-600 dark:text-blue-400', bg: 'bg-blue-100 dark:bg-blue-900/30' };
    if (score >= 30) return { status: 'Partially Eligible', color: 'text-yellow-600 dark:text-yellow-400', bg: 'bg-yellow-100 dark:bg-yellow-900/30' };
    return { status: 'Not Eligible', color: 'text-red-600 dark:text-red-400', bg: 'bg-red-100 dark:bg-red-900/30' };
  };

  return (
    <div className="min-h-screen pt-24 pb-12 px-4 bg-gray-50 dark:bg-gray-950">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold mb-2 text-gray-900 dark:text-white">Add New Beneficiary</h1>
          <p className="text-gray-600 dark:text-gray-400">
            Enter beneficiary details and get AI-powered eligibility analysis
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Form Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-2 bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800"
          >
            <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Beneficiary Information</h2>

            <div className="grid md:grid-cols-2 gap-4">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700
                           rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-gray-900 dark:text-white"
                  placeholder="Enter full name"
                />
              </div>

              {/* Age */}
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">Age</label>
                <input
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700
                           rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-gray-900 dark:text-white"
                  placeholder="Enter age"
                />
              </div>

              {/* Gender */}
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">Gender</label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700
                           rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-gray-900 dark:text-white"
                >
                  <option value="">Select gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              {/* State */}
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">State</label>
                <select
                  name="state"
                  value={formData.state}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700
                           rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-gray-900 dark:text-white"
                >
                  <option value="">Select state</option>
                  <option value="Maharashtra">Maharashtra</option>
                  <option value="Karnataka">Karnataka</option>
                  <option value="Tamil Nadu">Tamil Nadu</option>
                  <option value="Uttar Pradesh">Uttar Pradesh</option>
                  <option value="West Bengal">West Bengal</option>
                </select>
              </div>

              {/* District */}
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">District</label>
                <input
                  type="text"
                  name="district"
                  value={formData.district}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700
                           rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-gray-900 dark:text-white"
                  placeholder="Enter district"
                />
              </div>

              {/* Annual Income */}
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">Annual Income (₹)</label>
                <input
                  type="number"
                  name="income"
                  value={formData.income}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700
                           rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-gray-900 dark:text-white"
                  placeholder="Enter annual income"
                />
              </div>

              {/* Education */}
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">Education Level</label>
                <select
                  name="education"
                  value={formData.education}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700
                           rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-gray-900 dark:text-white"
                >
                  <option value="">Select education</option>
                  <option value="Below 10th">Below 10th</option>
                  <option value="10th Pass">10th Pass</option>
                  <option value="12th Pass">12th Pass</option>
                  <option value="Graduate">Graduate</option>
                  <option value="Post Graduate">Post Graduate</option>
                </select>
              </div>

              {/* Occupation */}
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">Occupation</label>
                <input
                  type="text"
                  name="occupation"
                  value={formData.occupation}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700
                           rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-gray-900 dark:text-white"
                  placeholder="Enter occupation"
                />
              </div>

              {/* Family Members */}
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">Family Members</label>
                <input
                  type="number"
                  name="familyMembers"
                  value={formData.familyMembers}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700
                           rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-gray-900 dark:text-white"
                  placeholder="Number of family members"
                />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 mt-6">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={runAIAnalysis}
                disabled={analyzing}
                className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-xl font-semibold
                         shadow-lg flex items-center gap-2 disabled:opacity-50"
              >
                {analyzing ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Analyzing...</span>
                  </>
                ) : (
                  <>
                    <Sparkles size={20} />
                    <span>Run AI Analysis</span>
                  </>
                )}
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-xl font-semibold
                         shadow-lg flex items-center gap-2"
              >
                <Save size={20} />
                <span>Save Beneficiary</span>
              </motion.button>
            </div>
          </motion.div>

          {/* AI Analysis Panel */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            {/* Eligibility Score */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800">
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="text-purple-600 dark:text-purple-400" size={24} />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">AI Eligibility Score</h3>
              </div>

              {aiScore !== null ? (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 200 }}
                >
                  <div className="relative pt-1">
                    <div className="flex mb-2 items-center justify-between">
                      <div>
                        <span className={`text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full ${getEligibilityStatus(aiScore).bg} ${getEligibilityStatus(aiScore).color}`}>
                          {getEligibilityStatus(aiScore).status}
                        </span>
                      </div>
                      <div className="text-right">
                        <span className="text-4xl font-bold text-gray-900 dark:text-white">{aiScore}%</span>
                      </div>
                    </div>
                    <div className="overflow-hidden h-4 mb-4 text-xs flex rounded-full bg-gray-200 dark:bg-gray-800">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${aiScore}%` }}
                        transition={{ duration: 1, ease: 'easeOut' }}
                        className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center ${
                          aiScore >= 75 ? 'bg-green-500' :
                          aiScore >= 50 ? 'bg-blue-500' :
                          aiScore >= 30 ? 'bg-yellow-500' : 'bg-red-500'
                        }`}
                      ></motion.div>
                    </div>
                  </div>

                  {/* Analysis Breakdown */}
                  <div className="mt-6 space-y-3">
                    <h4 className="font-semibold text-sm text-gray-700 dark:text-gray-300">Analysis Breakdown:</h4>
                    {[
                      { label: 'Age Criteria', score: parseInt(formData.age) >= 18 && parseInt(formData.age) <= 45 ? 25 : 0, icon: CheckCircle },
                      { label: 'Income Level', score: parseInt(formData.income) < 100000 ? 35 : 0, icon: TrendingUp },
                      { label: 'Education Level', score: ['Below 10th', '10th Pass', '12th Pass'].includes(formData.education) ? 25 : 0, icon: CheckCircle },
                      { label: 'Family Size', score: parseInt(formData.familyMembers) > 3 ? 15 : 0, icon: TrendingUp },
                    ].map((item, index) => (
                      <div key={index} className="flex items-center justify-between p-2 bg-gray-50 dark:bg-gray-800 rounded-lg">
                        <div className="flex items-center gap-2">
                          <item.icon size={16} className={item.score > 0 ? 'text-green-600 dark:text-green-400' : 'text-gray-400 dark:text-gray-600'} />
                          <span className="text-sm text-gray-700 dark:text-gray-300">{item.label}</span>
                        </div>
                        <span className="text-sm font-semibold text-gray-900 dark:text-white">+{item.score}%</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ) : (
                <div className="text-center py-8 text-gray-500 dark:text-gray-400">
                  <AlertCircle size={48} className="mx-auto mb-4 opacity-50" />
                  <p>Fill the form and click "Run AI Analysis" to see eligibility score</p>
                </div>
              )}
            </div>

            {/* Recommendations */}
            {aiScore !== null && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800"
              >
                <h3 className="text-lg font-bold mb-4 text-gray-900 dark:text-white">AI Recommendations</h3>
                <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  {aiScore >= 75 ? (
                    <>
                      <p>✓ Highly suitable for Income Generation programs</p>
                      <p>✓ Recommend for Skill Development training</p>
                      <p>✓ Priority candidate for immediate enrollment</p>
                    </>
                  ) : aiScore >= 50 ? (
                    <>
                      <p>✓ Eligible for Skill Development programs</p>
                      <p>• Consider for Infrastructure Support</p>
                      <p>• May need additional documentation review</p>
                    </>
                  ) : (
                    <>
                      <p>• Requires further verification</p>
                      <p>• Consider alternative support programs</p>
                      <p>• Review eligibility criteria</p>
                    </>
                  )}
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};
