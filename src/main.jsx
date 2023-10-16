import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './global/style.css'
import { ConfigProvider, theme } from 'antd';
import TableAnt from './components/TableAnt';
import { ProductGridComponent } from './components/ProductGridComponent/index.jsx';
import { ProductForm } from './components/ProductForm/index.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <ProductGridComponent />
      }, 
      {
        path: "/estoque",
        element: <TableAnt />
      },
      {
        path: "/cadastro-produto",
        element: <ProductForm />
      },
      {
        path: "/cadastro-produto/:id",
        element: <ProductForm />
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
