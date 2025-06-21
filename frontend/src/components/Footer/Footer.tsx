import React from 'react';
import styles from './Footer.module.scss';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.copy}>
        &copy; {new Date().getFullYear()} Pariwar Link. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
