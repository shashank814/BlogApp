// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import toast from 'react-hot-toast';
// import { useAppContext } from '../../context/AppContext';

// const AdminAuth = () => {
//   const navigate = useNavigate();
//   const [isLogin, setIsLogin] = useState(true);
//   const [form, setForm] = useState({ username: '', email: '', password: '' });

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const endpoint = isLogin ? '/api/admin/login' : '/api/register';
//     const payload = isLogin
//       ? { email: form.email, password: form.password }
//       : { username: form.username, email: form.email, password: form.password };

//     try {
//       const res = await axios.post(`http://localhost:3000${endpoint}`, payload);
//       localStorage.setItem('token', res.data.token);
//       toast.success(isLogin ? 'Login successful' : 'Account created!');
//       navigate('/');
//     } catch (err) {
//       toast.error(err.response?.data?.message || 'Something went wrong');
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded">
//       <h2 className="text-2xl font-bold mb-4 text-center">
//         {isLogin ? 'Login to Admin Panel' : 'Create New Account'}
//       </h2>

//       <form onSubmit={handleSubmit} className="space-y-4">
//         {!isLogin && (
//           <input
//             type="text"
//             name="username"
//             placeholder="Username"
//             required
//             onChange={handleChange}
//             className="w-full p-2 border rounded"
//           />
//         )}
//         <input
//           type="email"
//           name="email"
//           placeholder="Email"
//           required
//           onChange={handleChange}
//           className="w-full p-2 border rounded"
//         />
//         <input
//           type="password"
//           name="password"
//           placeholder="Password"
//           required
//           onChange={handleChange}
//           className="w-full p-2 border rounded"
//         />
//         <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded">
//           {isLogin ? 'Login' : 'Sign Up'}
//         </button>
//       </form>

//       <p className="mt-4 text-center">
//         {isLogin ? 'Don’t have an account?' : 'Already have an account?'}{' '}
//         <button
//           onClick={() => setIsLogin(!isLogin)}
//           className="text-blue-600 underline"
//         >
//           {isLogin ? 'Sign up' : 'Login'}
//         </button>
//       </p>
//     </div>
//   );
// };

// export default AdminAuth;

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useAppContext } from '../../context/AppContext'; // ✅ import context

const AdminAuth = () => {
  const navigate = useNavigate();
  const { setToken } = useAppContext(); // ✅ get setToken
  const [isLogin, setIsLogin] = useState(true);
  const [form, setForm] = useState({ username: '', email: '', password: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const endpoint = isLogin ? '/api/admin/login' : '/api/register';
    const payload = isLogin
      ? { email: form.email, password: form.password }
      : { username: form.username, email: form.email, password: form.password };

    try {
      const res = await axios.post(`http://localhost:3000${endpoint}`, payload);
      localStorage.setItem('token', res.data.token);
      setToken(res.data.token); // ✅ update context
      toast.success(isLogin ? 'Login successful' : 'Account created!');
      navigate('/admin'); // ✅ direct to dashboard not home
    } catch (err) {
      toast.error(err.response?.data?.message || 'Something went wrong');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded">
      <h2 className="text-2xl font-bold mb-4 text-center">
        {isLogin ? 'Login to Admin Panel' : 'Create New Account'}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {!isLogin && (
          <input
            type="text"
            name="username"
            placeholder="Username"
            required
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        )}
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded">
          {isLogin ? 'Login' : 'Sign Up'}
        </button>
      </form>

      <p className="mt-4 text-center">
        {isLogin ? 'Don’t have an account?' : 'Already have an account?'}{' '}
        <button
          onClick={() => setIsLogin(!isLogin)}
          className="text-blue-600 underline"
        >
          {isLogin ? 'Sign up' : 'Login'}
        </button>
      </p>
    </div>
  );
};

export default AdminAuth;
