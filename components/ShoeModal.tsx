import React, { useState } from 'react';
import { X, Heart, ShoppingBag, Check } from 'lucide-react';
import { Shoe } from '../types';

interface ShoeModalProps {
  shoe: Shoe | null;
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (shoe: Shoe, size: number, color: string) => void;
}

const ShoeModal: React.FC<ShoeModalProps> = ({ shoe, isOpen, onClose, onAddToCart }) => {
  const [selectedSize, setSelectedSize] = useState<number | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);

  if (!isOpen || !shoe) return null;

  // Reset state when shoe changes (handled by effect in parent or simple key)
  // But since we mount/unmount or show/hide, we should reset if it's a new open
  // Simplified for this example: User selects manually each time.

  const handleAddToCart = () => {
    if (selectedSize && selectedColor) {
      onAddToCart(shoe, selectedSize, selectedColor);
      onClose();
      setSelectedSize(null);
      setSelectedColor(null);
    }
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />
      
      <div className="relative w-full max-w-4xl bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh] md:h-auto animate-float">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-white/50 rounded-full hover:bg-white transition-colors"
        >
          <X className="w-6 h-6 text-gray-800" />
        </button>

        {/* Image Section */}
        <div className="w-full md:w-1/2 bg-gray-100 flex items-center justify-center p-8 relative">
          <div className="absolute top-8 left-8">
            <h2 className="text-4xl md:text-6xl font-bold text-gray-200 uppercase tracking-widest pointer-events-none select-none">
              {shoe.brand}
            </h2>
          </div>
          <img 
            src={shoe.image} 
            alt={shoe.name}
            className="w-full max-w-sm object-contain drop-shadow-2xl transform -rotate-12 hover:rotate-0 transition-transform duration-700"
          />
        </div>

        {/* Info Section */}
        <div className="w-full md:w-1/2 p-8 overflow-y-auto">
          <div className="flex justify-between items-start mb-6">
            <div>
              <p className="text-indigo-600 font-bold uppercase tracking-wider text-sm mb-1">{shoe.category}</p>
              <h2 className="text-3xl font-bold text-gray-900">{shoe.name}</h2>
            </div>
            <p className="text-2xl font-bold text-gray-900">${shoe.price}</p>
          </div>

          <p className="text-gray-600 leading-relaxed mb-8">
            {shoe.description}
          </p>

          <div className="mb-6">
            <h3 className="text-sm font-bold text-gray-900 uppercase mb-3">Select Color</h3>
            <div className="flex gap-3">
              {shoe.colors.map((color) => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`px-4 py-2 rounded-lg border text-sm font-medium transition-all ${
                    selectedColor === color 
                      ? 'border-indigo-600 bg-indigo-50 text-indigo-700 ring-2 ring-indigo-600 ring-offset-2' 
                      : 'border-gray-200 text-gray-600 hover:border-gray-300'
                  }`}
                >
                  {color}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-sm font-bold text-gray-900 uppercase mb-3">Select Size (US)</h3>
            <div className="grid grid-cols-4 sm:grid-cols-6 gap-2">
              {shoe.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`py-2 rounded-lg border text-sm font-medium transition-all ${
                    selectedSize === size
                      ? 'bg-gray-900 text-white border-gray-900'
                      : 'border-gray-200 text-gray-600 hover:border-gray-900'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="flex gap-4">
            <button className="p-4 rounded-xl border border-gray-200 hover:bg-red-50 hover:text-red-500 hover:border-red-200 transition-colors">
              <Heart className="w-6 h-6" />
            </button>
            <button 
              onClick={handleAddToCart}
              disabled={!selectedSize || !selectedColor}
              className={`flex-1 flex items-center justify-center gap-2 rounded-xl font-bold text-lg transition-all transform active:scale-95 ${
                selectedSize && selectedColor
                  ? 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg shadow-indigo-200'
                  : 'bg-gray-200 text-gray-400 cursor-not-allowed'
              }`}
            >
              <ShoppingBag className="w-5 h-5" />
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoeModal;