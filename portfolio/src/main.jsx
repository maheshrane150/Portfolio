import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import React from 'react'
import { Route, Router, RouterProvider, createBrowserRouter, createRoutesFromElements} from "react-router-dom"
import Layout from './Layout'
import Home from './components/Home'
import Education from './components/Eduecation'
import Course from './components/Course'
import Experties from './components/Experties'
import Hobbies from './components/Hobbies'
import ContactUs from './components/ContactUs'

const router = createBrowserRouter(
  createRoutesFromElements(

    <Route path='/' element={<Layout/>}>
      <Route path='Home' element={<Home/>}/>
      <Route path='Education' element={<Education/>}/>
      <Route path='Course' element={<Course/>}/>
      <Route path='Experties' element={<Experties/>}/>
      <Route path='Hobbies' element={<Hobbies/>}/>
      <Route path='ContactUs' element={<ContactUs/>}/>
   </Route>

  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
