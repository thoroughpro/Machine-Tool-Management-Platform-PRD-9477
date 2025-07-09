import React from 'react';
import { motion } from 'framer-motion';
import { useApp } from '../../../context/AppContext';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../../common/SafeIcon';

const { FiTrendingUp, FiTrendingDown, FiDollarSign, FiZap, FiClock, FiActivity } = FiIcons;

const KPICards = () => {
  const { state } = useApp();
  const { analytics } = state;

  const kpis = [
    {
      title: 'Overall Equipment Effectiveness',
      value: '87.5%',
      change: '+3.2%',
      trend: 'up',
      icon: FiActivity,
      color: 'primary'
    },
    {
      title: 'Average Utilization',
      value: `${analytics.avgUtilization}%`,
      change: '+2.5%',
      trend: 'up',
      icon: FiTrendingUp,
      color: 'success'
    },
    {
      title: 'Total Downtime',
      value: `${analytics.totalDowntime}h`,
      change: '-15%',
      trend: 'down',
      icon: FiClock,
      color: 'success'
    },
    {
      title: 'Maintenance Cost',
      value: `$${analytics.maintenanceCost.toLocaleString()}`,
      change: '+8%',
      trend: 'up',
      icon: FiDollarSign,
      color: 'warning'
    },
    {
      title: 'Energy Efficiency',
      value: '92.3%',
      change: '+1.8%',
      trend: 'up',
      icon: FiZap,
      color: 'success'
    },
    {
      title: 'MTBF (Mean Time Between Failures)',
      value: '456h',
      change: '+12%',
      trend: 'up',
      icon: FiTrendingUp,
      color: 'success'
    }
  ];

  const getColorClasses = (color) => {
    switch (color) {
      case 'primary': return 'bg-primary-50 text-primary-600';
      case 'success': return 'bg-green-50 text-green-600';
      case 'warning': return 'bg-yellow-50 text-yellow-600';
      case 'error': return 'bg-red-50 text-red-600';
      default: return 'bg-gray-50 text-gray-600';
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {kpis.map((kpi, index) => (
        <motion.div
          key={kpi.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
        >
          <div className="flex items-center justify-between mb-4">
            <div className={`p-3 rounded-lg ${getColorClasses(kpi.color)}`}>
              <SafeIcon icon={kpi.icon} className="text-xl" />
            </div>
            <div className={`flex items-center space-x-1 text-sm font-medium ${
              kpi.trend === 'up' ? 'text-green-600' : 'text-red-600'
            }`}>
              <SafeIcon icon={kpi.trend === 'up' ? FiTrendingUp : FiTrendingDown} className="text-sm" />
              <span>{kpi.change}</span>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-medium text-gray-600 mb-1">{kpi.title}</h3>
            <p className="text-2xl font-bold text-gray-900">{kpi.value}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default KPICards;