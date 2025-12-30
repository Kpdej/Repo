import React from 'react';
import { X, Trash2, ArrowRight } from 'lucide-react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onRemoveItem: (id: string, size: number, color: string) => void;
}

const CartDrawer: React.FC<CartDrawerProps> = ({ isOpen, onClose, items, onRemoveItem }) => {
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <>
      {/* Overlay */}
      <div 
        className={`fixed inset-0 bg-black/30 backdrop-blur-sm z-[70] transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div 
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-white z-[80] shadow-2xl transform transition-transform duration-300 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-6 border-b border-gray-100">
            <h2 className="text-xl font-bold text-gray-900">Your Cart ({items.length})</h2>
            <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <X className="w-6 h-6 text-gray-600" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                  <ArrowRight className="w-8 h-8 text-gray-400" />
                </div>
                <p className="text-gray-500 font-medium">Your cart is empty.</p>
                <button onClick={onClose} className="mt-4 text-indigo-600 font-bold hover:underline">
                  Start Shopping
                </button>
              </div>
            ) : (
              items.map((item) => (
                <div key={`${item.id}-${item.selectedSize}-${item.selectedColor}`} className="flex gap-4">
                  <div className="w-24 h-24 bg-gray-50 rounded-xl flex items-center justify-center p-2">
                    <img src={item.image} alt={item.name} className="w-full h-full object-contain mix-blend-multiply" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900">{item.name}</h3>
                    <p className="text-sm text-gray-500">{item.brand}</p>
                    <div className="flex items-center gap-3 mt-1 text-sm text-gray-600">
                      <span className="bg-gray-100 px-2 py-0.5 rounded">Size {item.selectedSize}</span>
                      <span className="flex items-center gap-1">
                        <span className="w-3 h-3 rounded-full bg-gray-300"></span>
                        {item.selectedColor}
                      </span>
                    </div>
                    <div className="flex items-center justify-between mt-3">
                      <span className="font-bold text-gray-900">${item.price}</span>
                      <button 
                        onClick={() => onRemoveItem(item.id, item.selectedSize, item.selectedColor)}
                        className="text-red-500 hover:bg-red-50 p-1.5 rounded-lg transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {items.length > 0 && (
            <div className="p-6 border-t border-gray-100 bg-gray-50">
              <div className="flex justify-between items-center mb-4">
                <span className="text-gray-600">Subtotal</span>
                <span className="text-xl font-bold text-gray-900">${total}</span>
              </div>
              <button className="w-full bg-gray-900 text-white py-4 rounded-xl font-bold text-lg hover:bg-indigo-600 transition-colors shadow-lg active:scale-95 transform duration-200">
                Checkout
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CartDrawer;