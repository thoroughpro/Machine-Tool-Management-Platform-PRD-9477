import React, { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { useDrop } from 'react-dnd';
import { useApp } from '../../../context/AppContext';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../../common/SafeIcon';

const { FiGrid, FiMaximize2 } = FiIcons;

const PlanningCanvas = ({ selectedTool, selectedMachine, setSelectedMachine, canvasMode }) => {
  const { state, dispatch } = useApp();
  const { machines } = state;
  const [canvasSize, setCanvasSize] = useState({ width: 800, height: 600 });

  const [{ isOver }, drop] = useDrop({
    accept: 'machine',
    drop: (item, monitor) => {
      const offset = monitor.getClientOffset();
      const canvasRect = monitor.getDropResult();
      
      if (offset && canvasRect) {
        const newMachine = {
          id: Date.now(),
          name: `${item.machineType} #${machines.length + 1}`,
          type: item.machineType,
          status: 'offline',
          utilization: 0,
          nextMaintenance: null,
          location: {
            x: offset.x - canvasRect.x,
            y: offset.y - canvasRect.y,
            z: 0
          },
          alerts: 0
        };

        dispatch({ type: 'UPDATE_MACHINE', payload: newMachine });
      }
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  const handleMachineClick = useCallback((machine) => {
    setSelectedMachine(machine);
  }, [setSelectedMachine]);

  const getMachineIcon = (type) => {
    switch (type) {
      case 'cnc_lathe':
      case 'CNC Lathe':
        return FiGrid;
      case 'milling':
      case 'Milling Machine':
        return FiMaximize2;
      default:
        return FiGrid;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden"
    >
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-900">
            {canvasMode === '3d' ? '3D View' : 'Floor Plan'}
          </h2>
          <div className="text-sm text-gray-500">
            {canvasSize.width} × {canvasSize.height} px
          </div>
        </div>
      </div>

      <div
        ref={drop}
        className={`relative bg-gray-50 ${isOver ? 'bg-blue-50' : ''}`}
        style={{ height: '500px' }}
      >
        {/* Grid Background */}
        <div className="absolute inset-0 opacity-20">
          <svg width="100%" height="100%" className="pointer-events-none">
            <defs>
              <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#e5e7eb" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        {/* Machines */}
        {machines.map((machine) => (
          <motion.div
            key={machine.id}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className={`absolute cursor-pointer transform -translate-x-1/2 -translate-y-1/2 ${
              selectedMachine?.id === machine.id ? 'ring-2 ring-primary-500' : ''
            }`}
            style={{
              left: machine.location?.x || 100,
              top: machine.location?.y || 100,
            }}
            onClick={() => handleMachineClick(machine)}
          >
            <div className="bg-white rounded-lg shadow-md border border-gray-200 p-4 min-w-[120px]">
              <div className="flex items-center space-x-2 mb-2">
                <SafeIcon icon={getMachineIcon(machine.type)} className="text-primary-600" />
                <div className={`w-2 h-2 rounded-full ${
                  machine.status === 'running' ? 'bg-green-500' :
                  machine.status === 'maintenance' ? 'bg-yellow-500' : 'bg-red-500'
                }`} />
              </div>
              <h3 className="font-medium text-gray-900 text-sm">{machine.name}</h3>
              <p className="text-xs text-gray-500">{machine.type}</p>
            </div>
          </motion.div>
        ))}

        {/* Drop Zone Indicator */}
        {isOver && (
          <div className="absolute inset-0 bg-blue-100 bg-opacity-50 flex items-center justify-center">
            <div className="text-blue-600 text-lg font-medium">
              Drop machine here
            </div>
          </div>
        )}

        {/* Empty State */}
        {machines.length === 0 && !isOver && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <SafeIcon icon={FiGrid} className="text-4xl text-gray-400 mx-auto mb-2" />
              <p className="text-gray-600">Drag machines from the palette to start planning</p>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default PlanningCanvas;