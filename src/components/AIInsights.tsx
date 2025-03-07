import React from 'react';
import { AlertTriangle, CheckCircle, Info } from 'lucide-react';
import type { AIInsight } from '../types/dashboard';

interface AIInsightsProps {
  insights: AIInsight[];
}

export const AIInsights: React.FC<AIInsightsProps> = ({ insights }) => {
  const getIcon = (type: AIInsight['type']) => {
    switch (type) {
      case 'warning':
        return <AlertTriangle className="text-yellow-500" />;
      case 'success':
        return <CheckCircle className="text-green-500" />;
      case 'info':
        return <Info className="text-blue-500" />;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm">
      <div className="p-6">
        <h2 className="text-lg font-semibold mb-4">AI Insights</h2>
        <div className="space-y-4">
          {insights.map((insight, index) => (
            <div key={index} className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
              {getIcon(insight.type)}
              <div>
                <p className="font-medium">{insight.message}</p>
                <p className="text-sm text-gray-500">{insight.details}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};