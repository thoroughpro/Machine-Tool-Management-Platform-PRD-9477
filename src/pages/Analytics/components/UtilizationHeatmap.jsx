import React from 'react';
import { motion } from 'framer-motion';
import ReactECharts from 'echarts-for-react';

const UtilizationHeatmap = ({ dateRange }) => {
  const generateHeatmapData = () => {
    const data = [];
    const hours = ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23'];
    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    
    for (let i = 0; i < 7; i++) {
      for (let j = 0; j < 24; j++) {
        const value = Math.floor(Math.random() * 100);
        data.push([j, i, value]);
      }
    }
    return data;
  };

  const heatmapData = {
    tooltip: {
      position: 'top',
      formatter: function (params) {
        const hours = ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23'];
        const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
        return `${days[params.data[1]]} ${hours[params.data[0]]}:00<br/>Utilization: ${params.data[2]}%`;
      }
    },
    grid: {
      height: '50%',
      top: '10%'
    },
    xAxis: {
      type: 'category',
      data: ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23'],
      splitArea: {
        show: true
      }
    },
    yAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      splitArea: {
        show: true
      }
    },
    visualMap: {
      min: 0,
      max: 100,
      calculable: true,
      orient: 'horizontal',
      left: 'center',
      bottom: '15%',
      inRange: {
        color: ['#ffffff', '#3B82F6']
      }
    },
    series: [{
      name: 'Utilization',
      type: 'heatmap',
      data: generateHeatmapData(),
      label: {
        show: false
      },
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }]
  };

  const machineUtilizationData = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    legend: {
      data: ['Current Week', 'Previous Week', 'Target']
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      data: ['CNC Lathe #1', 'Milling Machine #2', 'Press #1', 'Assembly Line', 'Conveyor System']
    },
    yAxis: {
      type: 'value',
      name: 'Utilization (%)',
      min: 0,
      max: 100
    },
    series: [
      {
        name: 'Current Week',
        type: 'bar',
        data: [92, 45, 78, 85, 68],
        itemStyle: { color: '#3B82F6' }
      },
      {
        name: 'Previous Week',
        type: 'bar',
        data: [88, 82, 75, 80, 72],
        itemStyle: { color: '#94A3B8' }
      },
      {
        name: 'Target',
        type: 'line',
        data: [85, 85, 85, 85, 85],
        lineStyle: { color: '#EF4444', width: 2, type: 'dashed' }
      }
    ]
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-6"
    >
      <div className="bg-gray-50 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Weekly Utilization Heatmap</h3>
        <ReactECharts option={heatmapData} style={{ height: '400px' }} />
      </div>

      <div className="bg-gray-50 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Machine Utilization Comparison</h3>
        <ReactECharts option={machineUtilizationData} style={{ height: '400px' }} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h4 className="text-sm font-medium text-gray-600 mb-2">Peak Utilization Hours</h4>
          <p className="text-3xl font-bold text-green-600">9-11 AM</p>
          <p className="text-sm text-gray-500 mt-1">Average 95% utilization</p>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h4 className="text-sm font-medium text-gray-600 mb-2">Low Utilization Hours</h4>
          <p className="text-3xl font-bold text-red-600">2-4 PM</p>
          <p className="text-sm text-gray-500 mt-1">Average 45% utilization</p>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h4 className="text-sm font-medium text-gray-600 mb-2">Weekend Utilization</h4>
          <p className="text-3xl font-bold text-blue-600">25%</p>
          <p className="text-sm text-gray-500 mt-1">Maintenance window</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Utilization Insights</h3>
        <div className="space-y-4">
          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
            <div>
              <p className="font-medium text-gray-900">High Performance Period</p>
              <p className="text-sm text-gray-600">Monday-Wednesday shows consistently high utilization across all machines</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
            <div>
              <p className="font-medium text-gray-900">Optimization Opportunity</p>
              <p className="text-sm text-gray-600">Milling Machine #2 shows low utilization due to maintenance schedule</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
            <div>
              <p className="font-medium text-gray-900">Scheduled Downtime</p>
              <p className="text-sm text-gray-600">Weekend periods reserved for preventive maintenance activities</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default UtilizationHeatmap;