import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Dashboard } from './pages/Dashboard';
import { Analytics } from './pages/Analytics';
import { Reports } from './pages/Reports';
import { Insights } from './pages/Insights';

function App() {
  return (
    <Router>
      <div className="flex min-h-screen bg-gray-100">
        <Navbar />
        <main className="flex-1 ml-64 p-8">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/insights" element={<Insights />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;