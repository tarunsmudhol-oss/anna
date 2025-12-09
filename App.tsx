import React from 'react';
import Sidebar from './components/Sidebar';
import TopBar from './components/TopBar';
import RightSidebar from './components/RightSidebar';
import DashboardContent from './components/DashboardContent';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F8F9FB] flex">
      {/* 1. Left Sidebar */}
      <Sidebar />

      {/* Main Layout Wrapper */}
      <div className="flex-1 flex flex-col ml-0 lg:ml-64 mr-0 xl:mr-80 transition-all duration-300">
        
        {/* 2. Top Navigation */}
        <TopBar />

        {/* 3. Main Content */}
        <DashboardContent />

      </div>

      {/* 4. Right Sidebar */}
      <RightSidebar />
    </div>
  );
};

export default App;