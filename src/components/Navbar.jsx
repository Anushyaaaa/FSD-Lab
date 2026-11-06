import React from 'react';

export default function Navbar({ searchQuery, setSearchQuery, onOpenCreate, onResetData }) {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-md">
              <i className="fa-brands fa-react text-xl"></i>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-sans font-extrabold text-xl tracking-tight text-slate-900">CampusVibe</span>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold tracking-wide uppercase bg-blue-50 text-blue-700 border border-blue-200">
                  React CRUD • Lab 5
                </span>
              </div>
              <p className="text-[11px] font-medium text-slate-500">Christ University Event Registry</p>
            </div>
          </div>

          <div className="hidden md:flex items-center flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                <i className="fa-solid fa-magnifying-glass text-xs"></i>
              </span>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search events by title, venue, or guild (⌘K)..."
                className="w-full pl-10 pr-10 py-2 rounded-xl bg-slate-100 border border-slate-200 text-xs focus:ring-2 focus:ring-blue-500 focus:bg-white"
              />
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onResetData}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-100 border border-slate-200"
            >
              <i className="fa-solid fa-rotate-left text-[11px]"></i>
              <span>Reset DB</span>
            </button>
            <button
              onClick={onOpenCreate}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-blue-600 hover:bg-blue-700 shadow-md"
            >
              <i className="fa-solid fa-plus"></i>
              <span>Add New Event</span>
            </button>
          </div>

        </div>
      </div>
    </header>
  );
}
