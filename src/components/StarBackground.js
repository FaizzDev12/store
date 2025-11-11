import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import styles from './StarBackground.module.css';
export const StarBackground = () => {
    const [scrollY, setScrollY] = useState(0);
    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.pageYOffset);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return (_jsxs(_Fragment, { children: [_jsx("div", { className: styles.stars, style: {
                    transform: `translateY(${scrollY * 0.5}px)`,
                } }), _jsx("div", { className: styles.stars2, style: {
                    transform: `translateY(${scrollY * 0.3}px)`,
                } })] }));
};
