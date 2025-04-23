import React from 'react';
import { useMediaQuery } from '../hooks/useMediaQuery';
import AppLogo from "../assets/AppLogo.svg"
import Sideicon from "../assets/sideIcon.svg"
import ProgramIcon from "../assets/programIcon.svg"
import ActivitiesIcon from "../assets/ActivitiesIcon.svg"
import UsersIcon from "../assets/Usersicon.svg"
import ForumsIcon from "../assets/Forum.svg"
import FinancesIcon from "../assets/Finances.svg"
import RewardsIcon from "../assets/Rewards.svg"
import AnalyticsIcon from "../assets/Analytics.svg"
import SettingsIcon from "../assets/Settings.svg"
import DashboardIcon from "../assets/Dashboardicon.svg"
import LogoutIcon from "../assets/LogOut.svg"
import InquImg from "../assets/InquiriesImg.svg"



interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  const isMobile = useMediaQuery('(max-width: 768px)');
  
  const navItems = [
    { icon: <img src={DashboardIcon} alt="Programs" />, label: 'Dashboard', active: true },
    { icon: <img src={ProgramIcon} alt="Programs" />, label: 'Programs' },
    { icon: <img src={ActivitiesIcon} alt="Activities" />, label: 'Activities' },
    { icon: <img src={UsersIcon} alt="Users" />, label: 'Users' },
    { icon: <img src={ForumsIcon} alt="Forums" />, label: 'Forums' },
    { icon: <img src={FinancesIcon} alt="Finances" />, label: 'Finances' },
    { icon: <img src={RewardsIcon} alt="Rewards" />, label: 'Rewards' },
    { icon: <img src={AnalyticsIcon} alt="Analytics" />, label: 'Analytics' },
    { icon: <img src={SettingsIcon} alt="Settings" />, label: 'Settings' },
  ];

  const sidebarClasses = `fixed md:static h-full transition-all duration-300 ease-in-out bg-[#340260] text-white z-50 flex flex-col ${
    isOpen ? 'translate-x-0 w-[240px]' : '-translate-x-full w-0 md:w-16 md:translate-x-0'
  }`;
  
  return (
    <>
      {isMobile && isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={toggleSidebar} />
      )}
      
      <div className={sidebarClasses}>
        <div className="flex-shrink-0 pl-[36.39px] pr-[16px] py-6 ">
          <div className="flex items-center h-12 justify-between ">
           <img src={AppLogo} alt="" />
           <img src={Sideicon} alt="" />
          </div>
        </div>
        
        <div className="flex-1 overflow-y-auto py-4 hide-scrollbar">
          <nav className="px-[16px] space-y-1">
            {navItems.map((item, index) => (
              <a
                key={index}
                href="#"
                className={`flex items-center px-[32px] py-[16px] text-[16px] font-normal rounded-[8px] transition-colors duration-200 ${
                  item.active ? 'bg-white text-[#1F0954]' : 'text-[#C2C2C2]'
                }`}
              >
                <div className="mr-[27px]">{item.icon}</div>
                {isOpen && <span>{item.label}</span>}
              </a>
            ))}
          </nav>
        </div>

        <div className="flex-shrink-0 px-[32px] py-4 ">
          <a
            href="#"
            className="flex items-center px-[16px] py-3 text-[16px] text-[#C2C2C2] rounded-[8px] transition-colors duration-200"
          >
            <img src={LogoutIcon} alt="Logout" className='mr-[27px]' />
            {isOpen && <span>Log Out</span>}
          </a>
        </div>

        {isOpen && (
          <div className="flex-shrink-0 px-[16px] py-4 ">
            <div className="bg-[#FFFFFF1F] rounded-[8px] py-[10px] px-[15px] h-[126px] flex flex-col  justify-between">
              <img src={InquImg} alt="inq" className='w-[20px] h-[20px] '/>
              <p className="text-[12px] text-[#FFFFFF] font-bold  ">Got some questions, enquiries or need help?</p>
              <button className=" text-[10px] text-[#F0C074] underline text-left  ">
                Visit Mently Help Desk Here
              </button>
            </div>
          </div>
        )}

        {isOpen && (
          <div className="flex-shrink-0 px-6 py-3">
            <div className="flex items-center justify-between">
              <span className="text-[12px] text-[#F2F2F2] font-bold  ">Switch to Classic Mode</span>
              <div className="relative inline-block w-10 align-middle select-none">
                <input type="checkbox" className="sr-only" id="toggle" />
                <label
                  htmlFor="toggle"
                  className="block h-[14.62px] max-w-[29.23px] w-full rounded-full bg-[#F6F6F6] cursor-pointer"
                >
                  <span className="absolute w-[11.69px] h-[11.69px] rounded-full bg-[#1F0954] transform transition-transform duration-200 ease-in-out translate-x-[2px] translate-y-[1.5px]  " />
                </label>
              </div>
            </div>
          </div>
        )}
      </div>
      
      {isMobile && !isOpen && (
        <button
          className="fixed bottom-4 left-4 bg-[#5D13E7] text-white p-3 rounded-full shadow-lg z-40"
          onClick={toggleSidebar}
        >
         <img src={SettingsIcon} alt="Settings" />
        </button>
      )}
    </>
  );
};

export default Sidebar;