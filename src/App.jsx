import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Layout from './components/Layout/Layout';
import Dashboard from './pages/Dashboard/Dashboard';
import PlanningStudio from './pages/PlanningStudio/PlanningStudio';
import MaintenanceHub from './pages/MaintenanceHub/MaintenanceHub';
import Analytics from './pages/Analytics/Analytics';
import { AppProvider } from './context/AppContext';
import './App.css';

function App() {
  return (
    <AppProvider>
      <DndProvider backend={HTML5Backend}>
        <Router>
          <Layout>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/planning" element={<PlanningStudio />} />
              <Route path="/maintenance" element={<MaintenanceHub />} />
              <Route path="/analytics" element={<Analytics />} />
            </Routes>
          </Layout>
        </Router>
      </DndProvider>
    </AppProvider>
  );
}

export default App;