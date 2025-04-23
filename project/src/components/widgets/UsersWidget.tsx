import React from 'react';
import { ChevronRight } from 'lucide-react';
import { DonutChart } from '../charts/DonutChart';

const UsersWidget: React.FC = () => {
  const userData = {
    total: 240,
    students: 200,
    mentors: 8,
    programs: 22,
    others: 10
  };

  const chartData = [
    { name: 'Students', value: userData.students, color: '#4F46E5' },
    { name: 'Mentors', value: userData.mentors, color: '#10B981' },
    { name: 'Programs', value: userData.programs, color: '#F59E0B' },
    { name: 'Others', value: userData.others, color: '#6B7280' },
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm p-5">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Users</h3>
        <div className="flex items-center">
          <select className="border border-gray-200 rounded-md px-2 py-1 text-sm mr-2">
            <option>All</option>
            <option>Students</option>
            <option>Mentors</option>
          </select>
          <div className="flex items-center text-sm text-purple-600">
            <span>See all</span>
            <ChevronRight size={16} />
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="relative">
            <DonutChart data={chartData} />
            <div className="absolute inset-0 flex items-center justify-center flex-col">
              <span className="text-3xl font-bold">{userData.total}</span>
              <span className="text-sm text-gray-500">Users</span>
            </div>
          </div>
        </div>
        
        <div className="w-full md:w-1/2 mt-4 md:mt-0">
          <ul className="space-y-3">
            {chartData.map((item, index) => (
              <li key={index} className="flex items-center justify-between">
                <div className="flex items-center">
                  <span 
                    className="h-3 w-3 rounded-full mr-2" 
                    style={{ backgroundColor: item.color }}
                  ></span>
                  <span className="text-sm">{item.name}</span>
                </div>
                <span className="text-sm font-medium">{item.value}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UsersWidget;