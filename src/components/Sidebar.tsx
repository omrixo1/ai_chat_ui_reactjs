import React from 'react';
import { Plus, Search, Home, MessageSquare, Clock, Settings, User } from 'lucide-react';

interface SidebarProps {
  isDark: boolean;
}

export default function Sidebar({ isDark }: SidebarProps) {
  return (
    <div className={`w-16 h-screen ${isDark ? 'bg-gray-900' : 'bg-white'} border-r ${isDark ? 'border-gray-700' : 'border-gray-200'} flex flex-col items-center py-4`}>
      {/* Logo */}
      <div className={`w-10 h-10 ${isDark ? 'bg-white text-black' : 'bg-black text-white'} rounded-lg flex items-center justify-center mb-6`}>
        <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[8px] border-b-current transform rotate-180"></div>
      </div>

      {/* Navigation Icons */}
      <div className="flex flex-col space-y-4 mb-auto">
        <button className={`p-2 rounded-lg ${isDark ? 'hover:bg-gray-800 text-gray-400 hover:text-white' : 'hover:bg-gray-100 text-gray-600 hover:text-black'} transition-colors`}>
          <Plus size={20} />
        </button>
        <button className={`p-2 rounded-lg ${isDark ? 'hover:bg-gray-800 text-gray-400 hover:text-white' : 'hover:bg-gray-100 text-gray-600 hover:text-black'} transition-colors`}>
          <Search size={20} />
        </button>
        <button className={`p-2 rounded-lg ${isDark ? 'hover:bg-gray-800 text-gray-400 hover:text-white' : 'hover:bg-gray-100 text-gray-600 hover:text-black'} transition-colors`}>
          <Home size={20} />
        </button>
        <button className={`p-2 rounded-lg ${isDark ? 'hover:bg-gray-800 text-gray-400 hover:text-white' : 'hover:bg-gray-100 text-gray-600 hover:text-black'} transition-colors`}>
          <MessageSquare size={20} />
        </button>
        <button className={`p-2 rounded-lg ${isDark ? 'hover:bg-gray-800 text-gray-400 hover:text-white' : 'hover:bg-gray-100 text-gray-600 hover:text-black'} transition-colors`}>
          <Clock size={20} />
        </button>
      </div>

      {/* Bottom Icons */}
      <div className="flex flex-col space-y-4">
        <button className={`p-2 rounded-lg ${isDark ? 'hover:bg-gray-800 text-gray-400 hover:text-white' : 'hover:bg-gray-100 text-gray-600 hover:text-black'} transition-colors`}>
          <Settings size={20} />
        </button>
        <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-pink-500 rounded-full flex items-center justify-center">
          <User size={16} className="text-white" />
        </div>
      </div>
    </div>
  );
}