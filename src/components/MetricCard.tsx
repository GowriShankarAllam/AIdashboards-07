import React from 'react';
import { ArrowUpIcon, ArrowDownIcon } from 'lucide-react';
import type { MetricCard as MetricCardType } from '../types/dashboard';

export const MetricCard: React.FC<MetricCardType> = ({ title, value, change, changeLabel, icon }) => {
  const isPositive = change >= 0;

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <span className="text-gray-500 text-sm">{title}</span>
        <span className="text-gray-600">{icon}</span>
      </div>
      <div className="flex items-baseline">
        <span className="text-2xl font-semibold">{value}</span>
        <span className={`ml-2 flex items-center text-sm ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
          {isPositive ? <ArrowUpIcon size={16} /> : <ArrowDownIcon size={16} />}
          {Math.abs(change)}%
          <span className="text-gray-500 ml-1">{changeLabel}</span>
        </span>
      </div>
    </div>
  );
};