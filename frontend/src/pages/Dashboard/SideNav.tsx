import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaTree, FaBirthdayCake, FaCalendarAlt, FaStar } from 'react-icons/fa';
import styles from './SideNav.module.scss';

const SideNav: React.FC = () => {
  return (
    <aside className={styles.sideNav}>
      <nav className={styles.navLinks}>
        <NavLink
          to="/dashboard/family"
          className={({ isActive }) =>
            isActive ? `${styles.link} ${styles.active}` : styles.link
          }
        >
          <FaTree className={styles.icon} /> Family Tree
        </NavLink>
        <NavLink
          to="/dashboard/birthdays"
          className={({ isActive }) =>
            isActive ? `${styles.link} ${styles.active}` : styles.link
          }
        >
          <FaBirthdayCake className={styles.icon} /> Birthdays
        </NavLink>
        <NavLink
          to="/dashboard/events"
          className={({ isActive }) =>
            isActive ? `${styles.link} ${styles.active}` : styles.link
          }
        >
          <FaCalendarAlt className={styles.icon} /> Events
        </NavLink>
        <NavLink
          to="/dashboard/horoscope"
          className={({ isActive }) =>
            isActive ? `${styles.link} ${styles.active}` : styles.link
          }
        >
          <FaStar className={styles.icon} /> Horoscope
        </NavLink>
      </nav>
    </aside>
  );
};

export default SideNav;
