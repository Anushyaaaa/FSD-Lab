import React, { useState } from 'react';

export default function EventFormModal({ isOpen, onClose, onSubmit, editingEvent }) {
  if (!isOpen) return null;
  const isEdit = Boolean(editingEvent);

  const [formData, setFormData] = useState({
    title: editingEvent ? editingEvent.title : "",
    category: editingEvent ? editingEvent.category : "Technical",
    date: editingEvent ? editingEvent.date : "2026-04-10",
    time: editingEvent ? editingEvent.time : "10:00 AM",
    venue: editingEvent ? editingEvent.venue : "",
    organizer: editingEvent ? editingEvent.organizer : "",
    capacity: editingEvent ? editingEvent.capacity : 300,
    registered: editingEvent ? editingEvent.registered : 0,
    mode: editingEvent ? editingEvent.mode : "In-Person",
    accessLevel: editingEvent ? editingEvent.accessLevel : "Standard Student Entry",
    description: editingEvent ? editingEvent.description : "",
    image: editingEvent ? editingEvent.image : "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-2xl rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-8">
        <div className="px-6 py-5 border-b border-slate-100 flex items-center justify-between bg-slate-50">
          <h3 className="font-sans font-bold text-lg text-slate-900">
            {isEdit ? "Update Event Record (PUT / UPDATE)" : "Create New Campus Event (POST / CREATE)"}
          </h3>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-700"><i className="fa-solid fa-xmark"></i></button>
        </div>
        <form onSubmit={handleSubmit} className="p-6 space-y-4 max-h-[75vh] overflow-y-auto">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Event Title *</label>
            <input type="text" name="title" required value={formData.title} onChange={handleChange} className="w-full px-3.5 py-2.5 rounded-xl border text-sm" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Category (Select Dropdown) *</label>
              <select name="category" value={formData.category} onChange={handleChange} className="w-full px-3.5 py-2.5 rounded-xl border text-sm bg-white">
                <option value="Technical">Technical</option>
                <option value="Cultural">Cultural</option>
                <option value="Sports">Sports</option>
                <option value="Management">Management</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Date *</label>
              <input type="date" name="date" required value={formData.date} onChange={handleChange} className="w-full px-3.5 py-2.5 rounded-xl border text-sm" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Venue *</label>
              <input type="text" name="venue" required value={formData.venue} onChange={handleChange} className="w-full px-3.5 py-2.5 rounded-xl border text-sm" />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Organizer *</label>
              <input type="text" name="organizer" required value={formData.organizer} onChange={handleChange} className="w-full px-3.5 py-2.5 rounded-xl border text-sm" />
            </div>
          </div>
          <div className="p-3.5 rounded-2xl bg-slate-50 border">
            <label className="block text-xs font-bold text-slate-700 uppercase mb-2">Attendance Mode (Radio Buttons) *</label>
            <div className="grid grid-cols-2 gap-3">
              <label className="flex items-center gap-2 p-2 bg-white rounded-xl border text-xs cursor-pointer">
                <input type="radio" name="mode" value="In-Person" checked={formData.mode === "In-Person"} onChange={handleChange} />
                <span>In-Person</span>
              </label>
              <label className="flex items-center gap-2 p-2 bg-white rounded-xl border text-xs cursor-pointer">
                <input type="radio" name="mode" value="Hybrid / Virtual" checked={formData.mode === "Hybrid / Virtual"} onChange={handleChange} />
                <span>Hybrid / Virtual</span>
              </label>
            </div>
          </div>
          <div className="p-3.5 rounded-2xl bg-slate-50 border">
            <label className="block text-xs font-bold text-slate-700 uppercase mb-2">Access Level (Radio Buttons) *</label>
            <div className="grid grid-cols-2 gap-3">
              <label className="flex items-center gap-2 p-2 bg-white rounded-xl border text-xs cursor-pointer">
                <input type="radio" name="accessLevel" value="Standard Student Entry" checked={formData.accessLevel === "Standard Student Entry"} onChange={handleChange} />
                <span>Standard Entry</span>
              </label>
              <label className="flex items-center gap-2 p-2 bg-white rounded-xl border text-xs cursor-pointer">
                <input type="radio" name="accessLevel" value="VIP Delegate" checked={formData.accessLevel === "VIP Delegate"} onChange={handleChange} />
                <span>VIP Delegate</span>
              </label>
            </div>
          </div>
          <div className="pt-4 border-t flex justify-end gap-3">
            <button type="button" onClick={onClose} className="px-5 py-2 rounded-xl text-xs font-bold text-slate-600">Cancel</button>
            <button type="submit" className="px-6 py-2 rounded-xl text-xs font-bold text-white bg-blue-600">
              {isEdit ? "Save & Update Record" : "Create Event Record"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
