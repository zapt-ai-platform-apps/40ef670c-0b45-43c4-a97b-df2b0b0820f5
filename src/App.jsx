import React from 'react';
import Calendar from './Calendar';

export default function App() {
  return (
    <div className="min-h-screen p-4">
      <h1 className="text-2xl font-bold mb-4">Incident Calendar App</h1>
      <Calendar />
      <div className="mt-4">
        <a href="https://www.zapt.ai" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
          Made on ZAPT
        </a>
      </div>
    </div>
  );
}