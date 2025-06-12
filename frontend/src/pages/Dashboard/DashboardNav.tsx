import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaBell, FaMoon, FaSun, FaGlobe } from 'react-icons/fa';
import styles from './DashboardNav.module.scss';

interface DashboardNavProps {
  userName: string;
  profilePic?: string;
}

const DashboardNav: React.FC<DashboardNavProps> = ({ userName, profilePic }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [language, setLanguage] = useState<'EN' | 'NEP'>('EN');

  const navigate = useNavigate(); // ✅ moved inside the component

  const toggleDarkMode = () => setIsDarkMode(prev => !prev);
  const toggleLanguage = () => setLanguage(prev => (prev === 'EN' ? 'NEP' : 'EN'));

  return (
    <nav className={styles.navbar}>
      {/* Left: Logo */}
      <div className={styles.left}>
        <img src="/logo.svg" alt="Logo" className={styles.logo} />
      </div>

      {/* Right: Controls */}
      <div className={styles.right}>
        <div className={styles.notificationWrapper}>
          <button className={styles.iconButton} title="Notifications">
            <FaBell />
            <span className={styles.notificationBadge}>3</span>
          </button>
        </div>

        <div className={styles.user}>
          <span className={styles.userName}>{userName}</span>
          <img
            src={profilePic || 'https://randomuser.me/api/portraits/women/68.jpg'}
            alt="Profile"
            className={styles.avatar}
            onClick={() => navigate('/dashboard/profile')}
          />
        </div>

        <button className={styles.iconButton} onClick={toggleLanguage} title="Toggle Language">
          <FaGlobe />
          <span>{language}</span>
        </button>
      </div>
    </nav>
  );
};

export default DashboardNav;
