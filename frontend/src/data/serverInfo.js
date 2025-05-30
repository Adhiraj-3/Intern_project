// src/data/serverInfo.js
const serverInfo = {
  title: "! RC3-BASEMAPS",
  flagIcon: "/images/flag.png", // Adjusted to frontend public path
  mode: "CONQUEST LARGE",
  map: "Siege of Shanghai",
  details: {
    type: "normal",
    hz: "40 Hz"
  },
  description: "Server protected by The_K-50 AntiCheat. Vip !Rules, Questions, Request, Appeal, Visit us: www.epp.gg | Discord https://discord.gg/3r5NK4d",
  avatarsLeft: [
    "/avatars/avatar1.jpg",
    "/avatars/avatar2.jpg",
    "/avatars/avatar3.jpg",
    "/avatars/avatar4.jpg",
    "/avatars/avatar5.jpg"
  ],
  avatarsRight: [
    "/avatars/avatar6.jpg",
    "/avatars/avatar7.jpg"
  ],
  stats: {
    players: "64/64",
    ping: "47ms",
    tickrate: "60 Hz"
  },
  settings: {
    region: "Europe - DE",
    punkbuster: "On",
    fairfight: "On",
    password: "Off",
    preset: "Normal"
  },
  advanced: {
    minimap: "On",
    onlySquadLeaderSpawn: "Off",
    vehicles: "On",
    teamBalance: "On",
    minimapSpotting: "On",
    hud: "On",
    thirdPVehicleCam: "On",
    regenerativeHealth: "On",
    killCam: "On",
    friendlyFire: "Off",
    threeDSpotting: "On",
    enemyNameTags: "On"
  },
  rules: {
    tickets: 400,
    vehicleSpawnDelay: 25,
    bulletDamage: 100,
    kickAfterTeamKills: 5,
    playerHealth: 100,
    playerRespawnTime: 100,
    kickAfterIdle: 300,
    banAfterKicks: 3
  },
  mapRotation: [
    "/maps/map1.jpg",
    "/maps/map2.jpg",
    "/maps/map3.jpg",
    "/maps/map4.jpg"
  ],
  favorites: 13672
};

export default serverInfo;
