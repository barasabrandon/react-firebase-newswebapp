import React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { Button } from 'primereact/button';

import './DashboardLandingPage.css';

import UserStatics from '../../../components/dashboard/landingPage/UserStatics';
import ContainerHeader from '../../../components/dashboard/landingPage/ContainerHeader';
import { useSelector } from 'react-redux';

export default function DashboardLandingPage() {
  const { userProfile } = useSelector((state) => state.auth);

  return (
    <div className="dashboardlandingpage-screen">
      <div className="dashboardlandingpage-container">
        <div className="dashboardlandingpage-your-contribution">
          <ContainerHeader title="Your Contributions" />
          <UserStatics />
        </div>
      </div>
    </div>
  );
}
