import React from 'react';

export default function EventCard({ event, onEdit, onDelete, onIssuePass }) {
  const pct = Math.min(Math.round((event.registered / event.capacity) * 100), 100);
  const isHybrid = event.mode.includes("Virtual") || event.mode.includes("Hybrid");
  const isVip = event.accessLevel.includes("VIP");

  return (
    <div className="bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden group">
      <div className="relative aspect-[16/9] w-full bg-slate-100 overflow-hidden">
        <img src={event.image} alt={event.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
          <span className="px-2.5 py-1 rounded-lg text-[10px] font-mono font-bold tracking-wider uppercase border bg-white/90 shadow-sm text-blue-700">
            {event.category}
          </span>
          <span className={`px-2 py-0.5 rounded-md text-[10px] font-bold font-mono text-white ${isHybrid ? "bg-purple-600" : "bg-emerald-600"}`}>
            {event.mode}
          </span>
        </div>
      </div>
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className={`px-2 py-0.5 rounded text-[10px] font-semibold ${isVip ? "bg-amber-100 text-amber-800" : "bg-slate-100 text-slate-600"}`}>
              {event.accessLevel}
            </span>
            <span className="text-[11px] text-slate-400 font-mono">ID: {event.id}</span>
          </div>
          <h3 className="font-sans font-bold text-base text-slate-900 group-hover:text-blue-600 transition-colors">
            {event.title}
          </h3>
          <p className="text-xs text-slate-500 mt-2 line-clamp-2 leading-relaxed">{event.description}</p>
          <div className="mt-4 pt-3 border-t border-slate-100 space-y-1 text-xs text-slate-600">
            <div><i className="fa-regular fa-calendar text-blue-600 mr-2"></i>{event.date} • {event.time}</div>
            <div><i className="fa-solid fa-location-dot text-rose-500 mr-2"></i>{event.venue}</div>
          </div>
        </div>
        <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
          <button onClick={() => onIssuePass(event)} className="flex-1 py-2 px-3 rounded-xl bg-blue-50 text-blue-700 text-xs font-bold">
            <i className="fa-solid fa-qrcode mr-1.5"></i>Get Pass
          </button>
          <div className="flex items-center gap-1.5">
            <button onClick={() => onEdit(event)} title="Edit" className="w-8 h-8 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center text-xs">
              <i className="fa-solid fa-pen-to-square"></i>
            </button>
            <button onClick={() => onDelete(event)} title="Delete" className="w-8 h-8 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center text-xs">
              <i className="fa-solid fa-trash-can"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
