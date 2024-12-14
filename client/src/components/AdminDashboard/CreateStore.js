import React, { useState } from 'react';
import axios from '../../api/storeApi';

function CreateStore() {
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    password: '',
    aggregators: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAggregators = (e) => {
    const options = Array.from(e.target.selectedOptions).map((option) => option.value);
    setFormData({ ...formData, aggregators: options });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/create', formData);
      alert('Store created successfully');
    } catch (error) {
      console.error(error);
      alert('Failed to create store');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Store Name" onChange={handleChange} required />
      <input type="text" name="username" placeholder="Username" onChange={handleChange} required />
      <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
      <select multiple onChange={handleAggregators}>
        <option value="Zomato">Zomato</option>
        <option value="Swiggy">Swiggy</option>
        <option value="Uber Eats">Uber Eats</option>
        <option value="DoorDash">DoorDash</option>
        <option value="Deliveroo">Deliveroo</option>
      </select>
      <button type="submit">Create Store</button>
    </form>
  );
}

export default CreateStore;
