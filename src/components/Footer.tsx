import React from 'react';
import { Instagram, Facebook, Twitter, Youtube, MapPin, Phone, Mail, Zap } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-black border-t border-cyan-400/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Zap className="h-6 w-6 text-cyan-400 animate-pulse" />
              <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                CYBER2K
              </h3>
            </div>
            <p className="text-purple-300 mb-6 leading-relaxed">
              Pioneering the future of fashion with technology-enhanced clothing for the digital generation.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-purple-400 hover:text-cyan-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-purple-400 hover:text-cyan-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-purple-400 hover:text-cyan-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-purple-400 hover:text-cyan-400 transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-cyan-400">Navigation</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-purple-300 hover:text-cyan-400 transition-colors">Home</a></li>
              <li><a href="#products" className="text-purple-300 hover:text-cyan-400 transition-colors">Cyber Shop</a></li>
              <li><a href="#about" className="text-purple-300 hover:text-cyan-400 transition-colors">About</a></li>
              <li><a href="#" className="text-purple-300 hover:text-cyan-400 transition-colors">Tech Specs</a></li>
              <li><a href="#" className="text-purple-300 hover:text-cyan-400 transition-colors">Returns</a></li>
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-cyan-400">Support Matrix</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-purple-300 hover:text-cyan-400 transition-colors">FAQ Database</a></li>
              <li><a href="#" className="text-purple-300 hover:text-cyan-400 transition-colors">Quantum Shipping</a></li>
              <li><a href="#" className="text-purple-300 hover:text-cyan-400 transition-colors">Order Tracker</a></li>
              <li><a href="#" className="text-purple-300 hover:text-cyan-400 transition-colors">Digital Support</a></li>
              <li><a href="#" className="text-purple-300 hover:text-cyan-400 transition-colors">Data Privacy</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-cyan-400">Connect</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-purple-300">
                <MapPin className="h-4 w-4" />
                <span className="text-sm">Neo Tokyo District, Cyber City 2025</span>
              </div>
              <div className="flex items-center space-x-3 text-purple-300">
                <Phone className="h-4 w-4" />
                <span className="text-sm">+1 (555) CYBER-2K</span>
              </div>
              <div className="flex items-center space-x-3 text-purple-300">
                <Mail className="h-4 w-4" />
                <span className="text-sm">connect@cyber2k.fashion</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-cyan-400/30 pt-8 mt-12 text-center text-purple-400">
          <p>&copy; 2025 CYBER2K Fashion. All rights reserved. | Powered by Future Tech</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;