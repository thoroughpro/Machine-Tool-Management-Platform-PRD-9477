import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ToolPalette from './components/ToolPalette';
import PlanningCanvas from './components/PlanningCanvas';
import PropertiesPanel from './components/PropertiesPanel';
import PlanningToolbar from './components/PlanningToolbar';

const PlanningStudio = () => {
  const [selectedTool, setSelectedTool] = useState('select');
  const [selectedMachine, setSelectedMachine] = useState(null);
  const [canvasMode, setCanvasMode] = useState('2d');

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="h-full flex flex-col"
    >
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-gray-900">3D Planning Studio</h1>
        <PlanningToolbar
          selectedTool={selectedTool}
          setSelectedTool={setSelectedTool}
          canvasMode={canvasMode}
          setCanvasMode={setCanvasMode}
        />
      </div>

      <div className="flex-1 flex gap-6">
        <div className="w-64 flex-shrink-0">
          <ToolPalette
            selectedTool={selectedTool}
            setSelectedTool={setSelectedTool}
          />
        </div>

        <div className="flex-1">
          <PlanningCanvas
            selectedTool={selectedTool}
            selectedMachine={selectedMachine}
            setSelectedMachine={setSelectedMachine}
            canvasMode={canvasMode}
          />
        </div>

        <div className="w-80 flex-shrink-0">
          <PropertiesPanel
            selectedMachine={selectedMachine}
            setSelectedMachine={setSelectedMachine}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default PlanningStudio;