import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-900 via-black to-cyan-900">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&fit=crop"
          alt="Y2K Fashion Hero"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/60 via-black/40 to-cyan-900/60"></div>
        
        {/* Animated Grid Overlay */}
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent animate-pulse"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl px-4">
        <div className="flex justify-center mb-6">
          <Sparkles className="h-12 w-12 text-pink-400 animate-spin" />
        </div>
        <h1 className="text-5xl md:text-8xl font-bold mb-6 tracking-tight">
          <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
            FUTURE
          </span>
          <span className="block text-white drop-shadow-lg">IS NOW</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-cyan-300 max-w-2xl mx-auto leading-relaxed font-light">
          Step into the millennium with holographic fabrics, metallic textures, and cyber-punk aesthetics that define the Y2K era
        </p>
        <button className="bg-gradient-to-r from-pink-500 via-purple-600 to-cyan-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg hover:shadow-pink-500/50 transition-all duration-300 transform hover:scale-105 inline-flex items-center space-x-2 border border-cyan-400">
          <span>Enter The Matrix</span>
          <ArrowRight className="h-5 w-5" />
        </button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-cyan-400 animate-bounce">
        <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gradient-to-b from-pink-500 to-cyan-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;