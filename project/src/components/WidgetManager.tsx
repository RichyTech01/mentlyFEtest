import React, { useState } from 'react';
import { X } from 'lucide-react';

interface WidgetManagerProps {
  activeWidgets: {
    programs: boolean;
    groupCalls: boolean;
    mentors: boolean;
    activities: boolean;
    users: boolean;
  };
  onClose: () => void;
  onSave: (settings: any) => void;
}

const WidgetManager: React.FC<WidgetManagerProps> = ({ activeWidgets, onClose, onSave }) => {
  const [settings, setSettings] = useState({ ...activeWidgets });

  const toggleWidget = (name: keyof typeof settings) => {
    setSettings(prev => ({
      ...prev,
      [name]: !prev[name]
    }));
  };

  const handleSave = () => {
    onSave(settings);
  };

  const handleReset = () => {
    setSettings({
      programs: true,
      groupCalls: true,
      mentors: true,
      activities: true,
      users: true,
    });
  };

  return (
    <div className="h-full flex flex-col">
      <div className="flex justify-between items-center p-6 border-b border-gray-200">
        <h2 className="text-xl font-bold text-gray-900">Manage Widgets</h2>
        <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
          <X size={24} />
        </button>
      </div>
      
      <div className="flex-1 overflow-y-auto p-6">
        <p className="text-gray-600 mb-6">Personalize your dashboard by managing widgets - add, remove, or reorder them to fit your workflow.</p>
        
        <div className="space-y-4">
          <WidgetOption 
            label="Programs" 
            isActive={settings.programs} 
            onChange={() => toggleWidget('programs')} 
          />
          <WidgetOption 
            label="Group Calls" 
            isActive={settings.groupCalls} 
            onChange={() => toggleWidget('groupCalls')} 
          />
          <WidgetOption 
            label="Mentors" 
            isActive={settings.mentors} 
            onChange={() => toggleWidget('mentors')} 
          />
          <WidgetOption 
            label="Recent Activities" 
            isActive={settings.activities} 
            onChange={() => toggleWidget('activities')} 
          />
          <WidgetOption 
            label="Users" 
            isActive={settings.users} 
            onChange={() => toggleWidget('users')} 
          />
        </div>
      </div>
      
      <div className="p-6 border-t border-gray-200">
        <div className="flex justify-end space-x-4">
          <button
            onClick={handleReset}
            className="px-4 py-2 border border-purple-500 text-purple-600 rounded-md hover:bg-purple-50"
          >
            Reset to Default
          </button>
          <button
            onClick={handleSave}
            className="px-4 py-2 bg-[#5D13E7] text-white rounded-md hover:bg-purple-700"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

interface WidgetOptionProps {
  label: string;
  isActive: boolean;
  onChange: () => void;
}

const WidgetOption: React.FC<WidgetOptionProps> = ({ label, isActive, onChange }) => {
  return (
    <div className="flex items-center justify-between p-3 border-b border-gray-100">
      <div className="flex items-center">
        <span className="text-gray-800">{label}</span>
      </div>
      <label className="relative inline-flex cursor-pointer">
        <input 
          type="checkbox" 
          className="sr-only peer" 
          checked={isActive} 
          onChange={onChange}
        />
        <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#5D13E7]"></div>
      </label>
    </div>
  );
};

export default WidgetManager;