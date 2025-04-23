import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import DashboardContent from '../components/DashboardContent';
import { useMediaQuery } from '../hooks/useMediaQuery';

const DashboardLayout: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const isMobile = useMediaQuery('(max-width: 768px)');

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar isOpen={isMobile ? sidebarOpen : true} toggleSidebar={toggleSidebar} />
      <DashboardContent toggleSidebar={toggleSidebar} />
    </div>
  );
};

export default DashboardLayout;