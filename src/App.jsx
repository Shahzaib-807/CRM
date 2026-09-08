import React, { useState } from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Users, 
  BarChart3, 
  History, 
  Sliders, 
  Settings, 
  Search, 
  Bell, 
  Moon, 
  Sun,
  Calendar, 
  Download, 
  Upload, 
  Plus, 
  Flame,
  ArrowUpRight,
  ArrowDownRight,
  HardDrive,
  Trash2,
  X,
  FileText,
  Clock,
  Shield,
  UserCheck,
  Activity
} from 'lucide-react';

/* ==========================================================================
   1. MAIN LAYOUT WITH LIGHT/DARK TOGGLE
   ========================================================================== */
function MainLayout({ children, customerCount, theme, toggleTheme }) {
  const isDark = theme === 'dark';

  const navItems = [
    { name: 'Dashboard', path: '/', icon: LayoutDashboard },
    { name: 'Customers', path: '/customers', icon: Users, badge: customerCount },
    { name: 'Reports', path: '/reports', icon: BarChart3 },
    { name: 'Activity Log', path: '/activity', icon: History },
  ];

  const workspaceItems = [
    { name: 'Preferences', path: '/preferences', icon: Sliders },
    { name: 'Settings', path: '/settings', icon: Settings },
  ];

  return (
    <div className={`flex min-h-screen transition-colors duration-300 ${
      isDark ? 'bg-[#0d0b0e] text-gray-200' : 'bg-gray-100 text-gray-800'
    }`}>
      
      {/* SIDEBAR */}
      <aside className={`w-64 border-r p-4 flex flex-col justify-between shrink-0 transition-colors duration-300 ${
        isDark ? 'bg-[#141015] border-rose-950/30' : 'bg-white border-gray-200 shadow-sm'
      }`}>
        <div>
          {/* Logo */}
          <div className="flex items-center gap-3 px-2 py-3 mb-6">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-rose-600 to-pink-500 flex items-center justify-center shadow-lg shadow-rose-500/30">
              <Flame className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className={`font-semibold text-sm tracking-wide ${isDark ? 'text-white' : 'text-gray-900'}`}>
                CRM Dashboard
              </h1>
              <p className={`text-xs ${isDark ? 'text-rose-300/60' : 'text-rose-600/70'}`}>
                Customer workspace
              </p>
            </div>
          </div>

          {/* Role Tag */}
          <div className={`flex items-center gap-2 px-3 py-1.5 mb-6 text-xs rounded-full w-fit border ${
            isDark 
              ? 'text-rose-400 bg-rose-950/30 border-rose-800/30' 
              : 'text-rose-700 bg-rose-50 border-rose-200'
          }`}>
            <span className="w-1.5 h-1.5 rounded-full bg-rose-500"></span>
            Manager
          </div>

          {/* Navigation Links */}
          <nav className="space-y-1">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center justify-between px-3 py-2.5 rounded-xl text-sm transition font-medium ${
                    isActive
                      ? isDark
                        ? 'bg-gradient-to-r from-rose-900/40 to-transparent border border-rose-700/30 text-white'
                        : 'bg-rose-50 border border-rose-200 text-rose-700 shadow-xs'
                      : isDark
                        ? 'text-gray-400 hover:text-white hover:bg-rose-950/20'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <div className="flex items-center gap-3">
                      <item.icon className={`w-4 h-4 ${
                        isActive 
                          ? 'text-rose-500' 
                          : isDark ? 'text-gray-400' : 'text-gray-500'
                      }`} />
                      {item.name}
                    </div>
                    {item.badge !== undefined && (
                      <span className={`text-xs px-1.5 py-0.5 rounded border ${
                        isDark 
                          ? 'bg-rose-950/50 text-rose-300 border-rose-900/30' 
                          : 'bg-rose-100 text-rose-700 border-rose-200'
                      }`}>
                        {item.badge}
                      </span>
                    )}
                  </>
                )}
              </NavLink>
            ))}

            <div className="pt-6 pb-2 px-3 text-[11px] font-semibold text-gray-400 uppercase tracking-wider">
              Workspace
            </div>

            {workspaceItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition font-medium ${
                    isActive
                      ? isDark
                        ? 'bg-gradient-to-r from-rose-900/40 to-transparent border border-rose-700/30 text-white'
                        : 'bg-rose-50 border border-rose-200 text-rose-700 shadow-xs'
                      : isDark
                        ? 'text-gray-400 hover:text-white hover:bg-rose-950/20'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <item.icon className={`w-4 h-4 ${
                      isActive 
                        ? 'text-rose-500' 
                        : isDark ? 'text-gray-400' : 'text-gray-500'
                    }`} />
                    {item.name}
                  </>
                )}
              </NavLink>
            ))}
          </nav>
        </div>

        {/* Local Storage Indicator */}
        <div className={`p-3 rounded-xl border text-xs ${
          isDark 
            ? 'bg-gradient-to-b from-rose-950/20 to-black/40 border-rose-900/20' 
            : 'bg-gray-50 border-gray-200'
        }`}>
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              <span className={`font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Local Storage</span>
            </div>
            <HardDrive className="w-3.5 h-3.5 text-gray-400" />
          </div>
          <div className="space-y-1 text-[11px]">
            <div className="flex justify-between text-gray-400"><span>Persistence</span><span className={isDark ? 'text-gray-300' : 'text-gray-700'}>Browser storage</span></div>
            <div className="flex justify-between text-gray-400"><span>Data saved</span><span className={isDark ? 'text-gray-300' : 'text-gray-700'}>Automatically</span></div>
            <div className="flex justify-between text-gray-400"><span>Last saved</span><span className="italic">just now</span></div>
          </div>
        </div>
      </aside>

      {/* MAIN CONTENT AREA */}
      <main className="flex-1 flex flex-col p-6 space-y-6 overflow-y-auto">
        {/* Top Header */}
        <header className="flex items-center justify-between gap-4">
          <div className="relative flex-1 max-w-xl">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search customers, emails, or workspace..." 
              className={`w-full border rounded-xl pl-10 pr-4 py-2 text-sm transition focus:outline-none ${
                isDark 
                  ? 'bg-[#141015] border-rose-950/40 text-gray-200 placeholder-gray-500 focus:border-rose-600/50' 
                  : 'bg-white border-gray-200 text-gray-800 placeholder-gray-400 focus:border-rose-500 shadow-xs'
              }`}
            />
          </div>

          <div className="flex items-center gap-3">
            {/* LIGHT/DARK TOGGLE BUTTON */}
            <button 
              onClick={toggleTheme} 
              title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
              className={`p-2.5 rounded-xl border transition flex items-center justify-center ${
                isDark 
                  ? 'bg-[#141015] border-rose-950/40 text-rose-400 hover:text-white hover:bg-rose-950/30' 
                  : 'bg-white border-gray-200 text-rose-600 hover:bg-rose-50 shadow-xs'
              }`}
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            <button className={`p-2.5 rounded-xl border transition ${
              isDark 
                ? 'bg-[#141015] border-rose-950/40 text-gray-400 hover:text-white' 
                : 'bg-white border-gray-200 text-gray-500 hover:bg-gray-50 shadow-xs'
            }`}>
              <Bell className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-3 pl-2">
              <div className="w-8 h-8 rounded-full bg-rose-600 text-white font-semibold text-xs flex items-center justify-center border border-rose-400/30">
                IQ
              </div>
              <div>
                <p className={`text-sm font-medium leading-none ${isDark ? 'text-white' : 'text-gray-900'}`}>Imran Qureshi</p>
                <p className="text-xs text-gray-400 mt-1">Manager</p>
              </div>
            </div>
          </div>
        </header>

        {children}
      </main>
    </div>
  );
}

/* ==========================================================================
   2. DASHBOARD PAGE
   ========================================================================== */
function DashboardPage({ customers, onDeleteCustomer, onOpenModal, isDark }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  const filteredCustomers = customers.filter(c => {
    const matchesSearch = 
      c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "All" || c.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const stats = [
    { title: "Total Customers", value: customers.length, change: "+12%", positive: true },
    { title: "Active Customers", value: customers.filter(c => c.status === "Active").length, change: "+8%", positive: true },
    { title: "New Customers", value: "10", change: "+20%", positive: true },
    { title: "Pending Follow ups", value: customers.filter(c => c.status === "Pending").length, change: "-4%", positive: false },
  ];

  return (
    <div className="space-y-6">
      <section className={`p-6 rounded-2xl border flex justify-between items-center transition ${
        isDark 
          ? 'bg-gradient-to-r from-[#1c1218] via-[#150e14] to-[#141015] border-rose-900/20' 
          : 'bg-white border-gray-200 shadow-sm'
      }`}>
        <div className="space-y-1">
          <h2 className={`text-2xl font-bold tracking-tight ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Welcome back, Imran
          </h2>
          <p className="text-sm text-gray-400">Here's how the team's customer base is trending.</p>
        </div>
        <div className={`flex items-center gap-2 text-xs px-3 py-1.5 rounded-lg border ${
          isDark 
            ? 'text-gray-400 bg-[#0d0b0e]/60 border-rose-950/40' 
            : 'text-gray-600 bg-gray-50 border-gray-200'
        }`}>
          <Calendar className="w-3.5 h-3.5 text-rose-500" />
          Tuesday, September 8, 2026
        </div>
      </section>

      {/* METRICS */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, idx) => (
          <div key={idx} className={`p-4 rounded-xl border space-y-3 ${
            isDark 
              ? 'bg-[#141015] border-rose-950/30' 
              : 'bg-white border-gray-200 shadow-xs'
          }`}>
            <div className="flex justify-between items-start">
              <span className="text-xs text-gray-400 font-medium">{stat.title}</span>
              <span className={`text-xs px-2 py-0.5 rounded-full flex items-center gap-1 ${
                stat.positive 
                  ? 'bg-emerald-500/10 text-emerald-500 border border-emerald-500/20' 
                  : 'bg-rose-500/10 text-rose-500 border border-rose-500/20'
              }`}>
                {stat.positive ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                {stat.change}
              </span>
            </div>
            <div className={`text-2xl font-bold tracking-tight ${isDark ? 'text-white' : 'text-gray-900'}`}>
              {stat.value}
            </div>
          </div>
        ))}
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* TABLE */}
        <div className={`lg:col-span-2 p-5 rounded-2xl border space-y-4 ${
          isDark ? 'bg-[#141015] border-rose-950/30' : 'bg-white border-gray-200 shadow-xs'
        }`}>
          <div className="flex flex-wrap justify-between items-center gap-4">
            <div>
              <h3 className={`font-semibold text-base ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Recent Customers
              </h3>
              <p className="text-xs text-gray-400">{filteredCustomers.length} of {customers.length} shown</p>
            </div>
            <div className="flex items-center gap-2">
              <button className={`flex items-center gap-1.5 px-3 py-1.5 text-xs rounded-lg border transition ${
                isDark 
                  ? 'text-gray-300 bg-[#1c141a] hover:bg-rose-950/40 border-rose-900/30' 
                  : 'text-gray-700 bg-gray-50 hover:bg-gray-100 border-gray-200'
              }`}>
                <Download className="w-3.5 h-3.5" /> Export
              </button>
              <button className={`flex items-center gap-1.5 px-3 py-1.5 text-xs rounded-lg border transition ${
                isDark 
                  ? 'text-gray-300 bg-[#1c141a] hover:bg-rose-950/40 border-rose-900/30' 
                  : 'text-gray-700 bg-gray-50 hover:bg-gray-100 border-gray-200'
              }`}>
                <Upload className="w-3.5 h-3.5" /> Import
              </button>
              <button onClick={onOpenModal} className="flex items-center gap-1.5 px-3 py-1.5 text-xs text-white bg-gradient-to-r from-rose-600 to-pink-600 hover:opacity-90 rounded-lg font-medium shadow-md shadow-rose-900/30 transition">
                <Plus className="w-3.5 h-3.5" /> Add Customer
              </button>
            </div>
          </div>

          <div className="flex justify-between items-center pt-2">
            <div className="relative w-48">
              <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input 
                type="text" 
                placeholder="Search table..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className={`w-full border rounded-lg pl-8 pr-3 py-1.5 text-xs focus:outline-none ${
                  isDark 
                    ? 'bg-[#0d0b0e] border-rose-950/40 text-gray-200' 
                    : 'bg-gray-50 border-gray-200 text-gray-800'
                }`}
              />
            </div>
            <select 
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className={`border text-xs rounded-lg px-3 py-1.5 focus:outline-none ${
                isDark 
                  ? 'bg-[#0d0b0e] border-rose-950/40 text-gray-300' 
                  : 'bg-gray-50 border-gray-200 text-gray-700'
              }`}
            >
              <option value="All">All Status</option>
              <option value="Active">Active</option>
              <option value="Pending">Pending</option>
            </select>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className={`border-b ${isDark ? 'border-rose-950/40 text-gray-400' : 'border-gray-200 text-gray-500'}`}>
                  <th className="py-2.5 px-2">Customer</th>
                  <th className="py-2.5 px-2">Company</th>
                  <th className="py-2.5 px-2">Email</th>
                  <th className="py-2.5 px-2">Phone</th>
                  <th className="py-2.5 px-2">Status</th>
                  <th className="py-2.5 px-2 text-right">Action</th>
                </tr>
              </thead>
              <tbody className={`divide-y ${isDark ? 'divide-rose-950/20 text-gray-300' : 'divide-gray-100 text-gray-700'}`}>
                {filteredCustomers.map((c) => (
                  <tr key={c.id} className={isDark ? 'hover:bg-rose-950/10' : 'hover:bg-gray-50'}>
                    <td className="py-3 px-2 flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-full bg-rose-600 text-white font-semibold text-[10px] flex items-center justify-center">
                        {c.name.slice(0, 2).toUpperCase()}
                      </div>
                      <span className={`font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>{c.name}</span>
                    </td>
                    <td className="py-3 px-2 text-gray-400">{c.company}</td>
                    <td className="py-3 px-2 text-gray-400">{c.email}</td>
                    <td className="py-3 px-2 text-gray-400">{c.phone}</td>
                    <td className="py-3 px-2">
                      <span className={`px-2 py-0.5 rounded-md text-[11px] border ${
                        c.status === "Active" 
                          ? "bg-emerald-500/10 text-emerald-500 border-emerald-500/20" 
                          : "bg-amber-500/10 text-amber-500 border-amber-500/20"
                      }`}>
                        {c.status}
                      </span>
                    </td>
                    <td className="py-3 px-2 text-right">
                      <button onClick={() => onDeleteCustomer(c.id)} className="text-gray-400 hover:text-rose-500 p-1">
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* SPARKLINE CHART */}
        <div className={`p-5 rounded-2xl border flex flex-col justify-between ${
          isDark ? 'bg-[#141015] border-rose-950/30' : 'bg-white border-gray-200 shadow-xs'
        }`}>
          <div>
            <p className="text-xs text-gray-400">New signups, last 7 days</p>
            <div className="flex items-baseline gap-2 mt-2">
              <span className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>+10</span>
              <span className="text-xs text-emerald-500 flex items-center font-medium">
                <ArrowUpRight className="w-3 h-3" /> +20%
              </span>
            </div>
          </div>
          <div className="relative mt-8 h-32 w-full flex items-end">
            <svg className="w-full h-full overflow-visible" viewBox="0 0 300 100" fill="none">
              <defs>
                <linearGradient id="gradientWave" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#e11d48" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#e11d48" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path d="M0,80 Q 75,90 150,50 T 300,70 L 300,100 L 0,100 Z" fill="url(#gradientWave)" />
              <path d="M0,80 Q 75,90 150,50 T 300,70" stroke="#f43f5e" strokeWidth="3" fill="none" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ==========================================================================
   3. CUSTOMERS PAGE
   ========================================================================== */
