import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import styles from './ProductCard.module.css';
export const ProductCard = ({ product, delay = 0 }) => {
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
    return (_jsxs("div", { className: `${styles.card} ${isVisible ? styles.visible : ''}`, children: [_jsx("div", { className: styles.icon, children: product.icon }), _jsx("h3", { className: styles.title, children: product.title }), _jsx("p", { className: styles.description, children: product.description }), _jsx("div", { className: styles.pricing, children: product.pricing.type === 'simple' ? (_jsx("div", { className: styles.simplePricing, children: product.pricing.items?.map((item, idx) => (_jsxs("div", { className: styles.priceItem, children: [_jsx("span", { className: styles.label, children: item.label }), _jsx("span", { className: styles.value, children: item.value })] }, idx))) })) : (_jsx("div", { className: styles.detailedPricing, children: product.pricing.sections?.map((section, sectionIdx) => (_jsxs("div", { className: `${styles.section} ${section.isPremium ? styles.premium : ''}`, children: [_jsx("h4", { className: styles.sectionTitle, children: section.title }), section.note && _jsx("p", { className: styles.sectionNote, children: section.note }), section.items.map((item, itemIdx) => (_jsxs("div", { className: styles.priceRow, children: [_jsx("span", { children: item.label }), _jsx("span", { children: item.value })] }, itemIdx)))] }, sectionIdx))) })) }), _jsxs("button", { className: styles.button, onClick: handleWhatsAppClick, children: [_jsx("span", { children: product.buttonText }), _jsx("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: _jsx("path", { d: "M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" }) })] })] }));
};
