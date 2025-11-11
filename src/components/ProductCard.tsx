import React, { useState, useEffect } from 'react';
import { Product } from '../types';
import styles from './ProductCard.module.css';

interface ProductCardProps {
  product: Product;
  delay?: number;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);
    return () => clearTimeout(timer);
  }, [delay]);

  const handleWhatsAppClick = () => {
    window.open(product.whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className={`${styles.card} ${isVisible ? styles.visible : ''}`}>
      <div className={styles.icon}>{product.icon}</div>
      <h3 className={styles.title}>{product.title}</h3>
      <p className={styles.description}>{product.description}</p>

      <div className={styles.pricing}>
        {product.pricing.type === 'simple' ? (
          <div className={styles.simplePricing}>
            {product.pricing.items?.map((item, idx) => (
              <div key={idx} className={styles.priceItem}>
                <span className={styles.label}>{item.label}</span>
                <span className={styles.value}>{item.value}</span>
              </div>
            ))}
          </div>
        ) : (
          <div className={styles.detailedPricing}>
            {product.pricing.sections?.map((section, sectionIdx) => (
              <div
                key={sectionIdx}
                className={`${styles.section} ${section.isPremium ? styles.premium : ''}`}
              >
                <h4 className={styles.sectionTitle}>{section.title}</h4>
                {section.note && <p className={styles.sectionNote}>{section.note}</p>}
                {section.items.map((item, itemIdx) => (
                  <div key={itemIdx} className={styles.priceRow}>
                    <span>{item.label}</span>
                    <span>{item.value}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        )}
      </div>

      <button className={styles.button} onClick={handleWhatsAppClick}>
        <span>{product.buttonText}</span>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
        </svg>
      </button>
    </div>
  );
};
