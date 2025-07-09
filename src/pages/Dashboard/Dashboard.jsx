import React from 'react';
import { motion } from 'framer-motion';
import FacilityOverview from './components/FacilityOverview';
import MachineStatus from './components/MachineStatus';
import MaintenanceAlerts from './components/MaintenanceAlerts';
import PerformanceMetrics from './components/PerformanceMetrics';
import QuickActions from './components/QuickActions';

const Dashboard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <div className="text-sm text-gray-500">
          Last updated: {new Date().toLocaleString()}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <FacilityOverview />
        </div>
        <div>
          <QuickActions />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <MachineStatus />
        <MaintenanceAlerts />
      </div>

      <PerformanceMetrics />
    </motion.div>
  );
};

export default Dashboard;