import React, { useState } from 'react';
import { motion } from 'framer-motion';
import PerformanceCharts from './components/PerformanceCharts';
import CostAnalysis from './components/CostAnalysis';
import UtilizationHeatmap from './components/UtilizationHeatmap';
import CustomReports from './components/CustomReports';
import KPICards from './components/KPICards';

const Analytics = () => {
  const [activeTab, setActiveTab] = useState('performance');
  const [dateRange, setDateRange] = useState('30days');

  const tabs = [
    { id: 'performance', label: 'Performance' },
    { id: 'costs', label: 'Cost Analysis' },
    { id: 'utilization', label: 'Utilization' },
    { id: 'reports', label: 'Custom Reports' }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'performance':
        return <PerformanceCharts dateRange={dateRange} />;
      case 'costs':
        return <CostAnalysis dateRange={dateRange} />;
      case 'utilization':
        return <UtilizationHeatmap dateRange={dateRange} />;
      case 'reports':
        return <CustomReports />;
      default:
        return <PerformanceCharts dateRange={dateRange} />;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">Analytics Center</h1>
        <div className="flex items-center space-x-4">
          <select
            value={dateRange}
            onChange={(e) => setDateRange(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
          >
            <option value="7days">Last 7 days</option>
            <option value="30days">Last 30 days</option>
            <option value="90days">Last 90 days</option>
            <option value="1year">Last year</option>
          </select>
          <button className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors">
            Export Data
          </button>
        </div>
      </div>

      <KPICards />

      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8 px-6">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === tab.id
                    ? 'border-primary-500 text-primary-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        <div className="p-6">
          {renderContent()}
        </div>
      </div>
    </motion.div>
  );
};

export default Analytics;