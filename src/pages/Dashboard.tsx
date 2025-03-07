import React from 'react';
import { DollarSign, Users, ShoppingCart, TrendingUp } from 'lucide-react';
import { MetricCard } from '../components/MetricCard';
import { RevenueChart } from '../components/RevenueChart';
import { RecentSales } from '../components/RecentSales';
import { AIInsights } from '../components/AIInsights';
import { DataUpload } from '../components/DataUpload';
import { useData } from '../context/DataContext';

export const Dashboard: React.FC = () => {
  const { data, loading } = useData();

  // Calculate metrics from data
  const calculateMetrics = () => {
    if (!data.length) return {
      revenue: '$0',
      users: '0',
      sales: '0',
      growth: '0%'
    };

    const totalRevenue = data.reduce((sum: number, row: any) => sum + (row.revenue || 0), 0);
    const totalCustomers = new Set(data.map((row: any) => row.customers)).size;
    const totalOrders = data.reduce((sum: number, row: any) => sum + (row.orders || 0), 0);
    
    return {
      revenue: `$${totalRevenue.toLocaleString()}`,
      users: totalCustomers.toString(),
      sales: totalOrders.toString(),
      growth: `${((totalOrders / data.length) * 100).toFixed(1)}%`
    };
  };

  const metrics = calculateMetrics();

  const metricCards = [
    {
      title: 'Total Revenue',
      value: metrics.revenue,
      change: 20.1,
      changeLabel: 'from last month',
      icon: <DollarSign className="h-5 w-5" />,
    },
    {
      title: 'Active Users',
      value: metrics.users,
      change: 10.1,
      changeLabel: 'from last month',
      icon: <Users className="h-5 w-5" />,
    },
    {
      title: 'Sales',
      value: metrics.sales,
      change: -5.1,
      changeLabel: 'from last month',
      icon: <ShoppingCart className="h-5 w-5" />,
    },
    {
      title: 'Growth',
      value: metrics.growth,
      change: 4.1,
      changeLabel: 'from last month',
      icon: <TrendingUp className="h-5 w-5" />,
    },
  ];

  return (
    <div>
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard Overview</h1>
        <p className="text-gray-500">Your business analytics and insights</p>
      </header>

      <div className="mb-6">
        <DataUpload />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {metricCards.map((metric, index) => (
          <MetricCard key={index} {...metric} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <RevenueChart data={data.map((row: any) => ({
            date: row.date,
            value: row.revenue || 0
          }))} />
        </div>
        <div>
          <RecentSales sales={data.slice(0, 5).map((row: any) => ({
            id: row.id,
            customer: `Customer ${row.id}`,
            email: `customer${row.id}@example.com`,
            amount: row.revenue || 0,
            date: row.date
          }))} />
        </div>
      </div>

      <div className="mt-6">
        <AIInsights insights={[
          {
            type: 'warning',
            message: 'Data Analysis in Progress',
            details: loading ? 'Processing uploaded dataset...' : 'Analysis complete. Review insights above.',
          },
          {
            type: 'success',
            message: 'Dataset Loaded Successfully',
            details: `${data.length} records processed and analyzed.`,
          },
          {
            type: 'info',
            message: 'Trend Detection',
            details: 'AI analyzing patterns in your dataset for actionable insights.',
          },
        ]} />
      </div>
    </div>
  );
};

export default Dashboard;