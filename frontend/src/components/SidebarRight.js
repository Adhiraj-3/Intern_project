import React, { useState } from 'react';

function SidebarRight({ avatars }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // When hoveredIndex is not null, show the hover panel
  const isHovering = hoveredIndex !== null;

  return (
    <aside className="relative flex min-w-[200px] ml-4 select-none mt-40">
      {/* Original sidebar, shrinks/hidden when panel is open */}
      <div className={`flex flex-col space-y-4 items-end transition-all duration-300 ease-in-out ${isHovering ? 'opacity-0 pointer-events-none w-0' : 'w-[200px]'}`}>
        <button aria-label="Globe icon" className="text-white/50 hover:text-white transition flex items-center">
          <i className="fas fa-globe"></i>
          <span className="ml-2 text-sm">Globe</span>
        </button>
        <button aria-label="Plus icon" className="bg-[#1a2a3a]/50 hover:bg-[#1a2a3a]/70 transition rounded-sm p-1 flex items-center justify-center">
          <i className="fas fa-plus text-white text-sm"></i>
          <span className="ml-2 text-sm">Add Item</span>
        </button>

        <div className="flex flex-col space-y-2">
          {avatars.map((avatar, index) => (
            <img
              key={index}
              src={`/images/${avatar}`}
              alt={`Avatar ${index + 1}`}
              className="w-8 h-8 rounded-full cursor-pointer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            />
          ))}
        </div>
      </div>

      {/* Hover panel, fixed on the right */}
      {isHovering && (
        <div
          className="fixed top-0 right-0 h-full w-[200px] bg-black/90 text-white p-4 flex flex-col space-y-4 transition-transform duration-300 ease-in-out z-50"
          onMouseEnter={() => setHoveredIndex(hoveredIndex)} // keep open when inside panel
          onMouseLeave={() => setHoveredIndex(null)}        // close on leave panel
        >
          {/* Buttons */}
          <button aria-label="Globe icon" className="text-white/50 hover:text-white transition flex items-center mt-40">
            <i className="fas fa-globe"></i>
            <span className="ml-2 text-sm">Globe Info</span>
          </button>
          <button aria-label="Plus icon" className="bg-[#1a2a3a]/50 hover:bg-[#1a2a3a]/70 transition rounded-sm p-1 flex items-center justify-center">
            <i className="fas fa-plus text-white text-sm"></i>
            <span className="ml-2 text-sm">Add Item</span>
          </button>

          {/* Avatar list with info */}
          <div className="flex flex-col space-y-3">
            {avatars.map((avatar, index) => (
              <div key={index} className="flex items-center space-x-2">
                <img
                  src={`/images/${avatar}`}
                  alt={`Avatar ${index + 1}`}
                  className="w-8 h-8 rounded-full"
                />
                <div>
                  <p className="text-sm font-semibold">{avatar}</p>
                  <p className="text-xs text-gray-300">Some info about {avatar}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </aside>
  );
}

export default SidebarRight;
