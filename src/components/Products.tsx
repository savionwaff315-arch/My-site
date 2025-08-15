import React, { useContext } from 'react';
import { ShoppingBag, Heart, Zap } from 'lucide-react';
import { CartContext } from '../context/CartContext';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Holographic Bomber",
    price: 199,
    image: "https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "Cyber Wear"
  },
  {
    id: 2,
    name: "Metallic Mesh Top",
    price: 89,
    image: "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "Future Tech"
  },
  {
    id: 3,
    name: "Neon Cargo Pants",
    price: 149,
    image: "https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "Street Tech"
  },
  {
    id: 4,
    name: "Chrome Platform Boots",
    price: 249,
    image: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "Cyber Kicks"
  },
  {
    id: 5,
    name: "LED Choker",
    price: 69,
    image: "https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "Tech Accessories"
  },
  {
    id: 6,
    name: "Reflective Windbreaker",
    price: 179,
    image: "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "Outer Shell"
  }
];

const Products: React.FC = () => {
  const { addToCart } = useContext(CartContext);

  return (
    <section id="products" className="py-20 bg-gradient-to-b from-black via-purple-900/20 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <Zap className="h-8 w-8 text-cyan-400 animate-pulse" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-4">
            Cyber Collection 2K
          </h2>
          <p className="text-xl text-cyan-300 max-w-2xl mx-auto">
            Futuristic fashion for the digital age - where technology meets style
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-gradient-to-br from-gray-900 to-black rounded-lg overflow-hidden border border-cyan-400/30 hover:border-pink-500/50 hover:shadow-2xl hover:shadow-cyan-400/20 transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500 filter group-hover:brightness-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/0 group-hover:from-purple-900/40 transition-all duration-300">
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="bg-gradient-to-r from-pink-500 to-purple-600 p-2 rounded-full hover:shadow-lg hover:shadow-pink-500/50 transition-all">
                      <Heart className="h-5 w-5 text-white" />
                    </button>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="mb-2">
                  <span className="text-sm text-cyan-400 font-medium uppercase tracking-wider">{product.category}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{product.name}</h3>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent">${product.price}</span>
                  <button
                    onClick={() => addToCart(product)}
                    className="bg-gradient-to-r from-pink-500 via-purple-600 to-cyan-500 text-white px-4 py-2 rounded-full hover:shadow-lg hover:shadow-pink-500/50 transition-all duration-300 flex items-center space-x-2 border border-cyan-400/50"
                  >
                    <ShoppingBag className="h-4 w-4" />
                    <span className="font-medium">Add to Cart</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;