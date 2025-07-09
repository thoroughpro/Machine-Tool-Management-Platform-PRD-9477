import React from 'react';
import { motion } from 'framer-motion';
import { useApp } from '../../../context/AppContext';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../../common/SafeIcon';

const { FiTrendingUp, FiTrendingDown, FiDollarSign, FiZap } = FiIcons;

const PerformanceMetrics = () => {
  const { state } = useApp();
  const { analytics } = state;

  const metrics = [
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
      icon: FiTrendingDown,
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
      title: 'Energy Consumption',
      value: `${analytics.energyConsumption} kWh`,
      change: '-5%',
      trend: 'down',
      icon: FiZap,
      color: 'success'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
    >
      <h2 className="text-xl font-semibold text-gray-900 mb-6">Performance Metrics</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, index) => (
          <motion.div
            key={metric.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-gray-50 rounded-lg p-4"
          >
            <div className="flex items-center justify-between mb-2">
              <SafeIcon icon={metric.icon} className={`text-${metric.color}-500 text-xl`} />
              <span className={`text-sm font-medium ${
                metric.trend === 'up' ? 'text-success-600' : 'text-error-600'
              }`}>
                {metric.change}
              </span>
            </div>
            <h3 className="text-sm font-medium text-gray-600 mb-1">{metric.title}</h3>
            <p className="text-2xl font-bold text-gray-900">{metric.value}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default PerformanceMetrics;