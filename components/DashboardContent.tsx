import React, { useState, useEffect } from 'react';
import { ArrowUpRight, ArrowDownRight, MoreHorizontal, Calendar, Wand2, ArrowRight } from 'lucide-react';
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import { Transaction } from '../types';
import { getDashboardInsight } from '../services/geminiService';

// Mock Data
const revenueData = [
  { month: 'Jan', income: 4000, expenses: 2400 },
  { month: 'Feb', income: 3000, expenses: 1398 },
  { month: 'Mar', income: 2000, expenses: 9800 },
  { month: 'Apr', income: 2780, expenses: 3908 },
  { month: 'May', income: 1890, expenses: 4800 },
  { month: 'Jun', income: 2390, expenses: 3800 },
  { month: 'Jul', income: 3490, expenses: 4300 },
];

const transactions: Transaction[] = [
  { id: '#TRX-001', productTitle: 'Premium Subscription', date: 'Oct 24, 2023', status: 'Completed', amount: '$120.00', iconBg: 'bg-green-100 text-green-600' },
  { id: '#TRX-002', productTitle: 'UI Kit Standard', date: 'Oct 23, 2023', status: 'Pending', amount: '$49.00', iconBg: 'bg-yellow-100 text-yellow-600' },
  { id: '#TRX-003', productTitle: 'Design System Pro', date: 'Oct 21, 2023', status: 'Completed', amount: '$299.00', iconBg: 'bg-purple-100 text-purple-600' },
  { id: '#TRX-004', productTitle: 'Maintenance Plan', date: 'Oct 19, 2023', status: 'Failed', amount: '$99.00', iconBg: 'bg-red-100 text-red-600' },
];

