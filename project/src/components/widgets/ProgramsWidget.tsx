import React from 'react';
import { ChevronRight, Search } from 'lucide-react';
import ProgramCard from '../cards/ProgramCard';

const ProgramsWidget: React.FC = () => {
  const programs = [
    {
      id: 1,
      title: 'Fundamentals of User Interface & Experience',
      instructor: 'Muhammad Auwal Yahaya',
      thumbnail: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      status: 'ongoing',
      progress: 30,
      description: 'This program is a hands-on guide designed for designers who want to master visual hierarchy and confidently apply it to their designs.'
    },
    {
      id: 2,
      title: 'Colour Hack Practical Group Call',
      instructor: 'Fatih Görk',
      thumbnail: 'https://images.pexels.com/photos/326501/pexels-photo-326501.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      status: 'upcoming',
      progress: 0,
      description: 'This program is a hands-on guide designed for designers who want to master color theory and confidently apply it to their designs.'
    },
    {
      id: 3,
      title: 'Advanced UI Design Patterns',
      instructor: 'Zulf',
      thumbnail: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      status: 'upcoming',
      progress: 0,
      description: 'This program is a hands-on guide designed for designers who want to master advanced UI patterns and confidently apply it to their designs.'
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm p-5">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Programs</h3>
        <div className="flex items-center text-sm text-purple-600">
          <span>See all</span>
          <ChevronRight size={16} />
        </div>
      </div>

      <div className="flex items-center mb-4">
        <div className="relative w-full">
          <input
            type="text"
            placeholder="Search programs..."
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
          />
          <Search size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
        <select className="ml-2 border border-gray-200 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm">
          <option>All</option>
          <option>Ongoing</option>
          <option>Upcoming</option>
          <option>Completed</option>
        </select>
      </div>

      <div className="space-y-4">
        {/* {programs.map((program) => ( */}
          <ProgramCard />
        {/* ))} */}
      </div>
    </div>
  );
};

export default ProgramsWidget;