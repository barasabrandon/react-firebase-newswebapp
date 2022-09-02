import React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { Button } from 'primereact/button';

import './DashboardLandingPage.css';

import UserStatics from '../../../components/dashboard/landingPage/UserStatics';
import ContainerHeader from '../../../components/dashboard/landingPage/ContainerHeader';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function DashboardLandingPage() {
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
