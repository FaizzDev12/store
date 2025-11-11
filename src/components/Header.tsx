import React from 'react';
import styles from './Header.module.css';

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.logo}>FurinaCloud</h1>
          <p className={styles.tagline}>Toko produk digital & layanan kreatif dengan harga terjangkau</p>
        </div>
      </div>
    </header>
  );
};
