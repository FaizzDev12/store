import React, { useEffect, useState } from 'react';
import styles from './StarBackground.module.css';

export const StarBackground: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.pageYOffset);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div
        className={styles.stars}
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      />
      <div
        className={styles.stars2}
        style={{
          transform: `translateY(${scrollY * 0.3}px)`,
        }}
      />
    </>
  );
};
