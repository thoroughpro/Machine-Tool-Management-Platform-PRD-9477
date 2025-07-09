import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../../common/SafeIcon';

const { FiPackage, FiAlertTriangle, FiPlus, FiSearch } = FiIcons;

const PartsInventory = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const inventory = [
    {
      id: 1,
      name: 'Ball Bearings',
      partNumber: 'BB-001',
      category: 'Bearings',
      quantity: 25,
      minQuantity: 10,
      unit: 'pieces',
      cost: 15.99,
      supplier: 'Industrial Parts Co.',
      location: 'Shelf A-1'
    },
    {
      id: 2,
      name: 'Hydraulic Fluid',
      partNumber: 'HF-205',
      category: 'Fluids',
      quantity: 8,
      minQuantity: 15,
      unit: 'liters',
      cost: 45.00,
      supplier: 'Fluid Systems Inc.',
      location: 'Storage Room B'
    },
    {
      id: 3,
      name: 'Drive Belt',
      partNumber: 'DB-150',
      category: 'Belts',
      quantity: 12,
      minQuantity: 5,
      unit: 'pieces',
      cost: 28.50,
      supplier: 'Power Transmission Co.',
      location: 'Shelf C-3'
    },
    {
      id: 4,
      name: 'Cutting Tools',
      partNumber: 'CT-300',
      category: 'Tools',
      quantity: 3,
      minQuantity: 8,
      unit: 'pieces',
      cost: 125.00,
      supplier: 'Precision Tools Ltd.',
      location: 'Tool Cabinet'
    }
  ];

  const filteredInventory = inventory.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.partNumber.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const lowStockItems = inventory.filter(item => item.quantity <= item.minQuantity);

  const getStockStatus = (quantity, minQuantity) => {
    if (quantity <= minQuantity) {
      return { color: 'text-red-600 bg-red-50', label: 'Low Stock' };
    } else if (quantity <= minQuantity * 1.5) {
      return { color: 'text-yellow-600 bg-yellow-50', label: 'Medium Stock' };
    } else {
      return { color: 'text-green-600 bg-green-50', label: 'Good Stock' };
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-6"
    >
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-gray-900">Parts Inventory</h2>
        <button className="flex items-center space-x-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors">
          <SafeIcon icon={FiPlus} />
          <span>Add Part</span>
        </button>
      </div>

      {/* Search and Filters */}
      <div className="flex items-center space-x-4">
        <div className="flex-1 relative">
          <SafeIcon icon={FiSearch} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search parts..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
          />
        </div>
        <select className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500">
          <option>All Categories</option>
          <option>Bearings</option>
          <option>Fluids</option>
          <option>Belts</option>
          <option>Tools</option>
        </select>
      </div>

      {/* Low Stock Alert */}
      {lowStockItems.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-red-50 border border-red-200 rounded-lg p-4"
        >
          <div className="flex items-center space-x-2">
            <SafeIcon icon={FiAlertTriangle} className="text-red-600" />
            <span className="font-medium text-red-900">
              {lowStockItems.length} item(s) are running low on stock
            </span>
          </div>
        </motion.div>
      )}

      {/* Inventory Table */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Part
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Category
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Quantity
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Cost
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Location
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredInventory.map((item) => {
                const stockStatus = getStockStatus(item.quantity, item.minQuantity);
                
                return (
                  <motion.tr
                    key={item.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="hover:bg-gray-50"
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mr-3">
                          <SafeIcon icon={FiPackage} className="text-gray-600" />
                        </div>
                        <div>
                          <div className="text-sm font-medium text-gray-900">{item.name}</div>
                          <div className="text-sm text-gray-500">{item.partNumber}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded-full">
                        {item.category}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        {item.quantity} {item.unit}
                      </div>
                      <div className="text-sm text-gray-500">
                        Min: {item.minQuantity} {item.unit}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${stockStatus.color}`}>
                        {stockStatus.label}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      ${item.cost}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {item.location}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <button className="text-primary-600 hover:text-primary-900 mr-3">
                        Edit
                      </button>
                      <button className="text-red-600 hover:text-red-900">
                        Delete
                      </button>
                    </td>
                  </motion.tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
          <h3 className="text-sm font-medium text-gray-500">Total Items</h3>
          <p className="text-2xl font-bold text-gray-900">{inventory.length}</p>
        </div>
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
          <h3 className="text-sm font-medium text-gray-500">Low Stock</h3>
          <p className="text-2xl font-bold text-red-600">{lowStockItems.length}</p>
        </div>
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
          <h3 className="text-sm font-medium text-gray-500">Total Value</h3>
          <p className="text-2xl font-bold text-gray-900">
            ${inventory.reduce((sum, item) => sum + (item.quantity * item.cost), 0).toFixed(2)}
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
          <h3 className="text-sm font-medium text-gray-500">Categories</h3>
          <p className="text-2xl font-bold text-gray-900">
            {[...new Set(inventory.map(item => item.category))].length}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default PartsInventory;