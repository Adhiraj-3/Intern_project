import React from 'react';

function ActionButtons({ favorites }) {
  return (
    <div className="flex space-x-4 max-w-4xl p-4">
      <button className="flex-1 min-w-[150px] border border-white/20 py-3 text-xs font-bold uppercase tracking-widest hover:bg-white/10 transition select-none">
        JOIN
      </button>
      <button className="flex-1 min-w-[150px] border border-white/20 py-3 text-xs font-bold uppercase tracking-widest hover:bg-white/10 transition select-none">
        SPECTATE
      </button>
      <button className="flex-1 min-w-[180px] border border-white/20 py-3 text-xs font-bold uppercase tracking-widest hover:bg-white/10 transition select-none">
        JOIN AS COMMANDER
      </button>
      <button className="flex items-center justify-center min-w-[100px] border border-white/20 py-3 px-4 text-xs font-bold uppercase tracking-widest hover:bg-white/10 transition select-none space-x-1">
        <i className="fas fa-star"></i>
        <span>{favorites}</span>
      </button>
    </div>
  );
}

export default ActionButtons;