function CustomersPage({ customers, onDeleteCustomer, onOpenModal, isDark }) {
  const [filter, setFilter] = useState('');

  const list = customers.filter(c => 
    c.name.toLowerCase().includes(filter.toLowerCase()) || 
    c.company.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className={`p-6 rounded-2xl border flex justify-between items-center ${
        isDark ? 'bg-[#141015] border-rose-950/30' : 'bg-white border-gray-200 shadow-xs'
      }`}>
        <div>
          <h2 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>All Customers Management</h2>
          <p className="text-xs text-gray-400 mt-1">Manage and view details for all registered leads and accounts.</p>
        </div>
        <button onClick={onOpenModal} className="flex items-center gap-1.5 px-4 py-2 text-xs text-white bg-gradient-to-r from-rose-600 to-pink-600 rounded-xl font-medium shadow-md shadow-rose-900/30">
          <Plus className="w-4 h-4" /> Add New Customer
        </button>
      </div>

      <div className={`p-5 rounded-2xl border space-y-4 ${
        isDark ? 'bg-[#141015] border-rose-950/30' : 'bg-white border-gray-200 shadow-xs'
      }`}>
        <div className="flex justify-between items-center">
          <input 
            type="text" 
            placeholder="Filter customers..." 
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className={`border rounded-xl px-4 py-2 text-xs w-64 focus:outline-none ${
              isDark ? 'bg-[#0d0b0e] border-rose-950/40 text-white' : 'bg-gray-50 border-gray-200 text-gray-800'
            }`}
          />
          <span className="text-xs text-gray-400">Total Records: {list.length}</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {list.map(c => (
            <div key={c.id} className={`p-4 rounded-xl border space-y-3 relative ${
              isDark ? 'bg-[#0d0b0e] border-rose-950/30' : 'bg-gray-50 border-gray-200'
            }`}>
              <button 
                onClick={() => onDeleteCustomer(c.id)}
                className="absolute top-3 right-3 text-gray-400 hover:text-rose-500 transition"
              >
                <Trash2 className="w-4 h-4" />
              </button>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-rose-600/30 text-rose-500 border border-rose-500/30 flex items-center justify-center font-bold text-sm">
                  {c.name.slice(0, 2).toUpperCase()}
                </div>
                <div>
                  <h4 className={`text-sm font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>{c.name}</h4>
                  <p className="text-xs text-gray-400">{c.company}</p>
                </div>
              </div>
              <div className="text-xs text-gray-400 space-y-1 pt-2 border-t border-gray-200/20">
                <p>📧 {c.email}</p>
                <p>📞 {c.phone}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ==========================================================================
   4. OTHER PAGES (Reports, Activity, Preferences, Settings)
   ========================================================================== */
function ReportsPage({ isDark }) {
  return (
    <div className="space-y-6">
      <div className={`p-6 rounded-2xl border ${isDark ? 'bg-[#141015] border-rose-950/30' : 'bg-white border-gray-200'}`}>
        <h2 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>Analytics & Reports</h2>
        <p className="text-xs text-gray-400 mt-1">Export summary reports and track performance analytics.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className={`p-5 rounded-2xl border space-y-2 ${isDark ? 'bg-[#141015] border-rose-950/30' : 'bg-white border-gray-200'}`}>
          <FileText className="w-6 h-6 text-rose-500" />
          <h3 className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>Monthly Revenue Report</h3>
          <p className="text-xs text-gray-400">Total generated revenue breakdown across all active users.</p>
        </div>
        <div className={`p-5 rounded-2xl border space-y-2 ${isDark ? 'bg-[#141015] border-rose-950/30' : 'bg-white border-gray-200'}`}>
          <UserCheck className="w-6 h-6 text-rose-500" />
          <h3 className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>Customer Acquisition</h3>
          <p className="text-xs text-gray-400">Detailed growth breakdown for new team leads and clients.</p>
        </div>
        <div className={`p-5 rounded-2xl border space-y-2 ${isDark ? 'bg-[#141015] border-rose-950/30' : 'bg-white border-gray-200'}`}>
          <Activity className="w-6 h-6 text-rose-500" />
          <h3 className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>Conversion Rate</h3>
          <p className="text-xs text-gray-400">Ratio of pending to active customer follow ups.</p>
        </div>
      </div>
    </div>
  );
}

function ActivityLogPage({ isDark }) {
  return (
    <div className="space-y-6">
      <div className={`p-6 rounded-2xl border ${isDark ? 'bg-[#141015] border-rose-950/30' : 'bg-white border-gray-200'}`}>
        <h2 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>Activity Log</h2>
        <p className="text-xs text-gray-400 mt-1">Audit log of all actions taken inside your CRM workspace.</p>
      </div>
    </div>
  );
}

function PreferencesPage({ isDark }) {
  return (
    <div className="space-y-6">
      <div className={`p-6 rounded-2xl border ${isDark ? 'bg-[#141015] border-rose-950/30' : 'bg-white border-gray-200'}`}>
        <h2 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>Preferences</h2>
        <p className="text-xs text-gray-400 mt-1">Configure interface and workspace options.</p>
      </div>
    </div>
  );
}

function SettingsPage({ isDark }) {
  return (
    <div className="space-y-6">
      <div className={`p-6 rounded-2xl border ${isDark ? 'bg-[#141015] border-rose-950/30' : 'bg-white border-gray-200'}`}>
        <h2 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>Account Settings</h2>
        <p className="text-xs text-gray-400 mt-1">Manage profile credentials, roles, and platform settings.</p>
      </div>
    </div>
  );
}

/* ==========================================================================
   5. MAIN APP COMPONENT
   ========================================================================== */
export default function App() {
  const [theme, setTheme] = useState('dark');
  const isDark = theme === 'dark';

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  const [customers, setCustomers] = useState([
    { id: 1, name: "Sarah Malik", company: "Northbridge", email: "sarah.malik@northbridge.com", phone: "+1 (415) 892-0192", status: "Active" },
    { id: 2, name: "Ali Raza", company: "TechSolutions", email: "ali.raza@techsol.com", phone: "+92 (300) 123-4567", status: "Active" },
    { id: 3, name: "Zainab Ahmed", company: "Creative Minds", email: "zainab@creative.io", phone: "+1 (212) 555-0143", status: "Pending" },
    { id: 4, name: "Usman Ghani", company: "Global Systems", email: "usman@globalsys.com", phone: "+44 (20) 7946-0912", status: "Active" },
    { id: 5, name: "Fatima Noor", company: "Apex Corp", email: "fatima@apex.org", phone: "+92 (321) 987-6543", status: "Pending" }
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newCustomer, setNewCustomer] = useState({ name: "", company: "", email: "", phone: "", status: "Active" });

  const handleAddCustomer = (e) => {
    e.preventDefault();
    if (!newCustomer.name || !newCustomer.email) return;

    setCustomers([{ id: Date.now(), ...newCustomer }, ...customers]);
    setNewCustomer({ name: "", company: "", email: "", phone: "", status: "Active" });
    setIsModalOpen(false);
  };

  const handleDeleteCustomer = (id) => {
    setCustomers(customers.filter(c => c.id !== id));
  };

  return (
    <MainLayout customerCount={customers.length} theme={theme} toggleTheme={toggleTheme}>
      <Routes>
        <Route 
          path="/" 
          element={
            <DashboardPage 
              customers={customers} 
              onDeleteCustomer={handleDeleteCustomer} 
              onOpenModal={() => setIsModalOpen(true)} 
              isDark={isDark}
            />
          } 
        />
        <Route 
          path="/customers" 
          element={
            <CustomersPage 
              customers={customers} 
              onDeleteCustomer={handleDeleteCustomer} 
              onOpenModal={() => setIsModalOpen(true)} 
              isDark={isDark}
            />
          } 
        />
        <Route path="/reports" element={<ReportsPage isDark={isDark} />} />
        <Route path="/activity" element={<ActivityLogPage isDark={isDark} />} />
        <Route path="/preferences" element={<PreferencesPage isDark={isDark} />} />
        <Route path="/settings" element={<SettingsPage isDark={isDark} />} />
      </Routes>

      {/* ADD CUSTOMER MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-xs flex items-center justify-center z-50 p-4">
          <div className={`border w-full max-w-md rounded-2xl p-6 shadow-2xl relative ${
            isDark ? 'bg-[#141015] border-rose-900/40' : 'bg-white border-gray-200'
          }`}>
            <button onClick={() => setIsModalOpen(false)} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
              <X className="w-5 h-5" />
            </button>
            <h3 className={`text-lg font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Add New Customer</h3>
            <form onSubmit={handleAddCustomer} className="space-y-4">
              <div>
                <label className="text-xs text-gray-400 mb-1 block">Full Name</label>
                <input 
                  type="text" required placeholder="e.g. Hassan Khan"
                  value={newCustomer.name}
                  onChange={(e) => setNewCustomer({...newCustomer, name: e.target.value})}
                  className={`w-full border rounded-xl px-3 py-2 text-xs focus:outline-none ${
                    isDark ? 'bg-[#0d0b0e] border-rose-950/40 text-gray-200' : 'bg-gray-50 border-gray-200 text-gray-800'
                  }`}
                />
              </div>
              <div>
                <label className="text-xs text-gray-400 mb-1 block">Company</label>
                <input 
                  type="text" placeholder="e.g. Apex Corp"
                  value={newCustomer.company}
                  onChange={(e) => setNewCustomer({...newCustomer, company: e.target.value})}
                  className={`w-full border rounded-xl px-3 py-2 text-xs focus:outline-none ${
                    isDark ? 'bg-[#0d0b0e] border-rose-950/40 text-gray-200' : 'bg-gray-50 border-gray-200 text-gray-800'
                  }`}
                />
              </div>
              <div>
                <label className="text-xs text-gray-400 mb-1 block">Email Address</label>
                <input 
                  type="email" required placeholder="hassan@example.com"
                  value={newCustomer.email}
                  onChange={(e) => setNewCustomer({...newCustomer, email: e.target.value})}
                  className={`w-full border rounded-xl px-3 py-2 text-xs focus:outline-none ${
                    isDark ? 'bg-[#0d0b0e] border-rose-950/40 text-gray-200' : 'bg-gray-50 border-gray-200 text-gray-800'
                  }`}
                />
              </div>
              <div>
                <label className="text-xs text-gray-400 mb-1 block">Phone</label>
                <input 
                  type="text" placeholder="+92 (300) 000-0000"
                  value={newCustomer.phone}
                  onChange={(e) => setNewCustomer({...newCustomer, phone: e.target.value})}
                  className={`w-full border rounded-xl px-3 py-2 text-xs focus:outline-none ${
                    isDark ? 'bg-[#0d0b0e] border-rose-950/40 text-gray-200' : 'bg-gray-50 border-gray-200 text-gray-800'
                  }`}
                />
              </div>
              <div>
                <label className="text-xs text-gray-400 mb-1 block">Status</label>
                <select 
                  value={newCustomer.status}
                  onChange={(e) => setNewCustomer({...newCustomer, status: e.target.value})}
                  className={`w-full border rounded-xl px-3 py-2 text-xs focus:outline-none ${
                    isDark ? 'bg-[#0d0b0e] border-rose-950/40 text-gray-200' : 'bg-gray-50 border-gray-200 text-gray-800'
                  }`}
                >
                  <option value="Active">Active</option>
                  <option value="Pending">Pending</option>
                </select>
              </div>
              <div className="flex justify-end gap-3 pt-3">
                <button type="button" onClick={() => setIsModalOpen(false)} className="px-4 py-2 text-xs text-gray-400 hover:text-gray-600">
                  Cancel
                </button>
                <button type="submit" className="px-4 py-2 text-xs text-white bg-gradient-to-r from-rose-600 to-pink-600 rounded-xl font-medium shadow-md shadow-rose-900/30">
                  Save Customer
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </MainLayout>
  );
}