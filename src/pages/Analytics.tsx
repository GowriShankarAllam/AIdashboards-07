import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { ArrowUpRight, ArrowDownRight, Users, ShoppingBag, Clock } from 'lucide-react';

const channelData = [
  { name: 'Organic Search', value: 4300, growth: 12.5 },
  { name: 'Direct Traffic', value: 3200, growth: -5.2 },
  { name: 'Social Media', value: 2800, growth: 23.1 },
  { name: 'Email', value: 2100, growth: 8.4 },
  { name: 'Referral', value: 1600, growth: 15.7 },
];

const userMetrics = [
  { name: 'New Users', value: '1,247', icon: <Users className="h-5 w-5" />, change: '+12.5%' },
  { name: 'Conversion Rate', value: '3.2%', icon: <ShoppingBag className="h-5 w-5" />, change: '+0.8%' },
  { name: 'Avg. Session', value: '4m 32s', icon: <Clock className="h-5 w-5" />, change: '-0.5%' },
];

export const Analytics: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-3 gap-6">
        {userMetrics.map((metric) => (
          <div key={metric.name} className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 bg-indigo-50 rounded-lg">{metric.icon}</div>
              <span className={`flex items-center ${
                metric.change.startsWith('+') ? 'text-green-600' : 'text-red-600'
              }`}>
                {metric.change}
                {metric.change.startsWith('+') ? <ArrowUpRight size={16} /> : <ArrowDownRight size={16} />}
              </span>
            </div>
            <h3 className="text-gray-500 text-sm">{metric.name}</h3>
            <p className="text-2xl font-semibold mt-1">{metric.value}</p>
          </div>
        ))}
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-lg font-semibold mb-6">Traffic Channels</h2>
        <div className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={channelData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#6366f1" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-lg font-semibold mb-6">Channel Performance</h2>
        <div className="space-y-4">
          {channelData.map((channel) => (
            <div key={channel.name} className="flex items-center justify-between">
              <div>
                <p className="font-medium">{channel.name}</p>
                <p className="text-sm text-gray-500">{channel.value.toLocaleString()} visits</p>
              </div>
              <div className={`flex items-center ${channel.growth >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                {channel.growth >= 0 ? <ArrowUpRight size={16} /> : <ArrowDownRight size={16} />}
                <span className="ml-1">{Math.abs(channel.growth)}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};