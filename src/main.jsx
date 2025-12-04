import { Children, Component, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import HomeLayout from './Layout/HomeLayout.jsx'
import Blogs from './pages/Blogs.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    Component: HomeLayout,
    
  },
  {
    path:'blogs',
    Component: Blogs

  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>

    </RouterProvider>
  </StrictMode>,
)
