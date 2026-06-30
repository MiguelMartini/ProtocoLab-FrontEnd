// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import router from './utils/router.jsx'
import { RouterProvider } from 'react-router-dom'
import "./i18n";
import { Toaster } from "@/components/ui/sonner";
import { AuthProvider } from './contexts/AuthContext'

createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <Toaster position="top-center" theme="light" />
    <RouterProvider router={router}/>
 </AuthProvider>
)
