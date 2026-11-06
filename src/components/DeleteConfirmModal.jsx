import React from 'react';

export default function DeleteConfirmModal({ target, onClose, onConfirm }) {
  if (!target) return null;
  return (
    <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-md rounded-3xl shadow-2xl border p-6 text-center">
        <h3 className="font-sans font-extrabold text-xl text-slate-900 mb-2">Delete Event Record?</h3>
        <p className="text-xs text-slate-500 mb-6">Are you sure you want to permanently delete "{target.title}" (ID: {target.id})?</p>
        <div className="flex gap-3">
          <button onClick={onClose} className="flex-1 py-2.5 rounded-xl border text-xs font-bold text-slate-600">Cancel</button>
          <button onClick={() => onConfirm(target.id)} className="flex-1 py-2.5 rounded-xl bg-rose-600 text-white text-xs font-bold">Confirm Delete</button>
        </div>
      </div>
    </div>
  );
}
