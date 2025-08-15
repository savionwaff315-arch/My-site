import React, { useState, useContext } from 'react';
import { Menu, X, ShoppingBag, User, Search, Zap } from 'lucide-react';
import { CartContext } from '../context/CartContext';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cartItems } = useContext(CartContext);

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="fixed top-0 left-0 right-0 bg-black/90 backdrop-blur-sm z-50 border-b border-cyan-400 shadow-lg shadow-cyan-400/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="flex items-center space-x-2">
              <Zap className="h-8 w-8 text-cyan-400 animate-pulse" />
              <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent tracking-tight">
                CYBER2K
              </h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-cyan-300 hover:text-pink-400 transition-colors font-medium hover:glow">Home</a>
            <a href="#products" className="text-cyan-300 hover:text-pink-400 transition-colors font-medium hover:glow">Shop</a>
            <a href="#about" className="text-cyan-300 hover:text-pink-400 transition-colors font-medium hover:glow">About</a>
            <a href="#contact" className="text-cyan-300 hover:text-pink-400 transition-colors font-medium hover:glow">Contact</a>
          </nav>

          {/* Right Side Icons */}
          <div className="flex items-center space-x-4">
            <button className="text-cyan-300 hover:text-pink-400 transition-colors">
              <Search className="h-5 w-5" />
            </button>
            <button className="text-cyan-300 hover:text-pink-400 transition-colors">
              <User className="h-5 w-5" />
            </button>
            <button className="text-cyan-300 hover:text-pink-400 transition-colors relative">
              <ShoppingBag className="h-5 w-5" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-medium animate-pulse">
                  {totalItems}
                </span>
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-cyan-300 hover:text-pink-400 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-cyan-400">
            <nav className="flex flex-col space-y-4">
              <a href="#home" className="text-cyan-300 hover:text-pink-400 transition-colors font-medium">Home</a>
              <a href="#products" className="text-cyan-300 hover:text-pink-400 transition-colors font-medium">Shop</a>
              <a href="#about" className="text-cyan-300 hover:text-pink-400 transition-colors font-medium">About</a>
              <a href="#contact" className="text-cyan-300 hover:text-pink-400 transition-colors font-medium">Contact</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;