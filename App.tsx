import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import ShoeCard from './components/ShoeCard';
import ShoeModal from './components/ShoeModal';
import CartDrawer from './components/CartDrawer';
import AIChat from './components/AIChat';
import { SHOES, CATEGORIES } from './constants';
import { Shoe, CartItem } from './types';
import { Filter, Sparkles } from 'lucide-react';

const App: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedShoe, setSelectedShoe] = useState<Shoe | null>(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [filteredShoes, setFilteredShoes] = useState(SHOES);

  useEffect(() => {
    if (selectedCategory === 'All') {
      setFilteredShoes(SHOES);
    } else {
      setFilteredShoes(SHOES.filter(shoe => shoe.category === selectedCategory));
    }
  }, [selectedCategory]);

  const handleAddToCart = (shoe: Shoe, size: number, color: string) => {
    setCartItems(prev => {
      const existing = prev.find(
        item => item.id === shoe.id && item.selectedSize === size && item.selectedColor === color
      );
      if (existing) {
        return prev.map(item =>
          item === existing ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...shoe, selectedSize: size, selectedColor: color, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const handleQuickAdd = (shoe: Shoe) => {
    if (shoe.sizes.length > 0 && shoe.colors.length > 0) {
      handleAddToCart(shoe, shoe.sizes[0], shoe.colors[0]);
    }
  };

  const handleRemoveFromCart = (id: string, size: number, color: string) => {
    setCartItems(prev => prev.filter(
      item => !(item.id === id && item.selectedSize === size && item.selectedColor === color)
    ));
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900">
      <Navbar 
        cartCount={cartItems.reduce((acc, item) => acc + item.quantity, 0)} 
        onCartClick={() => setIsCartOpen(true)}
      />

      {/* Hero Section */}
      <section className="pt-28 pb-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-slate-900 rounded-[3rem] p-8 md:p-20 text-white relative overflow-hidden shadow-2xl shadow-indigo-500/20 group">
            <div className="absolute top-0 right-0 w-full h-full opacity-30 bg-[url('https://images.unsplash.com/photo-1556906781-9a412961d289?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center transition-transform duration-[20s] group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent" />
            
            <div className="relative z-10 max-w-2xl animate-fade-in">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-500/20 backdrop-blur-md border border-indigo-500/30 rounded-full text-indigo-300 text-sm font-bold mb-8 animate-pulse">
                <Sparkles className="w-4 h-4" />
                <span>New Collection 2024</span>
              </div>
              <h1 className="text-5xl md:text-8xl font-bold mb-8 leading-[0.9] tracking-tight">
                WALK THE <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-400 bg-300% animate-gradient">
                  FUTURE
                </span>
              </h1>
              <p className="text-slate-300 text-lg mb-10 max-w-lg leading-relaxed">
                Experience the perfect blend of style and comfort. Our AI-curated collection brings the future of footwear to your doorstep.
              </p>
              <button 
                onClick={() => {
                  const el = document.getElementById('shop');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-white text-slate-900 px-10 py-5 rounded-full font-bold hover:bg-indigo-50 transition-all hover:scale-105 hover:shadow-lg hover:shadow-white/10 active:scale-95 flex items-center gap-2 group/btn"
              >
                Start Shopping
                <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main id="shop" className="max-w-7xl mx-auto px-6 pb-32">
        <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
          <div className="animate-fade-in" style={{ animationDelay: '100ms' }}>
            <h2 className="text-4xl font-bold text-slate-900 mb-2">Trending Now</h2>
            <p className="text-slate-500">Find your perfect fit from our curated selection.</p>
          </div>
          
          {/* Categories - Enhanced */}
          <div className="animate-fade-in sticky top-24 z-30 -mx-6 px-6 md:mx-0 md:px-0 md:static w-[calc(100%+3rem)] md:w-auto" style={{ animationDelay: '200ms' }}>
            <div className="bg-white/80 backdrop-blur-xl p-2 rounded-2xl md:rounded-full border border-white/20 shadow-xl shadow-slate-200/50 flex items-center gap-2 overflow-x-auto scrollbar-hide">
              <div className="p-3 bg-slate-100 rounded-full shrink-0">
                <Filter className="w-5 h-5 text-slate-600" />
              </div>
              {CATEGORIES.map((cat, idx) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`
                    relative px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 whitespace-nowrap outline-none
                    ${selectedCategory === cat
                      ? 'bg-slate-900 text-white shadow-lg shadow-indigo-500/20 scale-100'
                      : 'bg-transparent text-slate-500 hover:bg-slate-50 hover:text-slate-900'
                    }
                  `}
                >
                  {cat}
                  {selectedCategory === cat && (
                    <span className="absolute inset-0 rounded-full ring-2 ring-slate-900 ring-offset-2 ring-offset-white/80 pointer-events-none animate-pop" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredShoes.map((shoe, idx) => (
            <div 
              key={shoe.id} 
              className="animate-fade-in"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <ShoeCard 
                shoe={shoe} 
                onClick={setSelectedShoe}
                onQuickAdd={handleQuickAdd}
              />
            </div>
          ))}
        </div>

        {filteredShoes.length === 0 && (
          <div className="text-center py-32 bg-white rounded-3xl border border-dashed border-slate-200 animate-fade-in">
            <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4">
              <Filter className="w-8 h-8 text-slate-300" />
            </div>
            <p className="text-slate-500 text-lg font-medium">No shoes found in this category.</p>
            <button 
              onClick={() => setSelectedCategory('All')}
              className="mt-4 text-indigo-600 font-bold hover:underline"
            >
              Clear filters
            </button>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-100 py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tighter text-slate-900 mb-6">
            SOLE<span className="text-indigo-600">SEEKER</span>
          </h2>
          <div className="flex justify-center gap-8 mb-8 text-slate-500">
            <a href="#" className="hover:text-indigo-600 transition-colors">Instagram</a>
            <a href="#" className="hover:text-indigo-600 transition-colors">Twitter</a>
            <a href="#" className="hover:text-indigo-600 transition-colors">Facebook</a>
          </div>
          <p className="text-slate-400 mb-8 max-w-sm mx-auto">
            Elevate your step. Define your path. Crafted for those who dare to walk differently.
          </p>
          <div className="text-sm text-slate-300">
            © 2024 SoleSeeker. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Modals & Overlays */}
      <ShoeModal 
        shoe={selectedShoe} 
        isOpen={!!selectedShoe} 
        onClose={() => setSelectedShoe(null)}
        onAddToCart={handleAddToCart}
      />
      
      <CartDrawer 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onRemoveItem={handleRemoveFromCart}
      />

      <AIChat />
    </div>
  );
};

export default App;