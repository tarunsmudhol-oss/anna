import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { ArrowRight, Star } from 'lucide-react';

const data = [
  { name: 'Group A', value: 68, color: '#3B82F6' }, // Blue
  { name: 'Group B', value: 23, color: '#93C5FD' }, // Light Blue
  { name: 'Group C', value: 16, color: '#EFF6FF' }, // Lighter Blue
];

const RightSidebar: React.FC = () => {
  return (
    <aside className="w-80 bg-white border-l border-gray-200 hidden xl:flex flex-col p-6 gap-8 fixed right-0 top-20 h-[calc(100vh-80px)] overflow-y-auto">
      
      {/* Performance Card */}
      <div className="flex flex-col gap-4">
        <h3 className="text-lg font-bold text-gray-900">Total View Performance</h3>
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 flex flex-col items-center">
          <div className="h-48 w-full relative">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  fill="#8884d8"
                  paddingAngle={5}
                  dataKey="value"
                  stroke="none"
                  cornerRadius={10}
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            {/* Center Label */}
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
              <span className="text-3xl font-bold text-gray-900">565K</span>
              <span className="text-xs text-gray-400 font-medium uppercase tracking-wide">Views</span>
            </div>
          </div>
          
          <p className="text-center text-gray-500 text-sm mt-2 mb-4">
            Here are some tips on how to improve your score.
          </p>
          
          <button className="w-full py-2.5 border border-gray-200 rounded-xl text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors">
            Guide Views
          </button>
        </div>
      </div>

      {/* Upgrade Promo Card */}
      <div className="mt-auto bg-gradient-to-b from-blue-600 to-blue-700 rounded-3xl p-6 text-white text-center relative overflow-hidden">
        {/* Decorative Circles */}
        <div className="absolute top-0 right-0 -mr-8 -mt-8 w-24 h-24 rounded-full bg-white opacity-10"></div>
        <div className="absolute bottom-0 left-0 -ml-8 -mb-8 w-32 h-32 rounded-full bg-white opacity-10"></div>

        <div className="relative z-10 flex flex-col items-center">
            <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-4">
                <Star className="text-white fill-white" size={20} />
            </div>
            <h3 className="text-xl font-bold mb-2">Pro Edition</h3>
            <p className="text-blue-100 text-sm mb-6 leading-relaxed">
            Get 100+ premium features and 24/7 priority support.
            </p>
            <button className="w-full bg-white text-blue-600 py-3 rounded-xl text-sm font-bold shadow-md hover:shadow-lg transition-all active:scale-95">
            Update to Smartargi+
            </button>
        </div>
      </div>

    </aside>
  );
};

export default RightSidebar;