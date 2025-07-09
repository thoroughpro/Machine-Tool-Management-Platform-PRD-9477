import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../../common/SafeIcon';

const { FiFileText, FiDownload, FiCalendar, FiFilter, FiPlus, FiSettings } = FiIcons;

const CustomReports = () => {
  const [showReportBuilder, setShowReportBuilder] = useState(false);

  const predefinedReports = [
    {
      id: 1,
      name: 'Monthly Maintenance Summary',
      description: 'Comprehensive overview of all maintenance activities',
      lastGenerated: '2024-01-15',
      frequency: 'Monthly',
      format: 'PDF',
      status: 'Ready'
    },
    {
      id: 2,
      name: 'Machine Utilization Report',
      description: 'Detailed analysis of machine utilization rates',
      lastGenerated: '2024-01-14',
      frequency: 'Weekly',
      format: 'Excel',
      status: 'Ready'
    },
    {
      id: 3,
      name: 'Cost Analysis Report',
      description: 'Breakdown of maintenance costs and ROI analysis',
      lastGenerated: '2024-01-10',
      frequency: 'Quarterly',
      format: 'PDF',
      status: 'Generating'
    },
    {
      id: 4,
      name: 'Downtime Analysis',
      description: 'Analysis of downtime causes and prevention strategies',
      lastGenerated: '2024-01-12',
      frequency: 'Monthly',
      format: 'Excel',
      status: 'Ready'
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Ready': return 'text-green-600 bg-green-50';
      case 'Generating': return 'text-yellow-600 bg-yellow-50';
      case 'Failed': return 'text-red-600 bg-red-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-6"
    >
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-gray-900">Custom Reports</h2>
        <button
          onClick={() => setShowReportBuilder(true)}
          className="flex items-center space-x-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
        >
          <SafeIcon icon={FiPlus} />
          <span>Create Report</span>
        </button>
      </div>

      {showReportBuilder && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white border border-gray-200 rounded-lg p-6"
        >
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Report Builder</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Report Name
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500"
                placeholder="Enter report name..."
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Report Type
              </label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500">
                <option>Performance Analysis</option>
                <option>Cost Analysis</option>
                <option>Maintenance Summary</option>
                <option>Utilization Report</option>
                <option>Custom Query</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Date Range
              </label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500">
                <option>Last 7 days</option>
                <option>Last 30 days</option>
                <option>Last 90 days</option>
                <option>Last year</option>
                <option>Custom range</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Output Format
              </label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500">
                <option>PDF</option>
                <option>Excel</option>
                <option>CSV</option>
                <option>JSON</option>
              </select>
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Machines to Include
              </label>
              <div className="grid grid-cols-2 gap-2">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" defaultChecked />
                  <span className="text-sm">CNC Lathe #1</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" defaultChecked />
                  <span className="text-sm">Milling Machine #2</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" defaultChecked />
                  <span className="text-sm">Press #1</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span className="text-sm">Assembly Line</span>
                </label>
              </div>
            </div>
          </div>
          <div className="flex justify-end space-x-3 mt-6">
            <button
              onClick={() => setShowReportBuilder(false)}
              className="px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
            >
              Cancel
            </button>
            <button className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors">
              Generate Report
            </button>
          </div>
        </motion.div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {predefinedReports.map((report) => (
          <motion.div
            key={report.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-primary-100 rounded-lg">
                  <SafeIcon icon={FiFileText} className="text-primary-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{report.name}</h3>
                  <p className="text-sm text-gray-500">{report.description}</p>
                </div>
              </div>
              <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(report.status)}`}>
                {report.status}
              </span>
            </div>

            <div className="space-y-2 mb-4">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Last Generated:</span>
                <span className="text-gray-900">{report.lastGenerated}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Frequency:</span>
                <span className="text-gray-900">{report.frequency}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Format:</span>
                <span className="text-gray-900">{report.format}</span>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <button className="flex items-center space-x-1 px-3 py-1 text-sm text-primary-600 hover:text-primary-700 transition-colors">
                <SafeIcon icon={FiDownload} />
                <span>Download</span>
              </button>
              <button className="flex items-center space-x-1 px-3 py-1 text-sm text-gray-600 hover:text-gray-700 transition-colors">
                <SafeIcon icon={FiSettings} />
                <span>Configure</span>
              </button>
              <button className="flex items-center space-x-1 px-3 py-1 text-sm text-gray-600 hover:text-gray-700 transition-colors">
                <SafeIcon icon={FiCalendar} />
                <span>Schedule</span>
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="bg-gray-50 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Report Templates</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <h4 className="font-medium text-gray-900 mb-2">Executive Summary</h4>
            <p className="text-sm text-gray-600 mb-3">High-level overview for management</p>
            <button className="text-sm text-primary-600 hover:text-primary-700">Use Template</button>
          </div>
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <h4 className="font-medium text-gray-900 mb-2">Technical Analysis</h4>
            <p className="text-sm text-gray-600 mb-3">Detailed technical metrics and analysis</p>
            <button className="text-sm text-primary-600 hover:text-primary-700">Use Template</button>
          </div>
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <h4 className="font-medium text-gray-900 mb-2">Compliance Report</h4>
            <p className="text-sm text-gray-600 mb-3">Regulatory compliance documentation</p>
            <button className="text-sm text-primary-600 hover:text-primary-700">Use Template</button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CustomReports;