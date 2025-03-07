import React from 'react';
import type { SaleRecord } from '../types/dashboard';

interface RecentSalesProps {
  sales: SaleRecord[];
}

export const RecentSales: React.FC<RecentSalesProps> = ({ sales }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm">
      <div className="p-6">
        <h2 className="text-lg font-semibold mb-4">Recent Sales</h2>
        <div className="space-y-4">
          {sales.map((sale) => (
            <div key={sale.id} className="flex items-center justify-between">
              <div>
                <p className="font-medium">{sale.customer}</p>
                <p className="text-sm text-gray-500">{sale.email}</p>
              </div>
              <div className="text-right">
                <p className="font-medium">${sale.amount.toFixed(2)}</p>
                <p className="text-sm text-gray-500">{sale.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};