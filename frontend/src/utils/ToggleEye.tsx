import React from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // or use another icon lib
import styles from './ToggleEye.module.scss';

interface ToggleEyeProps {
  visible: boolean;
  setVisible: (val: boolean) => void;
  className?: string;
}

const ToggleEye: React.FC<ToggleEyeProps> = ({ visible, setVisible, className }) => {
  return (
    <button
      type="button"
      onClick={() => setVisible(!visible)}
      className={`${styles.toggleBtn} ${className || ''}`}
      aria-label={visible ? 'Hide password' : 'Show password'}
    >
      {visible ? <FaEyeSlash /> : <FaEye />}
    </button>
  );
};

export default ToggleEye;
