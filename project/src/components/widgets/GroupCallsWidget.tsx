import React from 'react';
import { ChevronRight } from 'lucide-react';
import GroupCallCard from '../cards/GroupCallCard';

const GroupCallsWidget: React.FC = () => {
  const groupCalls = [
    {
      id: 1,
      title: 'Weekly Meeting - Product Demo Review with Testers',
      date: 'Jul 28, 2025',
      time: '11:00 AM',
      thumbnail: 'https://images.pexels.com/photos/3153198/pexels-photo-3153198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      status: 'upcoming',
      attendees: 6,
      studyGroup: 'UI Strategy',
    },
    {
      id: 2,
      title: 'Weekly Meeting - Product Demo Review with Testers',
      date: 'Jul 30, 2025',
      time: '11:00 AM',
      thumbnail: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      status: 'ongoing',
      attendees: 4,
      studyGroup: 'UX Strategy',
    },
    {
      id: 3,
      title: 'Weekly Meeting - Product Demo Review with Testers',
      date: 'Jul 30, 2025',
      time: '11:00 AM',
      thumbnail: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      status: 'upcoming',
      attendees: 8,
      studyGroup: 'Design Systems',
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm p-5">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Group Calls</h3>
        <div className="flex items-center text-sm text-purple-600">
          <span>See all</span>
          <ChevronRight size={16} />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {groupCalls.map((call) => (
          <GroupCallCard key={call.id} call={call} />
        ))}
      </div>
    </div>
  );
};

export default GroupCallsWidget;