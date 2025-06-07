import React from 'react';
import { FiLogIn } from 'react-icons/fi';
import styles from './Navbar.module.scss';

const Navbar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logo}>Pariwar Link</div>
        <div className={styles.links}>
          <button className={styles.login}>
            Login
          </button>
          <button className={styles.signup}>
            <FiLogIn className={styles.icon} />
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
