import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaGlobe } from 'react-icons/fa';
import styles from './DashboardNav.module.scss';

interface DashboardNavProps {
  userName: string;
  profilePic?: string;
}

const DashboardNav: React.FC<DashboardNavProps> = ({ userName, profilePic }) => {
  const [language, setLanguage] = useState<'EN' | 'NEP'>('EN');
  const navigate = useNavigate();

  const toggleLanguage = () => setLanguage(prev => (prev === 'EN' ? 'NEP' : 'EN'));

  return (
    <nav className={styles.navbar}>
      {/* Left side: Logo */}
      <div className={styles.left} onClick={() => navigate('/')}>
        <img src="/logo.svg" alt="Logo" className={styles.logo} />
      </div>

      {/* Right side: Language toggle + User info */}
      <div className={styles.right}>
        <button
          className={styles.iconButton}
          onClick={toggleLanguage}
          title="Toggle Language"
          aria-label="Toggle Language"
          type="button"
        >
          <FaGlobe />
          <span className={styles.languageLabel}>{language}</span>
        </button>

        <div className={styles.user} onClick={() => navigate('/dashboard/profile')} role="button" tabIndex={0} aria-label="Go to profile" onKeyDown={e => { if (e.key === 'Enter') navigate('/dashboard/profile')}}>
          <span className={styles.userName}>{userName}</span>
          <img
            src={profilePic || 'https://randomuser.me/api/portraits/women/68.jpg'}
            alt={`${userName} Profile`}
            className={styles.avatar}
          />
        </div>
      </div>
    </nav>
  );
};

export default DashboardNav;
