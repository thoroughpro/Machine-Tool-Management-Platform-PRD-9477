import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useApp } from '../../../context/AppContext';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../../common/SafeIcon';

const { FiCalendar, FiChevronLeft, FiChevronRight, FiClock, FiUser } = FiIcons;

const MaintenanceCalendar = () => {
  const { state } = useApp();
  const { maintenanceSchedule } = state;
  const [currentDate, setCurrentDate] = useState(new Date());

  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const days = [];
    
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null);
    }
    
    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(day);
    }
    
    return days;
  };

  const getMaintenanceForDate = (day) => {
    if (!day) return [];
    
    const dateStr = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    return maintenanceSchedule.filter(item => item.date === dateStr);
  };

  const navigateMonth = (direction) => {
    const newDate = new Date(currentDate);
    newDate.setMonth(newDate.getMonth() + direction);
    setCurrentDate(newDate);
  };

  const days = getDaysInMonth(currentDate);
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-6"
    >
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-gray-900">
          {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
        </h2>
        <div className="flex items-center space-x-2">
          <button
            onClick={() => navigateMonth(-1)}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <SafeIcon icon={FiChevronLeft} className="text-gray-600" />
          </button>
          <button
            onClick={() => navigateMonth(1)}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <SafeIcon icon={FiChevronRight} className="text-gray-600" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-1">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
          <div key={day} className="p-2 text-center text-sm font-medium text-gray-500">
            {day}
          </div>
        ))}
        
        {days.map((day, index) => {
          const maintenanceItems = getMaintenanceForDate(day);
          
          return (
            <div
              key={index}
              className={`min-h-[100px] p-2 border border-gray-200 ${
                day ? 'bg-white hover:bg-gray-50' : 'bg-gray-50'
              }`}
            >
              {day && (
                <>
                  <div className="text-sm font-medium text-gray-900 mb-1">{day}</div>
                  <div className="space-y-1">
                    {maintenanceItems.map((item) => (
                      <div
                        key={item.id}
                        className={`text-xs p-1 rounded ${
                          item.type === 'Preventive' ? 'bg-blue-100 text-blue-700' : 'bg-red-100 text-red-700'
                        }`}
                      >
                        <div className="font-medium truncate">{item.description}</div>
                        <div className="flex items-center space-x-1 mt-1">
                          <SafeIcon icon={FiUser} className="text-xs" />
                          <span>{item.technician}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-blue-50 rounded-lg p-4">
          <h3 className="font-medium text-blue-900 mb-2">Preventive Maintenance</h3>
          <p className="text-2xl font-bold text-blue-700">
            {maintenanceSchedule.filter(item => item.type === 'Preventive').length}
          </p>
        </div>
        
        <div className="bg-red-50 rounded-lg p-4">
          <h3 className="font-medium text-red-900 mb-2">Corrective Maintenance</h3>
          <p className="text-2xl font-bold text-red-700">
            {maintenanceSchedule.filter(item => item.type === 'Corrective').length}
          </p>
        </div>
        
        <div className="bg-green-50 rounded-lg p-4">
          <h3 className="font-medium text-green-900 mb-2">Completed</h3>
          <p className="text-2xl font-bold text-green-700">
            {maintenanceSchedule.filter(item => item.status === 'completed').length}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default MaintenanceCalendar;