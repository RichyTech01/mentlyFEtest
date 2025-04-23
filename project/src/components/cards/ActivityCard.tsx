import React from 'react';
import { ReactNode } from 'react';

interface ActivityProps {
  activity: {
    id: number;
    title: string;
    description: string;
    time: string;
    icon: ReactNode;
    color: string;
  };
}

const ActivityCard: React.FC<ActivityProps> = ({ activity }) => {
  const colorMap: Record<string, string> = {
    green: 'bg-green-100',
    blue: 'bg-blue-100',
    orange: 'bg-orange-100',
    red: 'bg-red-100',
    purple: 'bg-purple-100',
  };

  return (
    <div className="flex items-start p-3 border-b border-gray-100 hover:bg-gray-50 transition-colors duration-200 rounded-lg">
      <div className={`p-2 rounded-full mr-3 ${colorMap[activity.color]}`}>
        {activity.icon}
      </div>
      <div className="flex-1">
        <h4 className="font-medium text-gray-900">{activity.title}</h4>
        <p className="text-sm text-gray-600">{activity.description}</p>
        <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
      </div>
    </div>
  );
};

export default ActivityCard;