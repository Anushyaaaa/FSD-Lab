import React, { useState, useEffect, useMemo } from 'react';
import Navbar from './components/Navbar';
import StatsBar from './components/StatsBar';
import FilterBar from './components/FilterBar';
import EventCard from './components/EventCard';
import EventFormModal from './components/EventFormModal';
import DeleteConfirmModal from './components/DeleteConfirmModal';
import Toast from './components/Toast';

export default function App() {
  const [events, setEvents] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [modeFilter, setModeFilter] = useState("All");
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingEvent, setEditingEvent] = useState(null);
  const [deleteTarget, setDeleteTarget] = useState(null);
  const [toast, setToast] = useState({ visible: false, title: "", message: "", type: "success" });

  const showToast = (title, message, type = "success") => {
    setToast({ visible: true, title, message, type });
    setTimeout(() => setToast(prev => ({ ...prev, visible: false })), 4000);
  };

  // CRUD: Read / Load
  useEffect(() => {
    fetch('/db.json')
      .then(res => res.json())
      .then(data => setEvents(data.events || []))
      .catch(() => {
        const local = localStorage.getItem("campusvibe_events_react");
        if (local) setEvents(JSON.parse(local));
      });
  }, []);

  // CRUD: Create & Update
  const handleSaveEvent = (formData) => {
    if (editingEvent) {
      setEvents(prev => prev.map(ev => ev.id === editingEvent.id ? { ...ev, ...formData } : ev));
      showToast("Updated", `"${formData.title}" updated successfully.`);
    } else {
      const newEvent = { id: `ev-${Date.now()}`, ...formData, registered: 0, status: "Active" };
      setEvents(prev => [newEvent, ...prev]);
      showToast("Created", `"${formData.title}" added to registry.`);
    }
    setIsFormOpen(false);
    setEditingEvent(null);
  };

  // CRUD: Delete
  const handleConfirmDelete = (id) => {
    setEvents(prev => prev.filter(ev => ev.id !== id));
    setDeleteTarget(null);
    showToast("Deleted", "Event record removed.", "error");
  };

  const filteredEvents = useMemo(() => {
    return events.filter(ev => {
      const matchesCat = selectedCategory === "All" || ev.category === selectedCategory;
      const matchesMode = modeFilter === "All" || ev.mode === modeFilter;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch = !q || ev.title.toLowerCase().includes(q) || ev.venue.toLowerCase().includes(q);
      return matchesCat && matchesMode && matchesSearch;
    });
  }, [events, selectedCategory, modeFilter, searchQuery]);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} onOpenCreate={() => { setEditingEvent(null); setIsFormOpen(true); }} />
      <main className="max-w-7xl mx-auto px-4 pt-28 pb-20 w-full flex-1">
        <StatsBar events={events} />
        <FilterBar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} modeFilter={modeFilter} setModeFilter={setModeFilter} visibleCount={filteredEvents.length} totalCount={events.length} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map(event => (
            <EventCard key={event.id} event={event} onEdit={(ev) => { setEditingEvent(ev); setIsFormOpen(true); }} onDelete={(ev) => setDeleteTarget(ev)} onIssuePass={() => {}} />
          ))}
        </div>
      </main>
      <EventFormModal isOpen={isFormOpen} editingEvent={editingEvent} onClose={() => setIsFormOpen(false)} onSubmit={handleSaveEvent} />
      <DeleteConfirmModal target={deleteTarget} onClose={() => setDeleteTarget(null)} onConfirm={handleConfirmDelete} />
      <Toast toast={toast} onClose={() => setToast(prev => ({ ...prev, visible: false }))} />
    </div>
  );
}
