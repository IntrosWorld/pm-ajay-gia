import { motion } from 'framer-motion';
import { Briefcase, Calendar, TrendingUp, CheckCircle2, Clock, AlertCircle } from 'lucide-react';

export const Projects = () => {
  const projects = [
    {
      id: 'PRJ001',
      title: 'Entrepreneurship Development Program',
      category: 'Income Generation',
      status: 'In Progress',
      progress: 65,
      beneficiaries: 245,
      startDate: '2024-01-15',
      endDate: '2024-12-31',
      budget: '₹25,00,000',
      state: 'Maharashtra',
    },
    {
      id: 'PRJ002',
      title: 'Digital Skills Training Initiative',
      category: 'Skill Development',
      status: 'In Progress',
      progress: 42,
      beneficiaries: 180,
      startDate: '2024-03-01',
      endDate: '2024-11-30',
      budget: '₹18,00,000',
      state: 'Karnataka',
    },
    {
      id: 'PRJ003',
      title: 'Community Infrastructure Enhancement',
      category: 'Infrastructure Support',
      status: 'Completed',
      progress: 100,
      beneficiaries: 450,
      startDate: '2023-09-01',
      endDate: '2024-02-28',
      budget: '₹45,00,000',
      state: 'Tamil Nadu',
    },
    {
      id: 'PRJ004',
      title: 'Women Empowerment & Livelihood',
      category: 'Income Generation',
      status: 'In Progress',
      progress: 78,
      beneficiaries: 320,
      startDate: '2023-11-15',
      endDate: '2024-10-31',
      budget: '₹30,00,000',
      state: 'Uttar Pradesh',
    },
    {
      id: 'PRJ005',
      title: 'Vocational Training Center Setup',
      category: 'Skill Development',
      status: 'Planning',
      progress: 15,
      beneficiaries: 0,
      startDate: '2024-07-01',
      endDate: '2025-06-30',
      budget: '₹35,00,000',
      state: 'West Bengal',
    },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Completed':
        return <CheckCircle2 className="text-green-500" size={20} />;
      case 'In Progress':
        return <Clock className="text-blue-500" size={20} />;
      case 'Planning':
        return <AlertCircle className="text-orange-500" size={20} />;
      default:
        return null;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400';
      case 'In Progress':
        return 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400';
      case 'Planning':
        return 'bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400';
      default:
        return 'bg-gray-100 dark:bg-gray-800';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Income Generation':
        return 'bg-blue-500';
      case 'Skill Development':
        return 'bg-green-500';
      case 'Infrastructure Support':
        return 'bg-purple-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-12 px-4 bg-white dark:bg-gray-950">
      <div className="container mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold mb-2 text-gray-900 dark:text-white">Projects</h1>
          <p className="text-gray-600 dark:text-gray-400">
            Track and manage GIA projects across all categories
          </p>
        </motion.div>

        {/* Summary Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8"
        >
          <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-800">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-600 dark:text-gray-400">Total Projects</span>
              <Briefcase className="text-primary-500" size={24} />
            </div>
            <div className="text-3xl font-bold text-gray-900 dark:text-white">{projects.length}</div>
          </div>

          <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-800">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-600 dark:text-gray-400">In Progress</span>
              <Clock className="text-blue-500" size={24} />
            </div>
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
              {projects.filter(p => p.status === 'In Progress').length}
            </div>
          </div>

          <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-800">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-600 dark:text-gray-400">Completed</span>
              <CheckCircle2 className="text-green-500" size={24} />
            </div>
            <div className="text-3xl font-bold text-green-600 dark:text-green-400">
              {projects.filter(p => p.status === 'Completed').length}
            </div>
          </div>

          <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-800">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-600 dark:text-gray-400">Total Beneficiaries</span>
              <TrendingUp className="text-purple-500" size={24} />
            </div>
            <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">
              {projects.reduce((sum, p) => sum + p.beneficiaries, 0)}
            </div>
          </div>
        </motion.div>

        {/* Projects List */}
        <div className="space-y-4">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.05 }}
              whileHover={{ scale: 1.01 }}
              className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800
                       hover:shadow-xl transition-all"
            >
              <div className="flex flex-col lg:flex-row gap-6">
                {/* Left Section */}
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">{project.title}</h3>
                        <span className="px-3 py-1 text-xs font-semibold rounded-full bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white">
                          {project.id}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-2 mb-3">
                        <span className={`px-3 py-1 text-xs font-semibold rounded-full ${getStatusColor(project.status)}`}>
                          <span className="flex items-center gap-1">
                            {getStatusIcon(project.status)}
                            {project.status}
                          </span>
                        </span>
                        <span className={`px-3 py-1 text-xs font-semibold rounded-full text-white ${getCategoryColor(project.category)}`}>
                          {project.category}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-900 dark:text-white">Progress</span>
                      <span className="text-sm font-bold text-gray-900 dark:text-white">{project.progress}%</span>
                    </div>
                    <div className="h-3 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${project.progress}%` }}
                        transition={{ delay: 0.3 + index * 0.05, duration: 0.8 }}
                        className={`h-full ${getCategoryColor(project.category)}`}
                      />
                    </div>
                  </div>

                  {/* Details Grid */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                    <div>
                      <div className="text-gray-600 dark:text-gray-400 mb-1 flex items-center gap-1">
                        <Calendar size={14} />
                        Start Date
                      </div>
                      <div className="font-semibold text-gray-900 dark:text-white">{new Date(project.startDate).toLocaleDateString()}</div>
                    </div>
                    <div>
                      <div className="text-gray-600 dark:text-gray-400 mb-1 flex items-center gap-1">
                        <Calendar size={14} />
                        End Date
                      </div>
                      <div className="font-semibold text-gray-900 dark:text-white">{new Date(project.endDate).toLocaleDateString()}</div>
                    </div>
                    <div>
                      <div className="text-gray-600 dark:text-gray-400 mb-1">Beneficiaries</div>
                      <div className="font-semibold text-gray-900 dark:text-white">{project.beneficiaries}</div>
                    </div>
                    <div>
                      <div className="text-gray-600 dark:text-gray-400 mb-1">Budget</div>
                      <div className="font-semibold text-gray-900 dark:text-white">{project.budget}</div>
                    </div>
                  </div>
                </div>

                {/* Right Section */}
                <div className="flex flex-col justify-between items-end gap-4">
                  <div className="text-right">
                    <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Location</div>
                    <div className="font-semibold text-lg text-gray-900 dark:text-white">{project.state}</div>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-xl font-semibold
                             shadow-lg"
                  >
                    View Details
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
