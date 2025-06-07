import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const Register = () => {
  const [form, setForm] = useState({ username: '', email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:3000/api/register', form); // adjust if deployed
      localStorage.setItem('token', res.data.token);
      toast.success('Account created!');
      navigate('/'); // or redirect to login if preferred
    } catch (err) {
      toast.error(err.response?.data?.message || 'Failed to register');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 shadow-lg rounded bg-white">
      <h2 className="text-xl font-bold mb-4">Create New Account</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="username" placeholder="Username" onChange={handleChange} required className="w-full border p-2 rounded" />
        <input name="email" type="email" placeholder="Email" onChange={handleChange} required className="w-full border p-2 rounded" />
        <input name="password" type="password" placeholder="Password" onChange={handleChange} required className="w-full border p-2 rounded" />
        <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded">Sign Up</button>
      </form>
    </div>
  );
};

export default Register;
