import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { mainRoute } from './routes/MainRoutes'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
  <div style={{overflow:"hidden"}}>
  <RouterProvider router={mainRoute}/>
  </div>
  </React.StrictMode>,
)
