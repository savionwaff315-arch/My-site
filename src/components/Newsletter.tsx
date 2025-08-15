import React, { useState } from 'react';
import { Mail, Check, Zap } from 'lucide-react';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-r from-purple-900 via-black to-cyan-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <div className="flex justify-center mb-6">
            <div className="bg-gradient-to-r from-pink-500 via-purple-600 to-cyan-500 p-4 rounded-full border border-cyan-400 animate-pulse">
              <Zap className="h-8 w-8 text-white" />
            </div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Join The Network
          </h2>
          <p className="text-xl text-cyan-300 mb-8 leading-relaxed">
            Connect to our digital matrix for exclusive drops, cyber fashion updates, and early access to limited tech wear
          </p>

          {!isSubscribed ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your digital ID"
                className="flex-1 px-6 py-4 rounded-full bg-black/50 text-cyan-300 placeholder-purple-400 border border-cyan-400/50 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                required
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-pink-500 via-purple-600 to-cyan-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-pink-500/50 transition-all duration-300 whitespace-nowrap border border-cyan-400"
              >
                Connect Now
              </button>
            </form>
          ) : (
            <div className="flex items-center justify-center space-x-2 text-cyan-400 text-xl">
              <Check className="h-6 w-6" />
              <span>Connection established!</span>
            </div>
          )}

          <p className="text-sm text-purple-400 mt-4">
            Your data is encrypted and secure. Disconnect anytime.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;