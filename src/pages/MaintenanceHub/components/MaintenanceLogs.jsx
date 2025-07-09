import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../../common/SafeIcon';

const { FiFileText, FiClock, FiUser, FiTool, FiCheckCircle } = FiIcons;

const MaintenanceLogs = () => {
  const logs = [
    {
      id: 1,
      machineId: 1,
      machineName: 'CNC Lathe #1',
      date: '2024-01-15',
      duration: '2.5 hours',
      technician: 'John Smith',
      type: 'Preventive',
      description: 'Monthly calibration and lubrication',
      status: 'completed',
      parts: ['Lubricant', 'Calibration tools'],
      notes: 'All systems functioning within normal parameters'
    },
    {
      id: 2,
      machineId: 2,
      machineName: 'Milling Machine #2',
      date: '2024-01-10',
      duration: '4 hours',
      technician: 'Mike Johnson',
      type: 'Corrective',
      description: 'Replaced worn bearings',
      status: 'completed',
      parts: ['Ball bearings (2x)', 'Seals', 'Grease'],
      notes: 'Bearings were severely worn. Recommend more frequent inspections.'
    },
    {
      id: 3,
      machineId: 3,
      machineName: 'Press #1',
      date: '2024-01-08',
      duration: '1 hour',
      technician: 'Sarah Wilson',
      type: 'Preventive',
      description: 'Hydraulic system inspection',
      status: 'completed',
      parts: ['Hydraulic fluid'],
      notes: 'Fluid levels topped up. No leaks detected.'
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed': return 'text-green-600 bg-green-50';
      case 'in-progress': return 'text-yellow-600 bg-yellow-50';
      case 'scheduled': return 'text-blue-600 bg-blue-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case 'Preventive': return 'text-blue-600 bg-blue-50';
      case 'Corrective': return 'text-red-600 bg-red-50';
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
        <h2 className="text-xl font-semibold text-gray-900">Maintenance Logs</h2>
        <button className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors">
          Export Logs
        </button>
      </div>

      <div className="space-y-4">
        {logs.map((log) => (
          <motion.div
            key={log.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white border border-gray-200 rounded-lg p-6"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-primary-100 rounded-lg">
                  <SafeIcon icon={FiFileText} className="text-primary-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{log.description}</h3>
                  <p className="text-sm text-gray-500">{log.machineName}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <span className={`px-2 py-1 text-xs font-medium rounded-full ${getTypeColor(log.type)}`}>
                  {log.type}
                </span>
                <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(log.status)}`}>
                  <SafeIcon icon={FiCheckCircle} className="inline mr-1" />
                  {log.status}
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <SafeIcon icon={FiClock} className="text-gray-400" />
                <span>{log.date}</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <SafeIcon icon={FiUser} className="text-gray-400" />
                <span>{log.technician}</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <SafeIcon icon={FiTool} className="text-gray-400" />
                <span>{log.duration}</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="text-sm font-medium text-gray-900 mb-2">Parts Used</h4>
                <div className="space-y-1">
                  {log.parts.map((part, index) => (
                    <div key={index} className="text-sm text-gray-600 bg-gray-50 px-2 py-1 rounded">
                      {part}
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-sm font-medium text-gray-900 mb-2">Notes</h4>
                <p className="text-sm text-gray-600 bg-gray-50 p-2 rounded">
                  {log.notes}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="bg-gray-50 rounded-lg p-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
          <div>
            <p className="text-2xl font-bold text-gray-900">{logs.length}</p>
            <p className="text-sm text-gray-600">Total Logs</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-green-600">{logs.filter(l => l.status === 'completed').length}</p>
            <p className="text-sm text-gray-600">Completed</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-blue-600">{logs.filter(l => l.type === 'Preventive').length}</p>
            <p className="text-sm text-gray-600">Preventive</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-red-600">{logs.filter(l => l.type === 'Corrective').length}</p>
            <p className="text-sm text-gray-600">Corrective</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default MaintenanceLogs;