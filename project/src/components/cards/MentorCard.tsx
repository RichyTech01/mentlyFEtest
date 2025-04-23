import React from 'react';
import { MessageCircle } from 'lucide-react';

interface MentorProps {
  mentor: {
    id: number;
    name: string;
    email: string;
    avatar: string;
    role: string;
    skills: string[];
    experience: string;
  };
}

const MentorCard: React.FC<MentorProps> = ({ mentor }) => {
  return (
    <div className="flex items-center justify-between p-3 border-b border-gray-100 hover:bg-gray-50 transition-colors duration-200 rounded-lg">
      <div className="flex items-center">
        <img 
          src={mentor.avatar} 
          alt={mentor.name} 
          className="h-10 w-10 rounded-full object-cover mr-3" 
        />
        <div>
          <h4 className="font-medium text-gray-900">{mentor.name}</h4>
          <p className="text-xs text-gray-500">{mentor.email}</p>
          <div className="mt-1 flex items-center text-xs">
            <span className="text-gray-600 mr-2">{mentor.role}</span>
            <div className="flex space-x-1">
              {mentor.skills.slice(0, 2).map((skill, i) => (
                <span key={i} className="bg-gray-100 text-gray-700 px-1.5 py-0.5 rounded">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      <button className="bg-[#5D13E7] text-white px-3 py-1.5 rounded-md text-sm flex items-center hover:bg-purple-700 transition-colors duration-200">
        <MessageCircle size={16} className="mr-1" />
        <span className="hidden sm:inline">Message</span>
      </button>
    </div>
  );
};

export default MentorCard;