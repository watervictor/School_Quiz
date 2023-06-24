import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { mainRoute } from './routes/MainRoutes'

import {MainContext} from "./components/../Data/Global"

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
  <MainContext>
  <div style={{overflow:"hidden"}}>
  <RouterProvider router={mainRoute}/>
  </div>

  </MainContext>
  </React.StrictMode>,
)
