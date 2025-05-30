import React from 'react';

function NavBar() {
  return (
    <nav className="flex items-center space-x-2 text-xs uppercase tracking-widest mb-2 select-none">
      <button aria-label="Back" className="text-white/50 hover:text-white transition">
        <i className="fas fa-chevron-left"></i>
      </button>
      <span>multiplayer</span>
      <span>/</span>
      <span>server browser</span>
      <span>/</span>
    </nav>
  );
}

export default NavBar;