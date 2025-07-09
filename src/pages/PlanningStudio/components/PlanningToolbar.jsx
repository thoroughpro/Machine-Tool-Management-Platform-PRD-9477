import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../../common/SafeIcon';

const { FiMousePointer, FiMove, FiRotateCw, FiLayers, FiGrid, FiSave, FiDownload } = FiIcons;

const PlanningToolbar = ({ selectedTool, setSelectedTool, canvasMode, setCanvasMode }) => {
  const tools = [
    { id: 'select', icon: FiMousePointer, label: 'Select' },
    { id: 'move', icon: FiMove, label: 'Move' },
    { id: 'rotate', icon: FiRotateCw, label: 'Rotate' }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex items-center space-x-4"
    >
      <div className="flex items-center bg-white rounded-lg shadow-sm border border-gray-200 p-1">
        {tools.map((tool) => (
          <button
            key={tool.id}
            onClick={() => setSelectedTool(tool.id)}
            className={`p-2 rounded-md transition-colors ${
              selectedTool === tool.id
                ? 'bg-primary-100 text-primary-600'
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
            }`}
            title={tool.label}
          >
            <SafeIcon icon={tool.icon} className="text-lg" />
          </button>
        ))}
      </div>

      <div className="flex items-center bg-white rounded-lg shadow-sm border border-gray-200 p-1">
        <button
          onClick={() => setCanvasMode('2d')}
          className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
            canvasMode === '2d'
              ? 'bg-primary-100 text-primary-600'
              : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
          }`}
        >
          2D
        </button>
        <button
          onClick={() => setCanvasMode('3d')}
          className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
            canvasMode === '3d'
              ? 'bg-primary-100 text-primary-600'
              : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
          }`}
        >
          3D
        </button>
      </div>

      <div className="flex items-center space-x-2">
        <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
          <SafeIcon icon={FiGrid} className="text-lg" />
        </button>
        <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
          <SafeIcon icon={FiLayers} className="text-lg" />
        </button>
        <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
          <SafeIcon icon={FiSave} className="text-lg" />
        </button>
        <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
          <SafeIcon icon={FiDownload} className="text-lg" />
        </button>
      </div>
    </motion.div>
  );
};

export default PlanningToolbar;