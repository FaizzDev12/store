import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styles from './Header.module.css';
export const Header = () => {
    return (_jsx("header", { className: styles.header, children: _jsx("div", { className: styles.container, children: _jsxs("div", { className: styles.content, children: [_jsx("h1", { className: styles.logo, children: "FurinaCloud" }), _jsx("p", { className: styles.tagline, children: "Toko produk digital & layanan kreatif dengan harga terjangkau" })] }) }) }));
};
