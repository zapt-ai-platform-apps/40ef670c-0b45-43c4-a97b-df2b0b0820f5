import React from 'react';

export default function EventForm({ onSubmit, event, setEvent, isEditing }) {
  return (
    <form onSubmit={onSubmit} className="mb-4">
      <input
        type="text"
        value={event.title}
        onChange={(e) => setEvent({ ...event, title: e.target.value })}
        placeholder="Title"
        className="border mr-2 box-border"
      />
      <input
        type="date"
        value={event.date}
        onChange={(e) => setEvent({ ...event, date: e.target.value })}
        placeholder="Date"
        className="border mr-2 box-border"
      />
      <input
        type="text"
        value={event.incident}
        onChange={(e) => setEvent({ ...event, incident: e.target.value })}
        placeholder="Incident"
        className="border mr-2 box-border"
      />
      <button type="submit" className={`${isEditing ? 'bg-green-500' : 'bg-blue-500'} text-white px-3 py-1 cursor-pointer`}>
        {isEditing ? 'Update Event' : 'Add Event'}
      </button>
      {isEditing && (
        <button
          type="button"
          onClick={() => setEvent(null)}
          className="bg-gray-300 px-3 py-1 cursor-pointer ml-2"
        >
          Cancel
        </button>
      )}
    </form>
  );
}