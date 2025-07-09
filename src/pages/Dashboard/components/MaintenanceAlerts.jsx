import React from 'react';
import { motion } from 'framer-motion';
import { useApp } from '../../../context/AppContext';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../../common/SafeIcon';

const { FiClock, FiAlertTriangle, FiCalendar } = FiIcons;

const MaintenanceAlerts = () => {
  const { state } = useApp();
  const { maintenanceSchedule } = state;

  const upcomingMaintenance = maintenanceSchedule.filter(
    item => new Date(item.date) > new Date()
  ).slice(0, 5);

  const getStatusColor = (status) => {
    switch (status) {
      case 'scheduled': return 'text-blue-600 bg-blue-50';
      case 'in-progress': return 'text-warning-600 bg-warning-50';
      case 'completed': return 'text-success-600 bg-success-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
    >
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-gray-900">Maintenance Alerts</h2>
        <SafeIcon icon={FiCalendar} className="text-gray-400" />
      </div>
      
      <div className="space-y-4">
        {upcomingMaintenance.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg"
          >
            <div className="flex-shrink-0 p-2 bg-warning-50 rounded-lg">
              <SafeIcon icon={FiAlertTriangle} className="text-warning-600" />
            </div>
            
            <div className="flex-1 min-w-0">
              <h3 className="font-medium text-gray-900">{item.description}</h3>
              <p className="text-sm text-gray-500">Machine ID: {item.machineId}</p>
              <div className="flex items-center space-x-4 mt-2">
                <div className="flex items-center text-sm text-gray-500">
                  <SafeIcon icon={FiClock} className="mr-1" />
                  {item.date}
                </div>
                <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(item.status)}`}>
                  {item.status}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      <button className="w-full mt-4 py-2 text-sm font-medium text-primary-600 hover:text-primary-700 transition-colors">
        View All Maintenance →
      </button>
    </motion.div>
  );
};

export default MaintenanceAlerts;