import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../../common/SafeIcon';

const { FiUser, FiClock, FiTool, FiPhone, FiMail, FiCalendar } = FiIcons;

const TechnicianSchedule = () => {
  const technicians = [
    {
      id: 1,
      name: 'John Smith',
      email: 'john.smith@company.com',
      phone: '+1 (555) 123-4567',
      specialization: 'CNC Machines',
      status: 'available',
      currentTask: null,
      schedule: [
        { date: '2024-01-20', task: 'CNC Lathe maintenance', time: '09:00 - 11:00' },
        { date: '2024-01-21', task: 'Preventive inspection', time: '14:00 - 16:00' }
      ]
    },
    {
      id: 2,
      name: 'Mike Johnson',
      email: 'mike.johnson@company.com',
      phone: '+1 (555) 234-5678',
      specialization: 'Hydraulic Systems',
      status: 'busy',
      currentTask: 'Replacing hydraulic pump',
      schedule: [
        { date: '2024-01-20', task: 'Hydraulic pump replacement', time: '08:00 - 12:00' },
        { date: '2024-01-20', task: 'System testing', time: '13:00 - 15:00' }
      ]
    },
    {
      id: 3,
      name: 'Sarah Wilson',
      email: 'sarah.wilson@company.com',
      phone: '+1 (555) 345-6789',
      specialization: 'Electrical Systems',
      status: 'available',
      currentTask: null,
      schedule: [
        { date: '2024-01-21', task: 'Motor wiring inspection', time: '10:00 - 12:00' },
        { date: '2024-01-22', task: 'Control panel upgrade', time: '09:00 - 17:00' }
      ]
    },
    {
      id: 4,
      name: 'David Brown',
      email: 'david.brown@company.com',
      phone: '+1 (555) 456-7890',
      specialization: 'Mechanical Systems',
      status: 'off-duty',
      currentTask: null,
      schedule: [
        { date: '2024-01-22', task: 'Bearing replacement', time: '08:00 - 10:00' },
        { date: '2024-01-23', task: 'Alignment check', time: '14:00 - 16:00' }
      ]
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'available': return 'text-green-600 bg-green-50';
      case 'busy': return 'text-yellow-600 bg-yellow-50';
      case 'off-duty': return 'text-gray-600 bg-gray-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'available': return FiUser;
      case 'busy': return FiTool;
      case 'off-duty': return FiClock;
      default: return FiUser;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-6"
    >
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-gray-900">Technician Schedule</h2>
        <button className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors">
          Assign Task
        </button>
      </div>

      {/* Status Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-green-50 rounded-lg p-4">
          <h3 className="font-medium text-green-900 mb-2">Available</h3>
          <p className="text-2xl font-bold text-green-700">
            {technicians.filter(t => t.status === 'available').length}
          </p>
        </div>
        <div className="bg-yellow-50 rounded-lg p-4">
          <h3 className="font-medium text-yellow-900 mb-2">Busy</h3>
          <p className="text-2xl font-bold text-yellow-700">
            {technicians.filter(t => t.status === 'busy').length}
          </p>
        </div>
        <div className="bg-gray-50 rounded-lg p-4">
          <h3 className="font-medium text-gray-900 mb-2">Off Duty</h3>
          <p className="text-2xl font-bold text-gray-700">
            {technicians.filter(t => t.status === 'off-duty').length}
          </p>
        </div>
      </div>

      {/* Technician Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {technicians.map((technician) => (
          <motion.div
            key={technician.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-lg shadow-sm border border-gray-200 p-6"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                  <SafeIcon icon={getStatusIcon(technician.status)} className="text-primary-600 text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{technician.name}</h3>
                  <p className="text-sm text-gray-500">{technician.specialization}</p>
                </div>
              </div>
              <span className={`px-3 py-1 text-xs font-medium rounded-full ${getStatusColor(technician.status)}`}>
                {technician.status}
              </span>
            </div>

            <div className="space-y-3 mb-4">
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <SafeIcon icon={FiMail} className="text-gray-400" />
                <span>{technician.email}</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <SafeIcon icon={FiPhone} className="text-gray-400" />
                <span>{technician.phone}</span>
              </div>
              {technician.currentTask && (
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <SafeIcon icon={FiTool} className="text-gray-400" />
                  <span>Current: {technician.currentTask}</span>
                </div>
              )}
            </div>

            <div>
              <h4 className="font-medium text-gray-900 mb-2 flex items-center">
                <SafeIcon icon={FiCalendar} className="mr-2" />
                Upcoming Schedule
              </h4>
              <div className="space-y-2">
                {technician.schedule.slice(0, 2).map((item, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-3">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-medium text-gray-900 text-sm">{item.task}</p>
                        <p className="text-xs text-gray-500">{item.time}</p>
                      </div>
                      <span className="text-xs text-gray-500">{item.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-end space-x-2 mt-4">
              <button className="px-3 py-1 text-sm text-primary-600 hover:text-primary-700 transition-colors">
                View Full Schedule
              </button>
              <button className="px-3 py-1 text-sm text-gray-600 hover:text-gray-700 transition-colors">
                Contact
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default TechnicianSchedule;