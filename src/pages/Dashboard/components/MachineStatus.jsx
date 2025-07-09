import React from 'react';
import { motion } from 'framer-motion';
import { useApp } from '../../../context/AppContext';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../../common/SafeIcon';

const { FiCpu, FiActivity, FiAlertTriangle } = FiIcons;

const MachineStatus = () => {
  const { state } = useApp();
  const { machines } = state;

  const getStatusColor = (status) => {
    switch (status) {
      case 'running': return 'text-success-600 bg-success-50';
      case 'maintenance': return 'text-warning-600 bg-warning-50';
      case 'offline': return 'text-error-600 bg-error-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'running': return FiActivity;
      case 'maintenance': return FiAlertTriangle;
      default: return FiCpu;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
    >
      <h2 className="text-xl font-semibold text-gray-900 mb-4">Machine Status</h2>
      
      <div className="space-y-4">
        {machines.map((machine) => (
          <motion.div
            key={machine.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
          >
            <div className="flex items-center space-x-3">
              <div className={`p-2 rounded-lg ${getStatusColor(machine.status)}`}>
                <SafeIcon icon={getStatusIcon(machine.status)} className="text-lg" />
              </div>
              <div>
                <h3 className="font-medium text-gray-900">{machine.name}</h3>
                <p className="text-sm text-gray-500">{machine.type}</p>
              </div>
            </div>
            
            <div className="text-right">
              <div className="flex items-center space-x-2">
                <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(machine.status)}`}>
                  {machine.status}
                </span>
                {machine.alerts > 0 && (
                  <span className="px-2 py-1 text-xs font-medium bg-red-100 text-red-600 rounded-full">
                    {machine.alerts} alerts
                  </span>
                )}
              </div>
              <p className="text-sm text-gray-500 mt-1">{machine.utilization}% utilization</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default MachineStatus;