import React, { useState, useEffect } from 'react';

const Modal = ({ isOpen, onClose, onSubmit, initialData }) => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    category: 'work', 
    date: new Date().toISOString().split('T')[0],
    status: 'upcoming',
  });

  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({
      name: '',
      description: '',
      category: 'work',
      date: new Date().toISOString().split('T')[0],
      status: 'upcoming',
    });
  };

  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <form onSubmit={handleSubmit}>
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Event Name"
            required
          />
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Event Description"
            required
          />
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
          >
            <option value="work">Work</option>
            <option value="personal">Personal</option>
            <option value="leisure">Leisure</option>
          </select>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
          >
            <option value="upcoming">Upcoming</option>
            <option value="completed">Completed</option>
            <option value="cancelled">Cancelled</option>
          </select>
          <button type="submit">Save</button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
