import React from 'react';

function RulesSection({ data }) {
  return (
    <div className="flex-1 p-4 space-y-4">
      <div className="font-bold uppercase tracking-widest mb-4">RULES</div>
      <div className="grid grid-cols-[200px_1fr] gap-x-4 gap-y-4">
        {[
          ['TICKETS', data.tickets],
          ['VEHICLE SPAWN DELAY', data.vehicleSpawnDelay],
          ['BULLET DAMAGE', data.bulletDamage],
          ['KICK AFTER TEAM KILLS', data.kickAfterTeamKills],
          ['PLAYER HEALTH', data.playerHealth],
          ['PLAYER RESPAWN TIME', data.playerRespawnTime],
          ['KICK AFTER IDLE', data.kickAfterIdle],
          ['BAN AFTER KICKS', data.banAfterKicks]
        ].map(([label, value]) => (
          <div key={label} className="col-span-2">
            <div className="flex justify-between items-center">
              <span className="text-xs font-bold uppercase tracking-wide">{label}</span>
              <span className="text-xs text-white/70 uppercase">{value.toString().toUpperCase()}</span>
            </div>
            <div className="h-[1px] bg-white/10 w-full mt-1" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default RulesSection;
