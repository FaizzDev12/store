import React from 'react';
import styles from './Footer.module.css';

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.copyright}>&copy; 2025 FurinaCloud. All rights reserved.</p>
        <p className={styles.contact}>
          WhatsApp:{' '}
          <a href="https://wa.me/6289698988955" target="_blank" rel="noopener noreferrer">
            +62 896-9898-8955
          </a>
        </p>
      </div>
    </footer>
  );
};
