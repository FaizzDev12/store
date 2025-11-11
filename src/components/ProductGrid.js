import { jsx as _jsx } from "react/jsx-runtime";
import { ProductCard } from './ProductCard';
import styles from './ProductGrid.module.css';
export const ProductGrid = ({ products }) => {
    return (_jsx("div", { className: styles.container, children: _jsx("div", { className: styles.grid, children: products.map((product, idx) => (_jsx(ProductCard, { product: product, delay: idx * 100 }, product.id))) }) }));
};
