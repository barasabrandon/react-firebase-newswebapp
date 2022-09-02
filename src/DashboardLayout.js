import React from 'react';
import DashboardLayoutContent from './components/dashboard/DashboardLayoutContent';
import DashboardSidebar from './components/dashboard/DashboardSidebar';
import './DashboardLayout.css';

export default function DashboardLayout() {
  return (
    <div className="dashboard-container">
      <DashboardSidebar />
      <DashboardLayoutContent />
    </div>
  );
}
