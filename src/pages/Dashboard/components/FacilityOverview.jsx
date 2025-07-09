import React from 'react';
import { motion } from 'framer-motion';
import { useApp } from '../../../context/AppContext';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../../common/SafeIcon';

const { FiActivity, FiAlertTriangle, FiCheckCircle } = FiIcons;

const FacilityOverview = () => {
  const { state } = useApp();
  const { machines } = state;

  const runningMachines = machines.filter(m => m.status === 'running').length;
  const maintenanceMachines = machines.filter(m => m.status === 'maintenance').length;
  const totalAlerts = machines.reduce((sum, m) => sum + m.alerts, 0);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
    >
      <h2 className="text-xl font-semibold text-gray-900 mb-6">Facility Overview</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-success-50 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-success-600 text-sm font-medium">Running</p>
              <p className="text-2xl font-bold text-success-700">{runningMachines}</p>
            </div>
            <SafeIcon icon={FiCheckCircle} className="text-success-500 text-2xl" />
          </div>
        </div>
        
        <div className="bg-warning-50 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-warning-600 text-sm font-medium">Maintenance</p>
              <p className="text-2xl font-bold text-warning-700">{maintenanceMachines}</p>
            </div>
            <SafeIcon icon={FiActivity} className="text-warning-500 text-2xl" />
          </div>
        </div>
        
        <div className="bg-error-50 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-error-600 text-sm font-medium">Alerts</p>
              <p className="text-2xl font-bold text-error-700">{totalAlerts}</p>
            </div>
            <SafeIcon icon={FiAlertTriangle} className="text-error-500 text-2xl" />
          </div>
        </div>
      </div>

      <div className="bg-gray-50 rounded-lg p-4 h-64 flex items-center justify-center">
        <div className="text-center">
          <SafeIcon icon={FiActivity} className="text-4xl text-gray-400 mx-auto mb-2" />
          <p className="text-gray-600">Interactive 3D Facility Map</p>
          <p className="text-sm text-gray-500">Click machines for details</p>
        </div>
      </div>
    </motion.div>
  );
};

export default FacilityOverview;