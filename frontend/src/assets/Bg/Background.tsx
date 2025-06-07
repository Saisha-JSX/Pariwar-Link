// background.tsx
import React from 'react';
import styles from './Background.module.scss';

const images = Array(4).fill('https://placehold.co/600x400'); // 4 images per container

export const Background: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.grid}>
        {[...Array(5)].map((_, i) => {
          const directionClass = i % 2 === 0 ? styles.scrollUp : styles.scrollDown;
          return (
            <div key={i} className={styles.container}>
              <div className={`${styles.imageList} ${directionClass}`}>
                {[...images, ...images].map((src, j) => (
                  <img
                    key={j}
                    src={src}
                    alt={`Image ${j}`}
                    className={styles.image}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Background;
