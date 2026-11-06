import React, { useMemo } from 'react';

export default function StatsBar({ events }) {
  const stats = useMemo(() => {
    const total = events.length;
    const attendees = events.reduce((sum, ev) => sum + (Number(ev.registered) || 0), 0);
    const categories = new Set(events.map(ev => ev.category)).size;
    const totalCap = events.reduce((sum, ev) => sum + (Number(ev.capacity) || 0), 0);
    return { total, attendees, categories, totalCap };
  }, [events]);

  return (
    <section className="mb-8 grid grid-cols-2 lg:grid-cols-4 gap-4">
      <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-between">
        <div>
          <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 font-mono">Total Records</p>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-0.5">{stats.total}</h3>
          <span className="text-[11px] text-emerald-600 font-medium">LocalStorage Synced</span>
        </div>
        <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center text-xl">
          <i className="fa-solid fa-calendar-check"></i>
        </div>
      </div>
      <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-between">
        <div>
          <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 font-mono">Total RSVPs</p>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-blue-600 mt-0.5">{stats.attendees.toLocaleString()}</h3>
          <span className="text-[11px] text-slate-500 font-medium">Registered Students</span>
        </div>
        <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center text-xl">
          <i className="fa-solid fa-users"></i>
        </div>
      </div>
      <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-between">
        <div>
          <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 font-mono">Categories</p>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-0.5">{stats.categories}</h3>
          <span className="text-[11px] text-slate-500 font-medium">Tech, Arts, Sports, Biz</span>
        </div>
        <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center text-xl">
          <i className="fa-solid fa-tags"></i>
        </div>
      </div>
      <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-between">
        <div>
          <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 font-mono">Seat Capacity</p>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-0.5">{stats.totalCap.toLocaleString()}</h3>
          <span className="text-[11px] text-slate-500 font-medium">Across All Venues</span>
        </div>
        <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center text-xl">
          <i className="fa-solid fa-chair"></i>
        </div>
      </div>
    </section>
  );
}
