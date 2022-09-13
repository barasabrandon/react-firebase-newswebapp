import React from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
import DashboardLayoutContent from './components/dashboard/DashboardLayoutContent';
import DashboardSidebar from './components/dashboard/DashboardSidebar';
import './DashboardLayout.css';
import AuthLoginScreen from './screens/auth/AuthLoginScreen';

export default function DashboardLayout() {
  const getLocalUser = JSON.parse(localStorage.getItem('user-profile'));

  return (
    <>
      {getLocalUser?.length !== 0 ? (
        <div className="dashboard-container">
          <DashboardSidebar />
          <DashboardLayoutContent />
        </div>
      ) : (
        <Navigate to="/auth-login" />
      )}
    </>
  );
}
