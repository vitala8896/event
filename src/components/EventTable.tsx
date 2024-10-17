import React from 'react';
import { Event } from '../../src/types'; 

interface EventTableProps {
  data: Event[];
  filters: {
    category: string;
    status: string;
  };
  onEdit: (event: Event) => void;
  onDelete: (id: string) => void;
}

const EventTable: React.FC<EventTableProps> = ({ data, filters, onEdit, onDelete }) => {
  // Ваш код для таблиці
  return (
    <table className="min-w-full border border-gray-300">
      <thead>
        <tr>
          <th className="border border-gray-300">Name</th>
          <th className="border border-gray-300">Description</th>
          <th className="border border-gray-300">Category</th>
          <th className="border border-gray-300">Date</th>
          <th className="border border-gray-300">Status</th>
          <th className="border border-gray-300">Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.map((event) => (
          <tr key={event.id}>
            <td className="border border-gray-300">{event.name}</td>
            <td className="border border-gray-300">{event.description}</td>
            <td className="border border-gray-300">{event.category}</td>
            <td className="border border-gray-300">{event.date}</td>
            <td className="border border-gray-300">{event.status}</td>
            <td className="border border-gray-300">
              <button onClick={() => onEdit(event)} className="bg-yellow-500 text-white p-1 rounded">Edit</button>
              <button onClick={() => onDelete(event.id)} className="bg-red-500 text-white p-1 rounded">Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default EventTable;
