import React from 'react';
import { LayoutDashboard, BarChart2, FileText, Lightbulb, Users, Settings } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

interface NavItem {
  label: string;
  icon: React.ReactNode;
  path: string;
}

const navItems: NavItem[] = [
  { label: 'Dashboard', icon: <LayoutDashboard size={20} />, path: '/' },
  { label: 'Analytics', icon: <BarChart2 size={20} />, path: '/analytics' },
  { label: 'Reports', icon: <FileText size={20} />, path: '/reports' },
  { label: 'Insights', icon: <Lightbulb size={20} />, path: '/insights' },
  { label: 'Users', icon: <Users size={20} />, path: '/users' },
  { label: 'Settings', icon: <Settings size={20} />, path: '/settings' },
];

export const Navbar: React.FC = () => {
  const location = useLocation();

  return (
    <nav className="fixed left-0 top-0 h-full w-64 bg-white shadow-lg">
      <div className="p-6">
        <h1 className="text-xl font-bold text-gray-800 mb-8">Analytics</h1>
        <div className="space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                location.pathname === item.path
                  ? 'bg-indigo-50 text-indigo-600'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              {item.icon}
              <span>{item.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};