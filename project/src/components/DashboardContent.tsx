import React, { useState } from 'react';
import WelcomeBanner from './WelcomeBanner';
import ProgramsWidget from './widgets/ProgramsWidget';
import GroupCallsWidget from './widgets/GroupCallsWidget';
import MentorsWidget from './widgets/ApplicationWidget';
import ActivitiesWidget from './widgets/ActivitiesWidget';
import UsersWidget from './widgets/UsersWidget';
import WidgetManager from './WidgetManager';
import { useMediaQuery } from '../hooks/useMediaQuery';
import Header from './Header';
import ManageWidgetIcons from "../assets/ManageWidgetImg.svg"

interface DashboardContentProps {
  toggleSidebar: () => void;
}

const DashboardContent: React.FC<DashboardContentProps> = ({ toggleSidebar }) => {
  const [showWidgetManager, setShowWidgetManager] = useState(false);
  const [activeWidgets, setActiveWidgets] = useState({
    programs: true,
    groupCalls: true,
    mentors: true,
    activities: true,
    users: true,
  });
  
  const isMobile = useMediaQuery('(max-width: 768px)');

  const toggleWidgetManager = () => {
    setShowWidgetManager(!showWidgetManager);
  };

  const updateWidgetSettings = (settings: typeof activeWidgets) => {
    setActiveWidgets(settings);
    setShowWidgetManager(false);
  };

  return (
    <div className="flex-1 flex flex-col h-screen bg-[#F8F9FE]">
    
      <Header isMobile={isMobile} toggleSidebar={toggleSidebar}/>
      
      <div className="flex-1 overflow-y-auto light-scrollbar">
        <div className="px-10 ">
          <div className="flex justify-end items-center cursor-pointer py-[16px]" onClick={toggleWidgetManager}>
            <div className='flex items-center justify-between'>
               <img src={ManageWidgetIcons} alt="mangewidget" />
               <p className='text-[16px] text-[#1F0954] font-bold ml-[23px]  '>Manage Widgets</p>
             </div>
          </div>
          
          <WelcomeBanner username="Blessing" />
          {/* grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8 */}

          <div className="flex gap-8 mt-8">
            <div className="w-[30%] flex flex-col ">
              {activeWidgets.programs && <ProgramsWidget />}
              <div className='mt-[20px] '>
                {activeWidgets.users && <UsersWidget />}
              </div>
            </div>

            <div className="flex-1 flex flex-col">
              {activeWidgets.groupCalls && <GroupCallsWidget />}
              <div className='flex justify-between  mt-[20px] '>
                  {activeWidgets.mentors && <MentorsWidget />}
                  {activeWidgets.activities && <ActivitiesWidget />}
              </div>
            </div>
        </div>

        </div>
      </div>
      
      {showWidgetManager && (
        <div className="fixed inset-0 z-50">
          <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm" onClick={() => setShowWidgetManager(false)} />
          <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl transform transition-transform duration-300 ease-in-out">
            <WidgetManager 
              activeWidgets={activeWidgets} 
              onClose={() => setShowWidgetManager(false)} 
              onSave={updateWidgetSettings}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default DashboardContent;