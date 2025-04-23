import React from 'react';
import { ChevronRight, Shield, User, AlertTriangle } from 'lucide-react';
import ActivityCard from '../cards/ActivityCard';

const ActivitiesWidget: React.FC = () => {
  const activities = [
    {
      id: 1,
      title: 'KYC Verification',
      description: '45 new persons just signed up on Morify',
      time: '25 minutes Ago',
      icon: <Shield className="h-5 w-5 text-green-500" />,
      color: 'green'
    },
    {
      id: 2,
      title: 'New User Sign Up!',
      description: '45 new persons just signed up on Morify',
      time: '25 minutes Ago',
      icon: <User className="h-5 w-5 text-blue-500" />,
      color: 'blue'
    },
    {
      id: 3,
      title: 'Withdrawal Request',
      description: 'Mandian requested a withdrawal',
      time: '25 minutes Ago',
      icon: <AlertTriangle className="h-5 w-5 text-orange-500" />,
      color: 'orange'
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm p-5">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Member</h3>
        <div className="flex items-center text-sm text-purple-600">
          <span>See all</span>
          <ChevronRight size={16} />
        </div>
      </div>

      <div className="space-y-4">
        {activities.map((activity) => (
          <ActivityCard key={activity.id} activity={activity} />
        ))}
      </div>
    </div>
  );
};

export default ActivitiesWidget;