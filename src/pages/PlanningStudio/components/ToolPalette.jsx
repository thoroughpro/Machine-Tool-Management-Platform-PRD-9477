import React from 'react';
import { motion } from 'framer-motion';
import { useDrag } from 'react-dnd';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../../common/SafeIcon';

const { FiCpu, FiHardDrive, FiTool, FiBox, FiSettings } = FiIcons;

const DraggableTool = ({ tool }) => {
  const [{ isDragging }, drag] = useDrag({
    type: 'machine',
    item: { type: 'machine', machineType: tool.type },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <motion.div
      ref={drag}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className={`p-4 bg-white rounded-lg shadow-sm border border-gray-200 cursor-move hover:shadow-md transition-shadow ${
        isDragging ? 'opacity-50' : ''
      }`}
    >
      <div className="flex items-center space-x-3">
        <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
          <SafeIcon icon={tool.icon} className="text-primary-600" />
        </div>
        <div>
          <h3 className="font-medium text-gray-900">{tool.name}</h3>
          <p className="text-sm text-gray-500">{tool.category}</p>
        </div>
      </div>
    </motion.div>
  );
};

const ToolPalette = ({ selectedTool, setSelectedTool }) => {
  const machineTypes = [
    { id: 1, name: 'CNC Lathe', type: 'cnc_lathe', category: 'CNC Machines', icon: FiCpu },
    { id: 2, name: 'Milling Machine', type: 'milling', category: 'CNC Machines', icon: FiHardDrive },
    { id: 3, name: 'Hydraulic Press', type: 'press', category: 'Forming', icon: FiTool },
    { id: 4, name: 'Conveyor Belt', type: 'conveyor', category: 'Material Handling', icon: FiBox },
    { id: 5, name: 'Assembly Station', type: 'assembly', category: 'Assembly', icon: FiSettings }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
    >
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Machine Tools</h2>
      
      <div className="space-y-3">
        {machineTypes.map((tool) => (
          <DraggableTool key={tool.id} tool={tool} />
        ))}
      </div>

      <div className="mt-6 pt-6 border-t border-gray-200">
        <h3 className="text-sm font-medium text-gray-900 mb-3">Infrastructure</h3>
        <div className="grid grid-cols-2 gap-2">
          <button className="p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
            <SafeIcon icon={FiBox} className="text-gray-600 mx-auto mb-1" />
            <span className="text-xs text-gray-600">Pillar</span>
          </button>
          <button className="p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
            <SafeIcon icon={FiSettings} className="text-gray-600 mx-auto mb-1" />
            <span className="text-xs text-gray-600">Utilities</span>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ToolPalette;