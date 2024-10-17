import { useState } from 'react';
import EventTable from './EventTable';
import useEvents from '../hooks/useEvents';
import Modal from './Modal';
import { Event } from '../../src/types';

const HomePage = () => {
  const { events, addEvent, updateEvent, deleteEvent } = useEvents();
  const [isModalOpen, setModalOpen] = useState(false);
  const [currentEvent, setCurrentEvent] = useState<Event | null>(null); 
  const [filters, setFilters] = useState({ category: '', status: '' });

  const handleAddEvent = (eventData: Event) => {
    addEvent(eventData);
    setModalOpen(false);
  };

  const handleEditEvent = (eventData: Event) => {
    if (currentEvent) {
      updateEvent(currentEvent.id.toString(), eventData);
      setModalOpen(false);
      setCurrentEvent(null);
    }
  };

  const handleDeleteEvent = (id: string) => {
    deleteEvent(id);
  };

  const openModalForEdit = (event: Event) => {
    setCurrentEvent(event);
    setModalOpen(true);
  };

  const openModalForAdd = () => {
    setCurrentEvent(null);
    setModalOpen(true);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Personal Event Manager</h1>
      <div className="flex space-x-4 mb-4">
        <select
          className="p-2 border border-gray-300 rounded"
          value={filters.category}
          onChange={(e) => setFilters({ ...filters, category: e.target.value })}
        >
          <option value="">All Categories</option>
          <option value="work">Work</option>
          <option value="personal">Personal</option>
          <option value="leisure">Leisure</option>
        </select>
        <select
          className="p-2 border border-gray-300 rounded"
          value={filters.status}
          onChange={(e) => setFilters({ ...filters, status: e.target.value })}
        >
          <option value="">All Statuses</option>
          <option value="upcoming">Upcoming</option>
          <option value="completed">Completed</option>
          <option value="cancelled">Cancelled</option>
        </select>
        <button 
          onClick={openModalForAdd} 
          className="bg-blue-500 text-white p-2 rounded"
        >
          Add Event
        </button>
      </div>
      {/* Таблиця з подіями */}
      <EventTable 
        data={events} 
        filters={filters} 
        onEdit={openModalForEdit} 
        onDelete={handleDeleteEvent} 
      />
      {isModalOpen && (
        <Modal 
          isOpen={isModalOpen}
          onClose={() => setModalOpen(false)}
          onSubmit={currentEvent ? handleEditEvent : handleAddEvent}
          initialData={currentEvent}
        />
      )}
    </div>
  );
};

export default HomePage;
