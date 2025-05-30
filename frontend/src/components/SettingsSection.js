import React from 'react';

function SettingsSection({ data }) {
  return (
    <div className="flex-1 p-4 space-y-4">
      <div className="font-bold uppercase tracking-widest mb-4">SETTINGS</div>
      <div className="grid grid-cols-[150px_1fr] gap-x-4 gap-y-4">
        {[
          ['REGION', data.region],
          ['PUNKBUSTER', data.punkbuster],
          ['FAIRFIGHT', data.fairfight],
          ['PASSWORD', data.password],
          ['PRESET', data.preset]
        ].map(([label, value]) => (
          <div key={label} className="col-span-2">
            <div className="flex justify-between items-center">
              <span className="text-xs font-bold uppercase tracking-wide">{label}</span>
              <span className="text-xs text-white/70 uppercase">{value.toUpperCase()}</span>
            </div>
            <div className="h-[1px] bg-white/10 w-full mt-1" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default SettingsSection;
