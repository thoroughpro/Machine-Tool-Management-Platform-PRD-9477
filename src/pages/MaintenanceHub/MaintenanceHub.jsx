import React, { useState } from 'react';
import { motion } from 'framer-motion';
import MaintenanceCalendar from './components/MaintenanceCalendar';
import ServiceRequests from './components/ServiceRequests';
import MaintenanceLogs from './components/MaintenanceLogs';
import PartsInventory from './components/PartsInventory';
import TechnicianSchedule from './components/TechnicianSchedule';

const MaintenanceHub = () => {
  const [activeTab, setActiveTab] = useState('calendar');

  const tabs = [
    { id: 'calendar', label: 'Calendar' },
    { id: 'requests', label: 'Service Requests' },
    { id: 'logs', label: 'Maintenance Logs' },
    { id: 'inventory', label: 'Parts Inventory' },
    { id: 'technicians', label: 'Technicians' }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'calendar':
        return <MaintenanceCalendar />;
      case 'requests':
        return <ServiceRequests />;
      case 'logs':
        return <MaintenanceLogs />;
      case 'inventory':
        return <PartsInventory />;
      case 'technicians':
        return <TechnicianSchedule />;
      default:
        return <MaintenanceCalendar />;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">Maintenance Hub</h1>
        <button className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors">
          Schedule Maintenance
        </button>
      </div>

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

export default MaintenanceHub;