import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter, 
  RouterProvider,
} from "react-router-dom";
import Login from './pages/Login.jsx';
import Signup from './pages/Signup.jsx';

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
    path: "signup",///contacts/1obtenemos nuestro nuevo componente!
    element: <Signup />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)