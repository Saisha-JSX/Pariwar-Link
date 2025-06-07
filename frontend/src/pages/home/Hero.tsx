import React from 'react';
import styles from './Hero.module.scss';
import FamilyTreeDiagram from '../../assets/Tree/FamilyTreeDiagram';

const Hero: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.textSection}>
            <h1 className={styles.title}>
              Build Your Family Tree<br />Connect Generations
            </h1>
            <p className={styles.subtitle}>
              Create, explore, and share your family history easily with Pariwar Link.
            </p>
            <div className={styles.actions}>
              <button className={styles.signup}>Get Started</button>
              <button className={styles.learnMore}>Learn More</button>
            </div>
          </div>
          <div className={styles.diagramSection}>
            <FamilyTreeDiagram />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
