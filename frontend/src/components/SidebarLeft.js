// src/components/SidebarLeft.js
import React from 'react';
import AvatarList from './AvatarList';

function SidebarLeft({ avatars }) {
  return (
    <aside className="flex flex-col space-y-3 min-w-[48px] select-none h-screen border-r border-white/20 pr-3">
      {/* TOP GROUP: all avatars + play/menu */}
      <div className="flex flex-col space-y-3 mt-40">
        <AvatarList avatars={avatars} size={40} rounded />

        <button
          aria-label="Play button"
          style={{
            backgroundImage: "url('/images/LeftIcon1.png')",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
          className="bg-[#1a2a3a]/50 hover:bg-[#1a2a3a]/70 hover:shadow-[0_0_15px_5px_rgba(255,215,0,0.6)] transition rounded-sm p-1 flex items-center justify-center"
        >
          <i className="fas fa-play text-white text-sm"></i>
        </button>

        <button
          aria-label="Menu button"
          style={{
            backgroundImage: "url('/images/LeftIcon2.png')",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
          className="bg-[#1a2a3a]/50 hover:bg-[#1a2a3a]/70 hover:shadow-[0_0_15px_5px_rgba(255,215,0,0.6)] transition rounded-sm p-1 flex items-center justify-center"
        >
          <i className="fas fa-bars text-white text-sm"></i>
        </button>
      </div>

      {/* BOTTOM GROUP: Help & Power sticky at very bottom */}
      <div className="flex flex-col space-y-3 mt-auto">
        <button
          aria-label="Help button"
          style={{
            backgroundImage: "url('/images/LeftBottom1.png')",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
          className="bg-[#1a2a3a]/50 hover:bg-[#1a2a3a]/70 hover:shadow-[0_0_15px_5px_rgba(255,215,0,0.6)] transition rounded-sm p-1 flex items-center justify-center"
        >
          <i className="fas fa-question-circle text-white text-sm"></i>
        </button>

        <button
          aria-label="Power button"
          style={{
            backgroundImage: "url('/images/LeftBottom2.png')",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
          className="bg-[#1a2a3a]/50 hover:bg-[#1a2a3a]/70 hover:shadow-[0_0_15px_5px_rgba(255,215,0,0.6)] transition rounded-sm p-1 flex items-center justify-center"
        >
          <i className="fas fa-power-off text-white text-sm"></i>
        </button>
      </div>
    </aside>
  );
}

export default SidebarLeft;
