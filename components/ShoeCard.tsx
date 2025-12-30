import React from 'react';
import { Shoe } from '../types';
import { Plus } from 'lucide-react';

interface ShoeCardProps {
  shoe: Shoe;
  onClick: (shoe: Shoe) => void;
  onQuickAdd: (shoe: Shoe) => void;
}

const ShoeCard: React.FC<ShoeCardProps> = ({ shoe, onClick, onQuickAdd }) => {
  return (
    <div 
      className="group relative bg-white rounded-[2.5rem] p-6 shadow-sm hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-500 cursor-pointer overflow-visible border border-slate-100 hover:-translate-y-2 h-full flex flex-col"
      onClick={() => onClick(shoe)}
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-36 h-36 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-bl-[80px] rounded-tr-[2.5rem] -z-0 transition-transform duration-700 group-hover:scale-110" />
      
      {/* Shoe Image */}
      <div className="relative h-48 w-full flex items-center justify-center mb-8 z-10 mt-4">
        <img 
          src={shoe.image} 
          alt={shoe.name}
          className="w-full h-full object-contain transform group-hover:scale-110 group-hover:-rotate-12 group-hover:translate-x-2 transition-all duration-500 drop-shadow-lg group-hover:drop-shadow-2xl"
        />
      </div>

      <div className="relative z-10 mt-auto">
        <div className="flex justify-between items-start mb-2">
          <p className="text-xs font-black text-indigo-600 uppercase tracking-widest bg-indigo-50 px-2 py-1 rounded-md">{shoe.brand}</p>
        </div>
        
        <h3 className="text-xl font-bold text-slate-900 leading-tight mb-4 group-hover:text-indigo-900 transition-colors pr-2">
          {shoe.name}
        </h3>
        
        <div className="flex justify-between items-end border-t border-slate-50 pt-4">
          <div>
             <p className="text-xs text-slate-400 font-medium mb-0.5">Price</p>
             <span className="text-2xl font-bold text-slate-900">${shoe.price}</span>
          </div>
          
          <button 
            onClick={(e) => {
              e.stopPropagation();
              onQuickAdd(shoe);
            }}
            className="w-12 h-12 rounded-2xl bg-slate-900 text-white flex items-center justify-center transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 hover:bg-indigo-600 shadow-lg shadow-indigo-500/30 hover:scale-110 active:scale-95"
            aria-label="Quick add to cart"
          >
            <Plus className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShoeCard;