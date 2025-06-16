import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.scss';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <div className={styles.logo}>Pariwar Link</div>
          <p className={styles.tagline}>Connecting Generations Through Family Trees</p>
        </div>

        <div className={styles.links}>
          <Link to="/about">About</Link>
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className={styles.copy}>
          &copy; {new Date().getFullYear()} Pariwar Link. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
