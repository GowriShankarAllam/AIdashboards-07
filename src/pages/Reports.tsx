import React, { useState } from 'react';
import { FileText, Download, Filter } from 'lucide-react';

interface Report {
  id: string;
  name: string;
  type: string;
  date: string;
  status: 'completed' | 'pending' | 'failed';
}

const reports: Report[] = [
  { id: '1', name: 'Monthly Revenue Report', type: 'Financial', date: '2025-02-26', status: 'completed' },
  { id: '2', name: 'User Engagement Analysis', type: 'Analytics', date: '2025-02-25', status: 'completed' },
  { id: '3', name: 'Sales Performance Q1', type: 'Sales', date: '2025-02-24', status: 'pending' },
  { id: '4', name: 'Customer Satisfaction Survey', type: 'Customer', date: '2025-02-23', status: 'completed' },
  { id: '5', name: 'Marketing Campaign Results', type: 'Marketing', date: '2025-02-22', status: 'failed' },
];

const reportTypes = ['All', 'Financial', 'Analytics', 'Sales', 'Customer', 'Marketing'];

export const Reports: React.FC = () => {
  const [selectedType, setSelectedType] = useState('All');

  const filteredReports = selectedType === 'All' 
    ? reports 
    : reports.filter(report => report.type === selectedType);

  const getStatusColor = (status: Report['status']) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'failed':
        return 'bg-red-100 text-red-800';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold">Reports</h2>
        <button className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
          <Filter className="h-4 w-4 mr-2" />
          Filter Reports
        </button>
      </div>

      <div className="flex space-x-2 overflow-x-auto pb-2">
        {reportTypes.map((type) => (
          <button
            key={type}
            onClick={() => setSelectedType(type)}
            className={`px-4 py-2 rounded-lg ${
              selectedType === type
                ? 'bg-indigo-600 text-white'
                : 'bg-white text-gray-600 hover:bg-gray-50'
            }`}
          >
            {type}
          </button>
        ))}
      </div>

      <div className="bg-white rounded-lg shadow-sm">
        <div className="p-6">
          <div className="space-y-4">
            {filteredReports.map((report) => (
              <div key={report.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-4">
                  <div className="p-2 bg-indigo-50 rounded-lg">
                    <FileText className="h-5 w-5 text-indigo-600" />
                  </div>
                  <div>
                    <p className="font-medium">{report.name}</p>
                    <p className="text-sm text-gray-500">{report.date}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <span className={`px-3 py-1 rounded-full text-sm ${getStatusColor(report.status)}`}>
                    {report.status}
                  </span>
                  <button className="p-2 hover:bg-gray-100 rounded-lg">
                    <Download className="h-5 w-5 text-gray-600" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};