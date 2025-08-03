// Volunteer.js
import React, { useState } from 'react';
import './Volunteer.css';

const Volunteer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for volunteering! We will contact you soon.');
    console.log('Volunteer Data:', formData);
    // Here you can add code to send form data to a backend or Firebase
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div className="volunteer-container">
      <h1 className="volunteer-title">Volunteer Registration</h1>
      <form className="volunteer-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Full Name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          name="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="phone">Phone Number</label>
        <input
          type="tel"
          name="phone"
          id="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />

        <label htmlFor="message">Why do you want to volunteer?</label>
        <textarea
          name="message"
          id="message"
          rows="4"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Volunteer;
