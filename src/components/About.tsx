import React from 'react';
import { Award, Truck, Shield, Users, Cpu, Zap } from 'lucide-react';

const About: React.FC = () => {
  const features = [
    {
      icon: <Cpu className="h-8 w-8" />,
      title: "Tech-Enhanced",
      description: "Smart fabrics with LED integration and holographic materials"
    },
    {
      icon: <Truck className="h-8 w-8" />,
      title: "Quantum Delivery",
      description: "Lightning-fast shipping via our cyber logistics network"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Energy Efficient",
      description: "Sustainable tech fashion for the eco-conscious cyber citizen"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Cyber Community",
      description: "Join our digital collective of future fashion pioneers"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6">
              Digital Fashion Revolution
            </h2>
            <p className="text-xl text-cyan-300 mb-8 leading-relaxed">
              At CYBER2K, we're pioneering the fusion of technology and fashion for the new millennium. 
              Our collections feature cutting-edge materials, holographic textures, and smart fabrics 
              that respond to your digital lifestyle.
            </p>
            <p className="text-lg text-purple-300 mb-8 leading-relaxed">
              Born from the Y2K aesthetic and cyber-punk culture, we create wearable technology 
              that bridges the gap between the physical and digital worlds.
            </p>
          </div>

          {/* Image */}
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Y2K Fashion Design"
              className="rounded-lg shadow-xl border border-cyan-400/30"
            />
            <div className="absolute -bottom-8 -left-8 bg-gradient-to-r from-pink-500 via-purple-600 to-cyan-500 p-6 rounded-lg shadow-lg border border-cyan-400">
              <p className="text-2xl font-bold text-white">Y2K</p>
              <p className="text-cyan-100 font-medium">Era Inspired</p>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6 bg-gradient-to-br from-gray-900 to-black rounded-lg border border-cyan-400/30 hover:border-pink-500/50 hover:shadow-lg hover:shadow-cyan-400/20 transition-all duration-300">
              <div className="flex justify-center mb-4 text-cyan-400">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-purple-300 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;