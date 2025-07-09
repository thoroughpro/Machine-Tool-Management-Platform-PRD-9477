import React, { createContext, useContext, useReducer } from 'react';

const AppContext = createContext();

const initialState = {
  facilities: [
    {
      id: 1,
      name: 'Main Production Floor',
      area: 5000,
      machines: 12,
      status: 'operational',
      utilization: 85,
      lastMaintenance: '2024-01-15'
    }
  ],
  machines: [
    {
      id: 1,
      name: 'CNC Lathe #1',
      type: 'CNC Lathe',
      status: 'running',
      utilization: 92,
      nextMaintenance: '2024-02-15',
      location: { x: 100, y: 200, z: 0 },
      alerts: 0
    },
    {
      id: 2,
      name: 'Milling Machine #2',
      type: 'Milling Machine',
      status: 'maintenance',
      utilization: 0,
      nextMaintenance: '2024-01-20',
      location: { x: 300, y: 200, z: 0 },
      alerts: 2
    },
    {
      id: 3,
      name: 'Press #1',
      type: 'Hydraulic Press',
      status: 'running',
      utilization: 78,
      nextMaintenance: '2024-02-10',
      location: { x: 500, y: 200, z: 0 },
      alerts: 0
    }
  ],
  maintenanceSchedule: [
    {
      id: 1,
      machineId: 1,
      type: 'Preventive',
      date: '2024-02-15',
      description: 'Monthly calibration check',
      technician: 'John Smith',
      status: 'scheduled'
    },
    {
      id: 2,
      machineId: 2,
      type: 'Corrective',
      date: '2024-01-20',
      description: 'Replace worn bearings',
      technician: 'Mike Johnson',
      status: 'in-progress'
    }
  ],
  analytics: {
    totalDowntime: 120,
    avgUtilization: 85,
    maintenanceCost: 25000,
    energyConsumption: 15000
  }
};

function appReducer(state, action) {
  switch (action.type) {
    case 'UPDATE_MACHINE':
      return {
        ...state,
        machines: state.machines.map(machine =>
          machine.id === action.payload.id
            ? { ...machine, ...action.payload }
            : machine
        )
      };
    case 'ADD_MAINTENANCE':
      return {
        ...state,
        maintenanceSchedule: [...state.maintenanceSchedule, action.payload]
      };
    case 'UPDATE_MAINTENANCE':
      return {
        ...state,
        maintenanceSchedule: state.maintenanceSchedule.map(item =>
          item.id === action.payload.id
            ? { ...item, ...action.payload }
            : item
        )
      };
    default:
      return state;
  }
}

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};