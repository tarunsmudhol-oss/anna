import React from 'react';
import { Search, Bell, Plus, ChevronDown } from 'lucide-react';

const TopBar: React.FC = () => {
  return (
    <header className="h-20 bg-white border-b border-gray-200 px-6 lg:px-10 flex items-center justify-between sticky top-0 z-10">
      {/* Left: Mobile Toggle (placeholder) & Title/Dropdown */}
      <div className="flex items-center gap-4">
        <div className="hidden md:flex items-center gap-2 cursor-pointer hover:bg-gray-50 px-3 py-2 rounded-lg transition-colors">
          <span className="text-sm font-semibold text-gray-800">Sales Admin</span>
          <ChevronDown size={16} className="text-gray-500" />
        </div>
      </div>

      {/* Center: Search Bar */}
      <div className="hidden md:flex flex-1 max-w-lg mx-8">
        <div className="relative w-full">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search size={18} className="text-gray-400" />
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-3 py-2.5 border border-gray-200 rounded-xl leading-5 bg-gray-50 placeholder-gray-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-blue-100 focus:border-blue-400 sm:text-sm transition-all"
            placeholder="Search for anything..."
          />
        </div>
      </div>

      {/* Right: Actions */}
      <div className="flex items-center gap-4 md:gap-6">
        <button className="relative p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-50 rounded-full transition-colors">
          <Bell size={20} />
          <span className="absolute top-2 right-2.5 block h-2 w-2 rounded-full ring-2 ring-white bg-red-500"></span>
        </button>
        
        <img 
            src="https://picsum.photos/40/40" 
            alt="User" 
            className="w-9 h-9 rounded-full object-cover lg:hidden"
        />

        <button className="hidden sm:flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2.5 rounded-xl text-sm font-medium transition-colors shadow-lg shadow-blue-200">
          <Plus size={18} />
          <span>Add new product</span>
        </button>
      </div>
    </header>
  );
};

export default TopBar;