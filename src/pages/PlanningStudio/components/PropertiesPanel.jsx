import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../../common/SafeIcon';

const { FiSettings, FiInfo, FiDollarSign, FiZap, FiTool } = FiIcons;

const PropertiesPanel = ({ selectedMachine, setSelectedMachine }) => {
  if (!selectedMachine) {
    return (
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
      >
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Properties</h2>
        <div className="text-center py-12">
          <SafeIcon icon={FiSettings} className="text-4xl text-gray-400 mx-auto mb-2" />
          <p className="text-gray-600">Select a machine to view properties</p>
        </div>
      </motion.div>
    );
  }

  const specifications = [
    { label: 'Power Rating', value: '15 kW', icon: FiZap },
    { label: 'Operating Cost', value: '$45/hour', icon: FiDollarSign },
    { label: 'Maintenance Interval', value: '30 days', icon: FiTool },
    { label: 'Floor Space', value: '3m × 2m', icon: FiInfo }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
    >
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Properties</h2>
      
      <div className="space-y-6">
        {/* Basic Info */}
        <div>
          <h3 className="text-sm font-medium text-gray-900 mb-3">Basic Information</h3>
          <div className="space-y-3">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Machine Name
              </label>
              <input
                type="text"
                value={selectedMachine.name}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                readOnly
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Type
              </label>
              <input
                type="text"
                value={selectedMachine.type}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                readOnly
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Status
              </label>
              <select
                value={selectedMachine.status}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              >
                <option value="running">Running</option>
                <option value="maintenance">Maintenance</option>
                <option value="offline">Offline</option>
              </select>
            </div>
          </div>
        </div>

        {/* Position */}
        <div>
          <h3 className="text-sm font-medium text-gray-900 mb-3">Position</h3>
          <div className="grid grid-cols-3 gap-2">
            <div>
              <label className="block text-xs text-gray-500 mb-1">X</label>
              <input
                type="number"
                value={selectedMachine.location?.x || 0}
                className="w-full px-2 py-1 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-primary-500"
                readOnly
              />
            </div>
            <div>
              <label className="block text-xs text-gray-500 mb-1">Y</label>
              <input
                type="number"
                value={selectedMachine.location?.y || 0}
                className="w-full px-2 py-1 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-primary-500"
                readOnly
              />
            </div>
            <div>
              <label className="block text-xs text-gray-500 mb-1">Z</label>
              <input
                type="number"
                value={selectedMachine.location?.z || 0}
                className="w-full px-2 py-1 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-primary-500"
                readOnly
              />
            </div>
          </div>
        </div>

        {/* Specifications */}
        <div>
          <h3 className="text-sm font-medium text-gray-900 mb-3">Specifications</h3>
          <div className="space-y-3">
            {specifications.map((spec) => (
              <div key={spec.label} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-2">
                  <SafeIcon icon={spec.icon} className="text-gray-500" />
                  <span className="text-sm text-gray-700">{spec.label}</span>
                </div>
                <span className="text-sm font-medium text-gray-900">{spec.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="pt-4 border-t border-gray-200">
          <div className="space-y-2">
            <button className="w-full px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors">
              Save Changes
            </button>
            <button className="w-full px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
              Reset Position
            </button>
            <button className="w-full px-4 py-2 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition-colors">
              Remove Machine
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PropertiesPanel;