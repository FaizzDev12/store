import { StarBackground } from './components/StarBackground';
import { Header } from './components/Header';
import { ProductGrid } from './components/ProductGrid';
import { Footer } from './components/Footer';
import { products } from './data/products';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.app}>
      <StarBackground />
      <Header />
      <main className={styles.main}>
        <ProductGrid products={products} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
