import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';


type EventCategory = 'work' | 'personal' | 'leisure';
type EventStatus = 'upcoming' | 'completed' | 'cancelled';

interface Event {
  id: string;
  name: string;
  description: string;
  category: EventCategory;
  date: string; 
  status: EventStatus;
}

const initialEvents: Event[] = [
  {
    id: uuidv4(),
    name: 'Work Meeting',
    description: 'Meeting with the team',
    category: 'work',
    date: new Date().toISOString(),
    status: 'upcoming',
  },
  {
    id: uuidv4(),
    name: 'Birthday Party',
    description: 'Celebrate with friends',
    category: 'personal',
    date: new Date().toISOString(),
    status: 'completed',
  },
];

const useEvents = () => {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    const fetchEvents = async () => {
      setEvents(initialEvents); 
    };

    fetchEvents();
  }, []);

  
  const addEvent = (eventData: Omit<Event, 'id'>) => {
    const newEvent: Event = { id: uuidv4(), ...eventData };
    setEvents((prevEvents) => [...prevEvents, newEvent]);
  };

  
  const updateEvent = (id: string, updatedEventData: Omit<Event, 'id'>) => {
    setEvents((prevEvents) =>
      prevEvents.map((event) =>
        event.id === id ? { ...event, ...updatedEventData } : event
      )
    );
  };

  const deleteEvent = (id: string) => {
    setEvents((prevEvents) => prevEvents.filter((event) => event.id !== id));
  };

  return {
    events,
    addEvent,
    updateEvent,
    deleteEvent,
  };
};

export default useEvents;
