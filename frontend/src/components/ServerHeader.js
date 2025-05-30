import React from 'react';

function ServerHeader({ data }) {
  return (
    <div className="select-none p-4 space-y-3">
      {/* Title */}
      <h2 className="text-lg sm:text-xl font-semibold tracking-widest uppercase mb-2 ">
        {data.title.toUpperCase()}
      </h2>

      {/* Flag, mode, map, details */}
      <div className="flex items-center space-x-4 mb-3">
        <img
          alt="Flag icon"
          className="w-5 h-4 object-contain"
          src="/images/flag.png"
          width={20}
          height={16}
        />
        <span className="uppercase text-xs font-bold tracking-widest text-[#d18a1a] px-2 py-0.5 border border-[#d18a1a] rounded">
          {data.mode.toUpperCase()}
        </span>
        <span className="text-xs tracking-widest text-white/70 uppercase">
          {data.map} - {data.details.type} - {data.details.hz}
        </span>
      </div>

      {/* Description */}
      <p className="text-xs text-white/70 max-w-xl leading-tight uppercase px-2">
        {data.description.toUpperCase()}
      </p>
    </div>
  );
}

export default ServerHeader;

<div className="select-none p-4 space-y-3 font-bold tracking-tight font-sans" style={{ fontFamily: '"Arial Narrow", Arial, sans-serif', letterSpacing: '-0.05em' }}></div>