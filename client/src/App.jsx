import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Blog from './pages/Blog'
import Layout from './pages/admin/Layout'
import Dashboard from './pages/admin/Dashboard'
import ListBlog from './pages/admin/ListBlog'
import Comments from './pages/admin/Comments'
import Login from './components/admin/Login'
import AddBlog from './pages/admin/AddBlog'
import 'quill/dist/quill.snow.css'
import {Toaster} from 'react-hot-toast'
import { useAppContext } from './context/AppContext'
import Register from './components/admin/Register'

import AdminAuth from './components/admin/AdminAuth';  // new combined login/register page


const App = () => {

  const {token} = useAppContext()
  return (
    <div>
      <Toaster />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/blog/:id' element={<Blog />}/>

        <Route path="/admin/auth" element={<AdminAuth />} />   // AdminAuth -----

        <Route path='/admin' element={token ? <Layout /> : <AdminAuth />}>   // AdminAuth --- Login
        <Route index element={<Dashboard />}/>
        <Route path='addBlog' element={<AddBlog />}/>
        <Route path='listBlog' element={<ListBlog />}/>
        <Route path='comments' element={<Comments />}/>

        </Route>
        <Route path="/register" element={<Register />} />

      </Routes>
    </div>
  )
}

export default App

