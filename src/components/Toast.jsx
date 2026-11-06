import React from 'react';

export default function Toast({ toast, onClose }) {
  if (!toast.visible) return null;
  const isSuccess = toast.type === "success";
  return (
    <div className="fixed bottom-6 right-6 z-50 animate-fade-in max-w-md">
      <div className={`flex items-start gap-3 p-4 rounded-2xl shadow-2xl border text-white ${
        isSuccess ? "bg-slate-900 border-emerald-500/50" : "bg-red-950 border-red-500/50"
      }`}>
        <span className={`flex-shrink-0 w-8 h-8 rounded-xl flex items-center justify-center text-sm font-bold ${
          isSuccess ? "bg-emerald-500/20 text-emerald-400" : "bg-red-500/20 text-red-400"
        }`}>
          <i className={`fa-solid ${isSuccess ? "fa-check" : "fa-triangle-exclamation"}`}></i>
        </span>
        <div className="flex-1 pr-2">
          <h4 className="font-sans font-bold text-sm text-white">{toast.title}</h4>
          <p className="text-xs text-slate-300 mt-0.5 leading-relaxed">{toast.message}</p>
        </div>
        <button onClick={onClose} className="text-slate-400 hover:text-white p-1 text-xs">
          <i className="fa-solid fa-xmark"></i>
        </button>
      </div>
    </div>
  );
}
