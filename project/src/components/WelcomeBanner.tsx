import React from 'react';

interface WelcomeBannerProps {
  username: string;
}

const WelcomeBanner: React.FC<WelcomeBannerProps> = ({ username }) => {
  return (
    <div className="bg-[#6F01D0] text-white rounded-[4px] h-[51px] px-[20px] py-[6px] flex flex-col md:flex-row justify-between items-start md:items-center animate-fadeIn">
      <div className="flex items-center">
        <h2 className="text-[26px] font-bold ">Welcome Aboard, {username} 👋</h2>
      </div>
      <p className="ml-4 hidden text-[20px] font-semibold md:block text-[#BDBDBD] ">We're thrilled to have you join Techrity Team!</p>
      <button className="py-[8px] px-[24px] md:mt-0 bg-white text-[#1F0954] rounded-[8px] text-[16px] font-bold hover:bg-gray-100 transition-colors duration-200 ">
        Update Profile
      </button>
    </div>
  );
};

export default WelcomeBanner;