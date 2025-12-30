import React from 'react';
import { ShoppingBag, Search, Menu } from 'lucide-react';

interface NavbarProps {
  cartCount: number;
  onCartClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ cartCount, onCartClick }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-gray-100 rounded-full md:hidden">
            <Menu className="w-6 h-6 text-gray-800" />
          </button>
          <h1 className="text-2xl font-bold tracking-tighter text-gray-900">
            SOLE<span className="text-indigo-600">SEEKER</span>
          </h1>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
          <a href="#" className="hover:text-indigo-600 transition-colors">New Drops</a>
          <a href="#" className="hover:text-indigo-600 transition-colors">Men</a>
          <a href="#" className="hover:text-indigo-600 transition-colors">Women</a>
          <a href="#" className="hover:text-indigo-600 transition-colors">Collections</a>
        </div>

        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors hidden sm:block">
            <Search className="w-5 h-5 text-gray-600" />
          </button>
          <button 
            onClick={onCartClick}
            className="relative p-2 hover:bg-gray-100 rounded-full transition-colors group"
          >
            <ShoppingBag className="w-6 h-6 text-gray-800 group-hover:text-indigo-600 transition-colors" />
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 bg-indigo-600 text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-white">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;