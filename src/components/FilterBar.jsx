import React from 'react';

export default function FilterBar({ selectedCategory, setSelectedCategory, modeFilter, setModeFilter, visibleCount, totalCount }) {
  const categories = ["All", "Technical", "Cultural", "Sports", "Management"];
  return (
    <div className="mb-6 bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
              selectedCategory === cat ? "bg-blue-600 text-white shadow-sm" : "bg-slate-100 text-slate-600 hover:bg-slate-200"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
      <div className="flex items-center justify-between md:justify-end gap-3 w-full md:w-auto">
        <select
          value={modeFilter}
          onChange={(e) => setModeFilter(e.target.value)}
          className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-slate-100 border border-slate-200 text-slate-700"
        >
          <option value="All">All Attendance Modes</option>
          <option value="In-Person">In-Person Only</option>
          <option value="Hybrid / Virtual">Hybrid / Virtual</option>
        </select>
        <div className="px-3 py-1.5 rounded-xl bg-slate-100 border border-slate-200 text-xs font-mono text-slate-600">
          Showing <span className="font-bold text-slate-900">{visibleCount}</span> of {totalCount} Records
        </div>
      </div>
    </div>
  );
}
