export interface MetricCard {
  title: string;
  value: number | string;
  change: number;
  changeLabel: string;
  icon: React.ReactNode;
}

export interface SaleRecord {
  id: string;
  customer: string;
  email: string;
  amount: number;
  date: string;
}

export interface ChartData {
  date: string;
  value: number;
}

export interface AIInsight {
  type: 'warning' | 'success' | 'info';
  message: string;
  details: string;
}