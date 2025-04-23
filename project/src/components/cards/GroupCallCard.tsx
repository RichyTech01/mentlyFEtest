import React from 'react';
import { Calendar, Clock, Users } from 'lucide-react';

interface GroupCallProps {
  call: {
    id: number;
    title: string;
    date: string;
    time: string;
    thumbnail: string;
    status: string;
    attendees: number;
    studyGroup: string;
  };
}

const GroupCallCard: React.FC<GroupCallProps> = ({ call }) => {
  const statusColor = call.status === 'ongoing' ? 'bg-green-500' : 'bg-blue-500';
  const statusText = call.status === 'ongoing' ? 'Ongoing' : 'Upcoming';
  
  return (
    <div className="border border-gray-100 rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-200">
      <div className="relative">
        <img 
          src={call.thumbnail} 
          alt={call.title} 
          className="w-full h-40 object-cover" 
        />
        <div className={`absolute top-2 right-2 ${statusColor} text-white text-xs px-2 py-1 rounded-full`}>
          {statusText}
        </div>
      </div>
      
      <div className="p-4">
        <h4 className="font-medium text-gray-900 line-clamp-2">{call.title}</h4>
        
        <div className="mt-3 space-y-2">
          <div className="flex items-center text-sm text-gray-600">
            <Calendar size={16} className="mr-2" />
            <span>{call.date}</span>
          </div>
          
          <div className="flex items-center text-sm text-gray-600">
            <Clock size={16} className="mr-2" />
            <span>{call.time}</span>
          </div>
          
          <div className="flex items-center text-sm text-gray-600">
            <Users size={16} className="mr-2" />
            <span>{call.attendees} participants</span>
          </div>
        </div>
        
        <div className="mt-4">
          <div className="text-xs text-gray-500 mb-1">
            {call.studyGroup} Study group
          </div>
          
          <div className="flex -space-x-2">
            {[...Array(Math.min(call.attendees, 3))].map((_, i) => (
              <div 
                key={i}
                className="w-6 h-6 rounded-full bg-gray-300 border border-white flex items-center justify-center text-xs font-bold text-gray-600"
              >
                {String.fromCharCode(65 + i)}
              </div>
            ))}
            {call.attendees > 3 && (
              <div className="w-6 h-6 rounded-full bg-gray-200 border border-white flex items-center justify-center text-xs font-bold text-gray-600">
                +{call.attendees - 3}
              </div>
            )}
          </div>
        </div>
        
        <div className="mt-4">
          <button className={`w-full py-2 rounded ${call.status === 'ongoing' ? 'bg-[#5D13E7] text-white' : 'border border-[#5D13E7] text-[#5D13E7]'} font-medium text-sm hover:opacity-90 transition-opacity duration-200`}>
            {call.status === 'ongoing' ? 'Join Now' : 'View Participants'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default GroupCallCard;