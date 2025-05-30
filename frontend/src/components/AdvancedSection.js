import React from 'react';

function AdvancedSection({ data }) {
  return (
    <div className="flex-1 p-4 space-y-4">
      <div className="font-bold uppercase tracking-widest mb-4">ADVANCED</div>
      <div className="grid grid-cols-[200px_1fr] gap-x-4 gap-y-4">
        {[
          ['MINIMAP', data.minimap],
          ['ONLY SQUAD LEADER SPAWN', data.onlySquadLeaderSpawn],
          ['VEHICLES', data.vehicles],
          ['TEAM BALANCE', data.teamBalance],
          ['MINIMAP SPOTTING', data.minimapSpotting],
          ['HUD', data.hud],
          ['3P VEHICLE CAM', data.thirdPVehicleCam],
          ['REGENERATIVE HEALTH', data.regenerativeHealth],
          ['KILL CAM', data.killCam],
          ['FRIENDLY FIRE', data.friendlyFire],
          ['3D SPOTTING', data.threeDSpotting],
          ['ENEMY NAME TAGS', data.enemyNameTags]
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

export default AdvancedSection;
