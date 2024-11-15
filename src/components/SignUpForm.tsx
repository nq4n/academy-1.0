import React, { useState } from 'react';

export default function SignUpForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    institution: '',
    researchArea: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for signing up! We will contact you soon.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
          Full Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      
      <div>
        <label htmlFor="institution" className="block text-sm font-medium text-gray-700 mb-1">
          Institution
        </label>
        <input
          type="text"
          id="institution"
          name="institution"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          value={formData.institution}
          onChange={handleChange}
        />
      </div>
      
      <div>
        <label htmlFor="researchArea" className="block text-sm font-medium text-gray-700 mb-1">
          Research Area
        </label>
        <input
          type="text"
          id="researchArea"
          name="researchArea"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          value={formData.researchArea}
          onChange={handleChange}
        />
      </div>

      <button
        type="submit"
        className="w-full bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition font-semibold"
      >
        Start Your Journey
      </button>
    </form>
  );
}