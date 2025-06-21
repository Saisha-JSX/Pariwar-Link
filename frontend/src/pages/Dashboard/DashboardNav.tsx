import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUserCircle, FaSignOutAlt, FaChevronDown } from 'react-icons/fa';
import styles from './DashboardNav.module.scss';

interface DashboardNavProps {
  userName: string;
  profilePic?: string;
}

const DashboardNav: React.FC<DashboardNavProps> = ({ userName, profilePic }) => {
  const [language, setLanguage] = useState<'EN' | 'NEP'>('EN');
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const navigate = useNavigate();

  const toggleLanguage = () => {
    setLanguage(prev => (prev === 'EN' ? 'NEP' : 'EN'));
  };

  const toggleProfileMenu = () => setShowProfileMenu(prev => !prev);

  const handleLogout = () => {
    // TODO: Implement logout logic here
    navigate('/login');
  };

  return (
    <nav className={styles.navbar}>
      {/* Left side: PariwarLink text */}
      <div
        className={styles.left}
        onClick={() => navigate('/dashboard')}
        tabIndex={0}
        role="button"
        onKeyDown={e => {
          if (e.key === 'Enter') navigate('/dashboard');
        }}
      >
        <span className={styles.pariwarLink}>PariwarLink</span>
      </div>


      <div className={styles.right}>

        {/* Profile Menu */}
        <div
          className={styles.profile}
          tabIndex={0}
          onClick={toggleProfileMenu}
          onKeyDown={e => e.key === 'Enter' && toggleProfileMenu()}
          role="button"
          aria-label="Profile Menu"
          aria-haspopup="true"
          aria-expanded={showProfileMenu}
        >
          <img
            src={profilePic || 'https://randomuser.me/api/portraits/men/44.jpg'}
            alt={`${userName} avatar`}
            className={styles.avatar}
          />
          <FaChevronDown className={styles.chevron} />
          {showProfileMenu && (
            <div className={styles.dropdown} role="menu">
              <div
                className={styles.dropdownItem}
                onClick={() => navigate('/dashboard/profile')}
                tabIndex={0}
                role="menuitem"
                onKeyDown={e => e.key === 'Enter' && navigate('/dashboard/profile')}
              >
                <FaUserCircle />
                <span>Profile</span>
              </div>
              <div
                className={styles.dropdownItem}
                onClick={handleLogout}
                tabIndex={0}
                role="menuitem"
                onKeyDown={e => e.key === 'Enter' && handleLogout()}
              >
                <FaSignOutAlt />
                <span>Logout</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default DashboardNav;
