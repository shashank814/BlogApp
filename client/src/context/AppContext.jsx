// import { createContext, useContext, useEffect, useState } from "react"
// import axios from 'axios';
// import {useNavigate} from 'react-router-dom'
// import toast from "react-hot-toast";

// axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;

// const AppContext = createContext();

// export const AppProvider = ({ children }) => {

//     const navigate = useNavigate()

//     const [token, setToken] = useState(null)
//     const [blogs, setBlogs] = useState([])
//     const [input, setInput] = useState("")

//     const fetchBlogs = async () => {
//         try {
//             const {data} = await axios.get('/api/blog/all');
//             data.success ? setBlogs(data.blogs) : toast.error(data.message)
//         } catch (error) {
//             toast.error(error.message)
//         }
//     }

//     useEffect(()=> {
//         fetchBlogs();
//         const token = localStorage.getItem('token')
//         if(token) {
//             setToken(token);
//             axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
//         }
//     }, [])

//     const value = {
//         axios, navigate, token, setToken, blogs, setBlogs, input, setInput
//     }

//     return (
//         <AppContext.Provider value={value}>
//             {children}
//         </AppContext.Provider>
//     )
// }

// export const useAppContext = () => {
//     return useContext(AppContext)
// };

import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

// ✅ Custom Axios Instance
const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

console.log("Backend Base URL:", import.meta.env.VITE_BASE_URL);

// ✅ Interceptor to attach token
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const navigate = useNavigate();

  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const [blogs, setBlogs] = useState([]);
  const [input, setInput] = useState("");

  const fetchBlogs = async () => {
    try {
      const { data } = await axiosInstance.get("/api/blog/all");
      if (data.success) {
        setBlogs(data.blogs);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const value = {
    axios: axiosInstance,
    navigate,
    token,
    setToken,
    blogs,
    setBlogs,
    input,
    setInput,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => useContext(AppContext);
