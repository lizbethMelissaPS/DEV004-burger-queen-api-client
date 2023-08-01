import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter, 
  RouterProvider,
} from "react-router-dom";
import Login from './pages/Login.jsx';
import HomeAdm from './pages/Signup.jsx';
import Desayuno from './pages/Menu1.jsx';
import Almuerzo from './pages/Menu2.jsx';

import Personal from './pages/personal.jsx';
import { Orders } from './pages/Ordenes.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,// Establecer <Root>como ruta raízelement
    
  },
  //ruta sin anidar
  {
    path: "login",///contacts/1obtenemos nuestro nuevo componente!
    element: <Login />,
  },
  {
    path: "homeAdm",///contacts/1obtenemos nuestro nuevo componente!
    element: <HomeAdm />,
  },
  {
    path: "menu1",///contacts/1obtenemos nuestro nuevo componente!
    element: <Desayuno />,
  }, 
  {
    path: "menu2",///contacts/1obtenemos nuestro nuevo componente!
    element: <Almuerzo />,
  },
  {
    path: "ordenes",///contacts/1obtenemos nuestro nuevo componente!
    element: <Orders />,
  },
  {
    path: "personal",///contacts/1obtenemos nuestro nuevo componente!
    element: <Personal />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)