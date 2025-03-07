import React from 'react';
import { Brain, TrendingUp, AlertTriangle, CheckCircle } from 'lucide-react';

interface Insight {
  id: string;
  title: string;
  description: string;
  impact: 'high' | 'medium' | 'low';
  category: 'prediction' | 'anomaly' | 'opportunity';
  date: string;
}

const insights: Insight[] = [
  {
    id: '1',
    title: 'Revenue Growth Prediction',
    description: 'AI models predict a 25% increase in revenue over the next quarter based on current trends and market conditions.',
    impact: 'high',
    category: 'prediction',
    date: '2025-02-26',
  },
  {
    id: '2',
    title: 'Unusual User Behavior',
    description: 'Detected abnormal login patterns from specific geographic regions. Recommended security review.',
    impact: 'high',
    category: 'anomaly',
    date: '2025-02-26',
  },
  {
    id: '3',
    title: 'Market Expansion Opportunity',
    description: 'Analysis suggests untapped market potential in the APAC region with an estimated market size of $2.5M.',
    impact: 'medium',
    category: 'opportunity',
    date: '2025-02-25',
  },
];

const InsightCard: React.FC<{ insight: Insight }> = ({ insight }) => {
  const getCategoryIcon = (category: Insight['category']) => {
    switch (category) {
      case 'prediction':
        return <TrendingUp className="h-5 w-5 text-blue-600" />;
      case 'anomaly':
        return <AlertTriangle className="h-5 w-5 text-red-600" />;
      case 'opportunity':
        return <CheckCircle className="h-5 w-5 text-green-600" />;
    }
  };

  const getImpactColor = (impact: Insight['impact']) => {
    switch (impact) {
      case 'high':
        return 'bg-red-100 text-red-800';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800';
      case 'low':
        return 'bg-green-100 text-green-800';
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-gray-50 rounded-lg">
            {getCategoryIcon(insight.category)}
          </div>
          <div>
            <h3 className="font-semibold">{insight.title}</h3>
            <p className="text-sm text-gray-500">{insight.date}</p>
          </div>
        </div>
        <span className={`px-3 py-1 rounded-full text-sm ${getImpactColor(insight.impact)}`}>
          {insight.impact} impact
        </span>
      </div>
      <p className="text-gray-600">{insight.description}</p>
    </div>
  );
};

export const Insights: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold">AI Insights</h2>
          <p className="text-gray-500">AI-powered analysis and recommendations</p>
        </div>
        <div className="p-3 bg-indigo-50 rounded-lg">
          <Brain className="h-6 w-6 text-indigo-600" />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {insights.map((insight) => (
          <InsightCard key={insight.id} insight={insight} />
        ))}
      </div>
    </div>
  );
};

export default Insights;