import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import routes from './routes/Router.jsx'
import AuthProvider from './provider/AuthProvider.jsx'
import { Toaster } from 'react-hot-toast'

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { PhotoProvider } from 'react-photo-view';

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>

      <PhotoProvider>
        <AuthProvider>
          <RouterProvider router={routes}></RouterProvider>
          <Toaster />
        </AuthProvider>
      </PhotoProvider>

    </QueryClientProvider>
  </React.StrictMode>,
)
// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <AuthProvider>
//       <RouterProvider router={routes}></RouterProvider>
//       <Toaster/>
//     </AuthProvider>
//   </React.StrictMode>,
// )
