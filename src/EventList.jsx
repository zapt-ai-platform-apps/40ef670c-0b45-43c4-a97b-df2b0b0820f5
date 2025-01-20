import React from 'react';

export default function EventList({ events, onEdit, onDelete }) {
  return (
    <ul>
      {events.map(event => (
        <li key={event.id} className="my-2">
          <strong>{event.title}</strong> – {event.date} – Incident: {event.incident}
          <div>
            <button
              onClick={() => onEdit(event.id)}
              className="bg-blue-400 text-white px-2 py-1 mr-2 cursor-pointer"
            >
              Edit
            </button>
            <button
              onClick={() => onDelete(event.id)}
              className="bg-red-400 text-white px-2 py-1 cursor-pointer"
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}