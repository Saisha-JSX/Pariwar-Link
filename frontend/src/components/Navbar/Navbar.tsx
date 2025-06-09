import React from 'react';
import { FiLogIn } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.scss';

const Navbar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logo}>Pariwar Link</div>
        <div className={styles.links}>
          <Link to="/login" className={styles.login}>
            Login
          </Link>
          <Link to="/signup" className={styles.signup}>
            <FiLogIn className={styles.icon} />
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
