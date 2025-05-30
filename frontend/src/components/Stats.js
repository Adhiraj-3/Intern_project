import React from 'react';

function Stats({ data }) {
  return (
    <div className="flex space-x-12 max-w-xl select-none p-4">
      <div className="flex flex-col items-center space-y-1 px-4">
        <div className="text-xs font-bold tracking-widest uppercase mb-1">PLAYERS</div>
        <div className="text-sm font-bold uppercase tracking-wide">{data.players.toUpperCase()}</div>
      </div>
      <div className="flex flex-col items-center space-y-1 px-4">
        <div className="text-xs font-bold tracking-widest uppercase mb-1">PING</div>
        <div className="text-sm font-bold uppercase tracking-wide">{data.ping.toUpperCase()}</div>
      </div>
      <div className="flex flex-col items-center space-y-1 px-4">
        <div className="text-xs font-bold tracking-widest uppercase mb-1">TICKRATE</div>
        <div className="text-sm font-bold uppercase tracking-wide">{data.tickrate.toUpperCase()}</div>
      </div>
    </div>
  );
}

export default Stats;
