import React from 'react';
import NavBar from './components/NavBar';
import SidebarLeft from './components/SidebarLeft';
import SidebarRight from './components/SidebarRight';
import ServerHeader from './components/ServerHeader';
import AvatarList from './components/AvatarList';
import ActionButtons from './components/ActionButtons';
import Stats from './components/Stats';
import SettingsSection from './components/SettingsSection';
import AdvancedSection from './components/AdvancedSection';
import RulesSection from './components/RulesSection';
import MapRotation from './components/MapRotation';

// Import the local static server info data
import serverInfo from './data/serverInfo';

function App() {
  // No more fetching or state needed, just use static data

  const maps = [
    { filename: 'Map1.png', title: 'Conquest Large Dawnbreaker' },
    { filename: 'Map2.png', title: 'Conquest Large Propaganda' },
    { filename: 'Map3.png', title: 'Conquest Large Operation Locker' },
    { filename: 'Map4.png', title: 'Conquest Large Lancang Dam' },
    { filename: 'Map1.png', title: 'Conquest Large Dawnbreaker' },
    { filename: 'Map2.png', title: 'Conquest Large Propaganda' },
    { filename: 'Map3.png', title: 'Conquest Large Operation Locker' },
    { filename: 'Map4.png', title: 'Conquest Large Lancang Dam' },
    { filename: 'Map1.png', title: 'Conquest Large Dawnbreaker' },
    { filename: 'Map2.png', title: 'Conquest Large Propaganda' },
    { filename: 'Map3.png', title: 'Conquest Large Operation Locker' },
    { filename: 'Map4.png', title: 'Conquest Large Lancang Dam' },
    { filename: 'Map1.png', title: 'Conquest Large Dawnbreaker' },
    { filename: 'Map2.png', title: 'Conquest Large Propaganda' },
    { filename: 'Map3.png', title: 'Conquest Large Operation Locker' },
    { filename: 'Map4.png', title: 'Conquest Large Lancang Dam' },
    { filename: 'Map1.png', title: 'Conquest Large Dawnbreaker' },
    { filename: 'Map2.png', title: 'Conquest Large Propaganda' },
    { filename: 'Map3.png', title: 'Conquest Large Operation Locker' },
    { filename: 'Map4.png', title: 'Conquest Large Lancang Dam' },
  ];

  const LeftAvatars = ['LeftAvatar1.png', 'LeftAvatar2.png', 'LeftAvatar3.png', 'LeftAvatar4.png', 'LeftAvatar5.png'];
  const RightAvatars = ['RightAvatar1.png', 'RightAvatar2.png'];

  return (
    <div
      className="relative min-h-screen text-white"
      style={{ background: "url('/images/image.png') center/cover no-repeat" }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a2a3a]/80 to-[#1a2a3a]/90" />

      {/* Layout Structure */}
      <div className="relative flex h-screen overflow-hidden">
        
        {/* Left Sidebar - Sticky */}
        <aside className="sticky top-0 h-screen">
          <SidebarLeft avatars={LeftAvatars} />
        </aside>
         
        {/* Main Content - Scrollable */}
        <main className="flex-1 overflow-y-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12">
          <NavBar />
          <h1 className="text-2xl sm:text-3xl font-semibold tracking-widest mb-6 select-none">SERVER INFO</h1>
          <ServerHeader data={serverInfo} />
          <ActionButtons favorites={serverInfo.favorites} />
          <Stats data={serverInfo.stats} />
          <div className="flex space-x-12 max-w-5xl text-[10px] sm:text-xs select-none">
            <SettingsSection data={serverInfo.settings} />
            <AdvancedSection data={serverInfo.advanced} />
            <RulesSection data={serverInfo.rules} />
          </div>
          <MapRotation maps={maps} />
        </main>

        {/* Right Sidebar - Sticky */}
        <aside className="sticky top-0 h-screen">
          <SidebarRight avatars={RightAvatars} />
        </aside>
      </div>
    </div>
  );
}

export default App;
