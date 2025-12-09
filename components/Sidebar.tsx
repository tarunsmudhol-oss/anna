import React from 'react';
import { 
  LayoutDashboard, 
  BarChart2, 
  Users, 
  Package, 
  MessageSquare, 
  CreditCard, 
  Settings, 
  ShieldCheck, 
  ChevronDown, 
  Hexagon
} from 'lucide-react';
import { MenuItem } from '../types';

const MenuSection = ({ title, items }: { title?: string, items: MenuItem[] }) => (
  <div className="mb-8">
    {title && <h3 className="px-6 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">{title}</h3>}
    <ul className="space-y-1">
      {items.map((item, index) => (
        <li key={index}>
          <a 
            href="#" 
            className={`flex items-center justify-between px-6 py-3 text-sm font-medium transition-colors relative
              ${item.isActive 
                ? 'text-blue-600 bg-blue-50 border-r-4 border-blue-600' 
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'}`}
          >
            <div className="flex items-center gap-3">
              {item.icon}
              <span>{item.name}</span>
            </div>
            <div className="flex items-center gap-2">
              {item.badgeCount && (
                <span className="bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                  {item.badgeCount}
                </span>
              )}
              {item.hasDropdown && <ChevronDown size={14} />}
            </div>
          </a>
        </li>
      ))}
    </ul>
  </div>
);

const Sidebar: React.FC = () => {
  const menuItems: MenuItem[] = [
    { name: 'Overview', icon: <LayoutDashboard size={18} />, isActive: true },
    { name: 'Statistics', icon: <BarChart2 size={18} /> },
    { name: 'Customers', icon: <Users size={18} /> },
    { name: 'Product', icon: <Package size={18} />, hasDropdown: true },
    { name: 'Messages', icon: <MessageSquare size={18} />, badgeCount: 3 },
    { name: 'Transactions', icon: <CreditCard size={18} /> },
  ];

  const generalItems: MenuItem[] = [
    { name: 'Settings', icon: <Settings size={18} /> },
    { name: 'Security', icon: <ShieldCheck size={18} /> },
  ];

  return (
    <aside className="w-64 bg-white h-screen border-r border-gray-200 flex flex-col fixed left-0 top-0 z-20 hidden lg:flex">
      {/* Logo Section */}
      <div className="h-20 flex items-center px-8 border-b border-gray-100">
        <div className="flex items-center gap-2 text-blue-600">
          <Hexagon fill="currentColor" className="w-8 h-8" />
          <span className="text-xl font-bold tracking-tight text-gray-900">Smartargi</span>
        </div>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto py-6">
        <MenuSection title="MENU" items={menuItems} />
        <MenuSection title="GENERAL" items={generalItems} />
      </div>

      {/* Profile Section */}
      <div className="p-6 border-t border-gray-100">
        <div className="flex items-center gap-3">
          <img 
            src="https://picsum.photos/40/40" 
            alt="Profile" 
            className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-sm"
          />
          <div className="flex flex-col overflow-hidden">
            <span className="text-sm font-semibold text-gray-900 truncate">John Doe</span>
            <span className="text-xs text-gray-500 truncate">john@smartargi.com</span>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;