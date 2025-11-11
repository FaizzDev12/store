import React from 'react';
import { Product } from '../types';
import { ProductCard } from './ProductCard';
import styles from './ProductGrid.module.css';

interface ProductGridProps {
  products: Product[];
}

export const ProductGrid: React.FC<ProductGridProps> = ({ products }) => {
  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        {products.map((product, idx) => (
          <ProductCard key={product.id} product={product} delay={idx * 100} />
        ))}
      </div>
    </div>
  );
};
