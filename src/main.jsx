import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route,RouterProvider,createBrowserRouter,createRoutesFromElements} from 'react-router-dom'
import RootLayout from './Layouts/RootLayout.jsx'
import Home from './Pages/Home.jsx'


const routesFromElements = createRoutesFromElements(
  <Route path='/' element={<App/>} >
    <Route path='/' element={<RootLayout/>}>
      <Route path='/' element={<Home/>}/>
    </Route>
  </Route>
)

const router = createBrowserRouter(routesFromElements)



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>  
    
      <RouterProvider router={router}/>
    
  </React.StrictMode>,
)
