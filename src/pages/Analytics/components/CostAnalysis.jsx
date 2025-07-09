import React from 'react';
import { motion } from 'framer-motion';
import ReactECharts from 'echarts-for-react';

const CostAnalysis = ({ dateRange }) => {
  const maintenanceCostData = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross'
      }
    },
    legend: {
      data: ['Preventive Maintenance', 'Corrective Maintenance', 'Parts Cost', 'Labor Cost']
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
    },
    yAxis: {
      type: 'value',
      name: 'Cost ($)',
      axisLabel: {
        formatter: '${value}'
      }
    },
    series: [
      {
        name: 'Preventive Maintenance',
        type: 'bar',
        stack: 'total',
        data: [2000, 1800, 2200, 1900, 2100, 2000],
        itemStyle: { color: '#3B82F6' }
      },
      {
        name: 'Corrective Maintenance',
        type: 'bar',
        stack: 'total',
        data: [3000, 4200, 2800, 3500, 3200, 2900],
        itemStyle: { color: '#EF4444' }
      },
      {
        name: 'Parts Cost',
        type: 'bar',
        stack: 'total',
        data: [1500, 2100, 1800, 2200, 1900, 1700],
        itemStyle: { color: '#10B981' }
      },
      {
        name: 'Labor Cost',
        type: 'bar',
        stack: 'total',
        data: [2500, 2800, 2600, 2900, 2700, 2600],
        itemStyle: { color: '#F59E0B' }
      }
    ]
  };

  const costBreakdownData = {
    tooltip: {
      trigger: 'item'
    },
    legend: {
      orient: 'vertical',
      left: 'left'
    },
    series: [
      {
        name: 'Cost Breakdown',
        type: 'pie',
        radius: ['40%', '70%'],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: 'center'
        },
        emphasis: {
          label: {
            show: true,
            fontSize: '18',
            fontWeight: 'bold'
          }
        },
        labelLine: {
          show: false
        },
        data: [
          { value: 35, name: 'Labor Costs' },
          { value: 28, name: 'Parts & Materials' },
          { value: 22, name: 'Equipment Downtime' },
          { value: 10, name: 'External Services' },
          { value: 5, name: 'Other' }
        ]
      }
    ]
  };

  const roiData = {
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: ['Investment', 'Savings', 'ROI']
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      data: ['Q1', 'Q2', 'Q3', 'Q4']
    },
    yAxis: [
      {
        type: 'value',
        name: 'Amount ($)',
        position: 'left',
        axisLabel: {
          formatter: '${value}'
        }
      },
      {
        type: 'value',
        name: 'ROI (%)',
        position: 'right',
        axisLabel: {
          formatter: '{value}%'
        }
      }
    ],
    series: [
      {
        name: 'Investment',
        type: 'bar',
        data: [15000, 12000, 18000, 14000],
        itemStyle: { color: '#EF4444' }
      },
      {
        name: 'Savings',
        type: 'bar',
        data: [8000, 15000, 22000, 19000],
        itemStyle: { color: '#10B981' }
      },
      {
        name: 'ROI',
        type: 'line',
        yAxisIndex: 1,
        data: [15, 25, 35, 42],
        lineStyle: { color: '#3B82F6', width: 3 }
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
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Maintenance Cost Trends</h3>
          <ReactECharts option={maintenanceCostData} style={{ height: '300px' }} />
        </div>
        
        <div className="bg-gray-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Cost Breakdown</h3>
          <ReactECharts option={costBreakdownData} style={{ height: '300px' }} />
        </div>
      </div>

      <div className="bg-gray-50 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Return on Investment (ROI)</h3>
        <ReactECharts option={roiData} style={{ height: '400px' }} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h4 className="text-sm font-medium text-gray-600 mb-2">Total Maintenance Cost</h4>
          <p className="text-3xl font-bold text-gray-900">$47,200</p>
          <p className="text-sm text-red-500 mt-1">+8% from last period</p>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h4 className="text-sm font-medium text-gray-600 mb-2">Cost per Machine Hour</h4>
          <p className="text-3xl font-bold text-blue-600">$12.50</p>
          <p className="text-sm text-green-500 mt-1">-3% from last period</p>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h4 className="text-sm font-medium text-gray-600 mb-2">Preventive vs Corrective</h4>
          <p className="text-3xl font-bold text-green-600">65:35</p>
          <p className="text-sm text-gray-500 mt-1">Optimal ratio</p>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h4 className="text-sm font-medium text-gray-600 mb-2">Annual ROI</h4>
          <p className="text-3xl font-bold text-yellow-600">28.5%</p>
          <p className="text-sm text-green-500 mt-1">+5.2% from last year</p>
        </div>
      </div>
    </motion.div>
  );
};

export default CostAnalysis;