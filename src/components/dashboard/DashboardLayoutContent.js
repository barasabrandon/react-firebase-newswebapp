import React from 'react';
import { Outlet } from 'react-router-dom';

export default function DashboardLayoutContent() {
  return (
    <>
      <section className="dashboard-content-section">
        <div className="dashboard-content-div">
          <Outlet />
        </div>
      </section>
    </>
  );
}
