import React from 'react';
import { ChevronRight } from 'lucide-react';
import MentorCard from '../cards/MentorCard';


const ApplicationWidget: React.FC = () => {
  const mentors = [
    {
      id: 1,
      name: 'Maxwell Smith',
      email: 'maxwellsmith@gmail.com',
      avatar: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      role: 'Product Designer',
      skills: ['UI/UX Design', 'Figma'],
      experience: 'Senior'
    },
    {
      id: 2,
      name: 'Adeati Samuel',
      email: 'adeatisamuel@gmail.com',
      avatar: 'https://images.pexels.com/photos/3182801/pexels-photo-3182801.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      role: 'Product Designer',
      skills: ['User Research', 'Product Strategy'],
      experience: 'Mid-level'
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm p-5">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Application</h3>
        <div className="flex items-center text-sm text-purple-600">
          <span>See all</span>
          <ChevronRight size={16} />
        </div>
      </div>

      <div className="space-y-4">
        {mentors.map((mentor) => (
          <MentorCard key={mentor.id} mentor={mentor} />
        ))}
      </div>
    </div>
  );
};

export default ApplicationWidget;


