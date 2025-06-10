// Layout.tsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import DashboardNav from './DashboardNav';
import SideNav from './SideNav';
import styles from './Layout.module.scss';

const Dashboard: React.FC = () => {
  const userName = 'John Doe';
  const profilePic = '';

  return (
    <div className={styles.dashboardWrapper}>
      <DashboardNav userName={userName} profilePic={profilePic} />
      <div className={styles.dashboardMain}>
        <SideNav />
        <main className={styles.mainContent}>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
