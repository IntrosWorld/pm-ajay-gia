import { motion } from 'framer-motion';
import { ArrowRight, Users, TrendingUp, Shield, Database, BarChart3, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Home = () => {
  const features = [
    {
      icon: Users,
      title: 'Accurate Beneficiary Targeting',
      description: 'Identify and reach the right SC beneficiaries with data-driven precision.',
    },
    {
      icon: Database,
      title: 'Centralized Data Management',
      description: 'Unified platform integrating fragmented beneficiary data across departments.',
    },
    {
      icon: BarChart3,
      title: 'Real-time Monitoring',
      description: 'Track project progress and beneficiary outcomes in real-time.',
    },
    {
      icon: Shield,
      title: 'Enhanced Transparency',
      description: 'Reduce leakages and improve accountability with digital tracking.',
    },
    {
      icon: TrendingUp,
      title: 'Skill Development Focus',
      description: 'Data-driven insights for training and employability programs.',
    },
    {
      icon: CheckCircle,
      title: 'Income Generation Support',
      description: 'Support entrepreneurship and livelihood enhancement initiatives.',
    },
  ];

  const challenges = [
    'High risk of inclusion/exclusion errors due to manual selection',
    'Poor tracking of beneficiary outcomes and progress',
    'Fragmented beneficiary data across departments',
    'Limited interoperability between state databases',
  ];

  const impactGoals = [
    'Accurate targeting of eligible SC beneficiaries',
    'End-to-end digital project tracking',
    'Improved livelihood opportunities',
    'Enhanced transparency and accountability',
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 -z-10" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            className="inline-block mb-4 px-4 py-2 bg-primary-100 dark:bg-primary-900/30 rounded-full"
          >
            <span className="text-primary-700 dark:text-primary-300 font-semibold text-sm">
              Pradhan Mantri Anusuchit Jaati Abhyuday Yojana
            </span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary-600 to-blue-600 dark:from-primary-400 dark:to-blue-400 bg-clip-text text-transparent">
            GIA Beneficiary
            <br />
            Management System
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            Empowering SC communities through accurate targeting, digital tracking, and data-driven initiatives
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-stretch sm:items-center">
            <Link to="/dashboard" className="w-full sm:w-auto">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-xl font-semibold
                         shadow-lg shadow-primary-500/30 flex items-center justify-center space-x-2"
              >
                <span>View Dashboard</span>
                <ArrowRight size={20} />
              </motion.button>
            </Link>

            <Link to="/beneficiaries" className="w-full sm:w-auto">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full px-8 py-4 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700
                         text-gray-900 dark:text-white rounded-xl font-semibold border-2 border-gray-200 dark:border-gray-700"
              >
                Explore Beneficiaries
              </motion.button>
            </Link>
          </div>
        </motion.div>

        {/* Decorative elements */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-20 left-10 w-20 h-20 bg-primary-200 dark:bg-primary-900/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            y: [0, 20, 0],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute bottom-20 right-10 w-32 h-32 bg-blue-200 dark:bg-blue-900/20 rounded-full blur-3xl"
        />
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-white dark:bg-gray-950">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Key Features</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Comprehensive solutions for beneficiary management
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="p-6 bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800
                         hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-14 h-14 bg-primary-100 dark:bg-primary-900/30 rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="text-primary-600 dark:text-primary-400" size={28} />
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Challenges & Impact Section */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900/50">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Challenges */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white dark:bg-gray-900 p-8 rounded-2xl border border-gray-200 dark:border-gray-800"
            >
              <h3 className="text-3xl font-bold mb-6 text-red-600 dark:text-red-400">
                Current Challenges
              </h3>
              <ul className="space-y-4">
                {challenges.map((challenge, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start space-x-3"
                  >
                    <div className="w-6 h-6 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-red-500 rounded-full" />
                    </div>
                    <span className="text-gray-700 dark:text-gray-300">{challenge}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Impact Goals */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white dark:bg-gray-900 p-8 rounded-2xl border border-gray-200 dark:border-gray-800"
            >
              <h3 className="text-3xl font-bold mb-6 text-green-600 dark:text-green-400">
                Impact Goals
              </h3>
              <ul className="space-y-4">
                {impactGoals.map((goal, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start space-x-3"
                  >
                    <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" size={24} />
                    <span className="text-gray-700 dark:text-gray-300">{goal}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="container mx-auto text-center bg-gradient-to-br from-primary-600 to-blue-600
                     dark:from-primary-700 dark:to-blue-700 rounded-3xl p-12 md:p-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Beneficiary Management?
          </h2>
          <p className="text-xl text-primary-50 mb-8 max-w-2xl mx-auto">
            Join us in creating a transparent, efficient, and impactful system for SC community development
          </p>
          <Link to="/dashboard">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-primary-600 rounded-xl font-semibold
                       shadow-xl hover:shadow-2xl transition-shadow flex items-center space-x-2 mx-auto"
            >
              <span>Get Started Now</span>
              <ArrowRight size={20} />
            </motion.button>
          </Link>
        </motion.div>
      </section>
    </div>
  );
};
