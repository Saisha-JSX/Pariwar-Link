import React from 'react';
import styles from './FamilyTreeDiagram.module.scss';

const FamilyTreeDiagram: React.FC = () => {
  return (
    <div className={styles.treeContainer}>
      <svg viewBox="0 0 1000 420" className={styles.tree} preserveAspectRatio="xMidYMid meet">
        {/* You */}
        <circle cx="500" cy="80" r="40" className={`${styles.node} ${styles.nodeMain}`} />
        <text x="500" y="85" className={styles.labelMain} textAnchor="middle">You</text>

        {/* Lines to parents */}
        <line x1="500" y1="120" x2="300" y2="220" className={styles.line} />
        <line x1="500" y1="120" x2="700" y2="220" className={styles.line} />

        {/* Parents */}
        <circle cx="300" cy="220" r="35" className={styles.nodeParent1} />
        <text x="300" y="225" className={styles.label} textAnchor="middle">Parent 1</text>

        <circle cx="700" cy="220" r="35" className={styles.nodeParent2} />
        <text x="700" y="225" className={styles.label} textAnchor="middle">Parent 2</text>

        {/* Lines to grandparents */}
        <line x1="300" y1="255" x2="180" y2="370" className={styles.line} />
        <line x1="300" y1="255" x2="380" y2="370" className={styles.line} />
        <line x1="700" y1="255" x2="620" y2="370" className={styles.line} />
        <line x1="700" y1="255" x2="820" y2="370" className={styles.line} />

        {/* Grandparents */}
        <circle cx="180" cy="370" r="30" className={styles.nodeGP1} />
        <text x="180" y="375" className={styles.label} textAnchor="middle">GP1</text>

        <circle cx="380" cy="370" r="30" className={styles.nodeGP2} />
        <text x="380" y="375" className={styles.label} textAnchor="middle">GP2</text>

        <circle cx="620" cy="370" r="30" className={styles.nodeGP3} />
        <text x="620" y="375" className={styles.label} textAnchor="middle">GP3</text>

        <circle cx="820" cy="370" r="30" className={styles.nodeGP4} />
        <text x="820" y="375" className={styles.label} textAnchor="middle">GP4</text>
      </svg>
    </div>
  );
};

export default FamilyTreeDiagram;
