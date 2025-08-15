import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Products from './components/Products';
import About from './components/About';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-black">
        <Header />
        <Hero />
        <Products />
        <About />
        <Newsletter />
        <Footer />
      </div>
    </CartProvider>
  );
}

export default App;