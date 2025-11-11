import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { StarBackground } from './components/StarBackground';
import { Header } from './components/Header';
import { ProductGrid } from './components/ProductGrid';
import { Footer } from './components/Footer';
import { products } from './data/products';
import styles from './App.module.css';
function App() {
    return (_jsxs("div", { className: styles.app, children: [_jsx(StarBackground, {}), _jsx(Header, {}), _jsx("main", { className: styles.main, children: _jsx(ProductGrid, { products: products }) }), _jsx(Footer, {})] }));
}
export default App;
