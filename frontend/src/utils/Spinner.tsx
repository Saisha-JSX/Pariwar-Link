import React from 'react';
import styles from './Spinner.module.scss';

interface SpinnerProps {
  size?: number;        // spinner size in px, optional, default 16
  color?: string;       // spinner color, optional, default black
  className?: string;   // additional CSS classes
}

const Spinner: React.FC<SpinnerProps> = ({ size = 16, color = '#000', className }) => {
  return (
    <span
      className={`${styles.spinner} ${className || ''}`}
      style={{
        width: size,
        height: size,
        borderTopColor: color,
        borderWidth: size / 5, // thickness proportional to size
      }}
      aria-label="Loading spinner"
      role="status"
    />
  );
};

export default Spinner;