// Reusable Components inside Dashboard to avoid file clutter for this specific task
const KPICard = ({ title, amount, percentage, isPositive, colorClass }: any) => (
  <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between h-40">
    <div className="flex justify-between items-start">
      <span className="text-gray-500 font-medium text-sm">{title}</span>
      <button className="text-gray-400 hover:text-gray-600"><MoreHorizontal size={18} /></button>
    </div>
    <div>
      <h2 className="text-3xl font-bold text-gray-900 mb-2">{amount}</h2>
      <div className="flex items-center gap-2">
        <span className={`flex items-center text-xs font-bold px-2 py-1 rounded-full ${isPositive ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
          {isPositive ? <ArrowUpRight size={12} className="mr-1" /> : <ArrowDownRight size={12} className="mr-1" />}
          {percentage}
        </span>
        <span className="text-xs text-gray-400">vs last month</span>
      </div>
    </div>
  </div>
);

const SalesReportBar = ({ label, percentage, color }: { label: string, percentage: number, color: string }) => (
  <div className="mb-5 last:mb-0">
    <div className="flex justify-between text-sm font-medium mb-2">
      <span className="text-gray-600">{label}</span>
      <span className="text-gray-900">{percentage}%</span>
    </div>
    <div className="w-full bg-gray-100 rounded-full h-2.5">
      <div className={`h-2.5 rounded-full ${color}`} style={{ width: `${percentage}%` }}></div>
    </div>
  </div>
);

const DashboardContent: React.FC = () => {
  const [insight, setInsight] = useState<string>("");
  const [loadingInsight, setLoadingInsight] = useState(false);

  const generateInsight = async () => {
    setLoadingInsight(true);
    const context = "Sales revenue increased 40% in one week. Net income 193k, total return 32k.";
    const text = await getDashboardInsight(context);
    setInsight(text);
    setLoadingInsight(false);
  };

  return (
    <main className="flex-1 p-6 lg:p-10 pb-20 overflow-y-auto">
      
      {/* 3.1 Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-sm text-gray-500 mt-1">Welcome back, here's what's happening today.</p>
        </div>
        <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-xl px-4 py-2 text-sm font-medium text-gray-600 shadow-sm cursor-pointer hover:bg-gray-50">
          <Calendar size={16} className="text-gray-400" />
          <span>Oct 24 - Nov 24, 2023</span>
          <ArrowDownRight size={14} className="ml-2 text-gray-400" />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        
        {/* 3.2 Update Card with AI Interaction */}
        <div className="col-span-1 lg:col-span-3 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-6 text-white flex flex-col sm:flex-row sm:items-center justify-between shadow-lg relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -mt-20 -mr-20 pointer-events-none"></div>

            <div className="relative z-10">
                <div className="flex items-center gap-2 mb-2">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                    <span className="text-indigo-100 text-xs font-semibold uppercase tracking-wider">Latest Update</span>
                </div>
                <h2 className="text-2xl font-bold mb-2">Sales revenue increased 40% this week</h2>
                <p className="text-indigo-100 text-sm max-w-xl">
                   {insight || "Our new marketing campaign is performing exceptionally well across all channels."}
                </p>
            </div>
            
            <button 
                onClick={generateInsight}
                disabled={loadingInsight}
                className="mt-6 sm:mt-0 relative z-10 flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 px-5 py-3 rounded-xl transition-all font-medium text-sm whitespace-nowrap"
            >
                {loadingInsight ? (
                    <span className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full"></span>
                ) : (
                    <Wand2 size={16} />
                )}
                <span>{loadingInsight ? "Analyzing..." : "Generate AI Insight"}</span>
            </button>
        </div>

        {/* 3.3 KPI Cards */}
        <KPICard 
            title="Net Income" 
            amount="$193,000" 
            percentage="+35%" 
            isPositive={true} 
        />
        <KPICard 
            title="Total Return" 
            amount="$32,000" 
            percentage="-2.4%" 
            isPositive={false} 
        />
         <KPICard 
            title="Active Users" 
            amount="45.2k" 
            percentage="+12%" 
            isPositive={true} 
        />
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        
        {/* 3.5 Revenue Chart (Takes 2 columns on large screens) */}
        <div className="xl:col-span-2 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
            <div className="flex items-center justify-between mb-6">
                <h3 className="font-bold text-gray-900 text-lg">Revenue</h3>
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full bg-blue-500"></span>
                        <span className="text-xs text-gray-500 font-medium">Income</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full bg-blue-100"></span>
                        <span className="text-xs text-gray-500 font-medium">Expenses</span>
                    </div>
                </div>
            </div>
            <div className="h-72 w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={revenueData} barSize={12} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F3F4F6" />
                        <XAxis 
                            dataKey="month" 
                            axisLine={false} 
                            tickLine={false} 
                            tick={{ fill: '#9CA3AF', fontSize: 12 }} 
                            dy={10}
                        />
                        <Tooltip 
                            cursor={{ fill: 'transparent' }}
                            contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                        />
                        <Bar dataKey="income" fill="#3B82F6" radius={[4, 4, 0, 0]} />
                        <Bar dataKey="expenses" fill="#DBEAFE" radius={[4, 4, 0, 0]} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>

        {/* 3.6 Sales Report */}
        <div className="xl:col-span-1 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-center">
            <div className="flex items-center justify-between mb-8">
                <h3 className="font-bold text-gray-900 text-lg">Sales Report</h3>
                <button className="text-blue-600 text-xs font-bold hover:underline">View All</button>
            </div>
            <div className="space-y-6">
                <SalesReportBar label="Product Launched" percentage={65} color="bg-blue-600" />
                <SalesReportBar label="Ongoing Product" percentage={40} color="bg-cyan-400" />
                <SalesReportBar label="Product Sold" percentage={82} color="bg-indigo-500" />
            </div>
            <div className="mt-8 pt-6 border-t border-gray-100">
                <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Total Sales</span>
                    <span className="font-bold text-gray-900">$2.4M</span>
                </div>
            </div>
        </div>

        {/* 3.4 Transaction List (Full Width) */}
        <div className="xl:col-span-3 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
            <div className="flex items-center justify-between mb-6">
                <h3 className="font-bold text-gray-900 text-lg">Transactions</h3>
                <button className="flex items-center text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors">
                    See All <ArrowRight size={16} className="ml-1" />
                </button>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full">
                    <thead>
                        <tr className="text-left text-xs font-semibold text-gray-400 uppercase tracking-wider border-b border-gray-100">
                            <th className="pb-4 pl-4">Transaction ID</th>
                            <th className="pb-4">Product Name</th>
                            <th className="pb-4">Date</th>
                            <th className="pb-4">Amount</th>
                            <th className="pb-4">Status</th>
                            <th className="pb-4"></th>
                        </tr>
                    </thead>
                    <tbody className="text-sm">
                        {transactions.map((trx, idx) => (
                            <tr key={idx} className="group hover:bg-gray-50 transition-colors">
                                <td className="py-4 pl-4 font-medium text-gray-500">{trx.id}</td>
                                <td className="py-4 font-semibold text-gray-900">{trx.productTitle}</td>
                                <td className="py-4 text-gray-500">{trx.date}</td>
                                <td className="py-4 font-bold text-gray-900">{trx.amount}</td>
                                <td className="py-4">
                                    <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${
                                        trx.status === 'Completed' ? 'bg-green-100 text-green-700' :
                                        trx.status === 'Pending' ? 'bg-yellow-100 text-yellow-700' :
                                        'bg-red-100 text-red-700'
                                    }`}>
                                        {trx.status}
                                    </span>
                                </td>
                                <td className="py-4 text-right pr-4">
                                    <button className="text-gray-400 hover:text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <MoreHorizontal size={18} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>

      </div>
    </main>
  );
};

export default DashboardContent;