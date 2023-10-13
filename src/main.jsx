import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './global/style.css'
import { ConfigProvider, theme } from 'antd';
import TableAnt from './components/TableAnt';
import { ProductGridComponent } from './components/ProductGridComponent/index.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/home",
        element: <ProductGridComponent />
      }, 
      {
        path: "/products",
        element: <TableAnt />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <ConfigProvider
  theme={{
    token: {
      // Seed Token
      algorithm: theme.darkAlgorithm,
    },
  }}
>
  <RouterProvider router={router} />
</ConfigProvider>,
)
