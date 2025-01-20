import React, { useState } from 'react';
import EventForm from './EventForm';
import EventList from './EventList';

export default function Calendar() {
  const [events, setEvents] = useState([]);
  const [newEvent, setNewEvent] = useState({ title: '', date: '', incident: '' });
  const [editingEvent, setEditingEvent] = useState(null);

  const handleCreateEvent = (e) => {
    e.preventDefault();
    if (!newEvent.title || !newEvent.date) return;
    const eventToAdd = {
      id: Date.now(),
      title: newEvent.title,
      date: newEvent.date,
      incident: newEvent.incident
    };
    setEvents([...events, eventToAdd]);
    setNewEvent({ title: '', date: '', incident: '' });
  };

  const startEditing = (eventId) => {
    const eventToEdit = events.find(ev => ev.id === eventId);
    setEditingEvent({ ...eventToEdit });
  };

  const handleUpdateEvent = (e) => {
    e.preventDefault();
    if (!editingEvent.title || !editingEvent.date) return;
    setEvents(events.map(ev => ev.id === editingEvent.id ? editingEvent : ev));
    setEditingEvent(null);
  };

  const handleDeleteEvent = (eventId) => {
    setEvents(events.filter(ev => ev.id !== eventId));
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Calendar Events</h2>
      <EventForm
        onSubmit={editingEvent ? handleUpdateEvent : handleCreateEvent}
        event={editingEvent || newEvent}
        setEvent={editingEvent ? setEditingEvent : setNewEvent}
        isEditing={!!editingEvent}
      />
      
      <EventList
        events={events}
        onEdit={startEditing}
        onDelete={handleDeleteEvent}
      />
    </div>
  );
}