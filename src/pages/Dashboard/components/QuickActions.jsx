import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../../common/SafeIcon';

const { FiPlus, FiTool, FiCalendar, FiFileText, FiBox } = FiIcons;

const QuickActions = () => {
  const navigate = useNavigate();

  const actions = [
    {
      title: 'Schedule Maintenance',
      description: 'Add new maintenance task',
      icon: FiCalendar,
      color: 'bg-blue-500',
      onClick: () => navigate('/maintenance')
    },
    {
      title: 'Add Machine',
      description: 'Register new equipment',
      icon: FiPlus,
      color: 'bg-green-500',
      onClick: () => navigate('/planning')
    },
    {
      title: 'View Reports',
      description: 'Generate analytics report',
      icon: FiFileText,
      color: 'bg-purple-500',
      onClick: () => navigate('/analytics')
    },
    {
      title: 'Plan Layout',
      description: 'Design facility layout',
      icon: FiBox,
      color: 'bg-orange-500',
      onClick: () => navigate('/planning')
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
    >
      <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Actions</h2>
      
      <div className="space-y-3">
        {actions.map((action, index) => (
          <motion.button
            key={action.title}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            onClick={action.onClick}
            className="w-full flex items-center space-x-3 p-4 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <div className={`p-2 ${action.color} rounded-lg`}>
              <SafeIcon icon={action.icon} className="text-white" />
            </div>
            <div className="text-left">
              <h3 className="font-medium text-gray-900">{action.title}</h3>
              <p className="text-sm text-gray-500">{action.description}</p>
            </div>
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
};

export default QuickActions;