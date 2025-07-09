import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const { FiHome, FiBox, FiTool, FiBarChart3, FiSettings, FiCpu } = FiIcons;

const Sidebar = () => {
  const menuItems = [
    { path: '/', icon: FiHome, label: 'Dashboard' },
    { path: '/planning', icon: FiBox, label: '3D Planning' },
    { path: '/maintenance', icon: FiTool, label: 'Maintenance' },
    { path: '/analytics', icon: FiBarChart3, label: 'Analytics' }
  ];

  return (
    <motion.div
      initial={{ x: -250 }}
      animate={{ x: 0 }}
      className="w-64 bg-white shadow-lg border-r border-gray-200"
    >
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
            <SafeIcon icon={FiCpu} className="text-white text-xl" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-900">ToolManager</h1>
            <p className="text-sm text-gray-500">Lifecycle Platform</p>
          </div>
        </div>
      </div>

      <nav className="mt-6">
        <div className="px-4 space-y-2">
          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                  isActive
                    ? 'bg-primary-50 text-primary-700 border-r-2 border-primary-600'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`
              }
            >
              <SafeIcon icon={item.icon} className="mr-3 text-lg" />
              {item.label}
            </NavLink>
          ))}
        </div>
      </nav>

      <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
          <div>
            <p className="text-sm font-medium text-gray-900">John Doe</p>
            <p className="text-xs text-gray-500">Plant Manager</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Sidebar;