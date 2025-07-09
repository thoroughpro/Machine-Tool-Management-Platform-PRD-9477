import React from 'react';
import { motion } from 'framer-motion';
import ReactECharts from 'echarts-for-react';

const PerformanceCharts = ({ dateRange }) => {
  const utilizationData = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross'
      }
    },
    legend: {
      data: ['CNC Lathe #1', 'Milling Machine #2', 'Press #1']
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      data: ['Jan 15', 'Jan 16', 'Jan 17', 'Jan 18', 'Jan 19', 'Jan 20', 'Jan 21']
    },
    yAxis: {
      type: 'value',
      name: 'Utilization (%)',
      min: 0,
      max: 100
    },
    series: [
      {
        name: 'CNC Lathe #1',
        type: 'line',
        data: [85, 92, 88, 95, 90, 87, 92],
        smooth: true,
        lineStyle: { color: '#3B82F6' }
      },
      {
        name: 'Milling Machine #2',
        type: 'line',
        data: [78, 82, 85, 0, 0, 75, 80],
        smooth: true,
        lineStyle: { color: '#EF4444' }
      },
      {
        name: 'Press #1',
        type: 'line',
        data: [72, 75, 78, 82, 85, 78, 80],
        smooth: true,
        lineStyle: { color: '#10B981' }
      }
    ]
  };

  const downtimeData = {
    tooltip: {
      trigger: 'item'
    },
    legend: {
      orient: 'vertical',
      left: 'left'
    },
    series: [
      {
        name: 'Downtime Causes',
        type: 'pie',
        radius: '50%',
        data: [
          { value: 35, name: 'Scheduled Maintenance' },
          { value: 25, name: 'Equipment Failure' },
          { value: 20, name: 'Setup/Changeover' },
          { value: 15, name: 'Material Shortage' },
          { value: 5, name: 'Other' }
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  };

  const efficiencyData = {
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: ['Availability', 'Performance', 'Quality', 'OEE']
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      data: ['Week 1', 'Week 2', 'Week 3', 'Week 4']
    },
    yAxis: {
      type: 'value',
      name: 'Percentage (%)',
      min: 0,
      max: 100
    },
    series: [
      {
        name: 'Availability',
        type: 'bar',
        data: [95, 92, 94, 96],
        itemStyle: { color: '#3B82F6' }
      },
      {
        name: 'Performance',
        type: 'bar',
        data: [88, 90, 85, 92],
        itemStyle: { color: '#10B981' }
      },
      {
        name: 'Quality',
        type: 'bar',
        data: [98, 97, 99, 98],
        itemStyle: { color: '#F59E0B' }
      },
      {
        name: 'OEE',
        type: 'line',
        data: [82, 80, 79, 87],
        lineStyle: { color: '#EF4444', width: 3 }
      }
    ]
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-6"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-gray-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Machine Utilization Trends</h3>
          <ReactECharts option={utilizationData} style={{ height: '300px' }} />
        </div>
        
        <div className="bg-gray-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Downtime Analysis</h3>
          <ReactECharts option={downtimeData} style={{ height: '300px' }} />
        </div>
      </div>

      <div className="bg-gray-50 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Overall Equipment Effectiveness (OEE)</h3>
        <ReactECharts option={efficiencyData} style={{ height: '400px' }} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h4 className="text-sm font-medium text-gray-600 mb-2">Average Availability</h4>
          <p className="text-3xl font-bold text-blue-600">94.2%</p>
          <p className="text-sm text-gray-500 mt-1">+2.1% from last period</p>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h4 className="text-sm font-medium text-gray-600 mb-2">Performance Rate</h4>
          <p className="text-3xl font-bold text-green-600">88.8%</p>
          <p className="text-sm text-gray-500 mt-1">-1.2% from last period</p>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h4 className="text-sm font-medium text-gray-600 mb-2">Quality Rate</h4>
          <p className="text-3xl font-bold text-yellow-600">98.0%</p>
          <p className="text-sm text-gray-500 mt-1">+0.5% from last period</p>
        </div>
      </div>
    </motion.div>
  );
};

export default PerformanceCharts;