
import UsersImg from "../assets/UsersImg.svg"
import UsersSecImg from "../assets/UserSecImg.svg"
import { Bell, Menu } from 'lucide-react';


type Headerprops = {
    toggleSidebar:() => void
    isMobile: boolean
}

const Header = ({toggleSidebar, isMobile }: Headerprops) => {

    return ( 
        <header className="bg-white shadow-sm z-10 ">
        <div className="flex items-center justify-between px-10 py-[19px]">
          <div className="flex items-center">
            {isMobile && (
              <button onClick={toggleSidebar} className="mr-2"> 
                <Menu size={24} />
              </button>
            )}
          </div>
          
          <div className="flex items-center space-x-10">
            <button className="relative p-2 rounded-full text-gray-500 hover:text-gray-700 focus:outline-none hover:bg-gray-100 transition-colors duration-200">
              <span className="absolute top-2 right-2 h-2 w-2 bg-red-500 rounded-full"></span>
              <Bell size={20} />
            </button>
            
            <div className="flex items-center ">
              <div className="flex-shrink-0 h-[44px] w-[44px] rounded-full bg-[#8B72FC] flex items-center justify-center">
                <img src={UsersImg} alt="userImg" />
              </div>
              <div className="ml-[8px] items-center ">
                <span className="hidden md:block text-[14px] text-[#404040] ">Techrity  Foun...</span>
                <p className=" hidden md:block text-[12px] text-[#53547B] mt-[4px]  ">Member</p>
              </div>
              <img src={UsersSecImg} alt="userImg" className="ml-[18px]" />
            </div>
          </div>
        </div>
      </header>
     );
}
 
export default Header;