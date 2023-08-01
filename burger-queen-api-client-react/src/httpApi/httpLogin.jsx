import React, { useEffect, useState } from "react";


//PETICION HTTP 
//const dominio = 'http://localhost:8080'
const dominio = 'https://burger-queen-api-mock-production-7906.up.railway.app';
// variable de estado donde guardare el token para hacer peticiones http y usar las rutas del backend
//const [token, setToken] = useState('');
// funcion de callback que actualizara el token cuando alguien ingresa al sistema
//export const actualizarToken = (miToken) => setToken(miToken)
/* export function actualizarToken(miToken){
    console.log('miToken', miToken);
   const respon = httpObtenerProductos(miToken);
   console.log('xxxx', respon);
} */

export async function httpLogin(credentials) {
    return fetch(`${dominio}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
        .then(data => data.json())
        .catch(error => console.error('Error:', error))
}
// crear orders
/* export async function httpPosOrders(token) {
    return fetch(`${dominio}/orders`, {
        method: 'POST',
        headers: {
            'authorization': `Bearer ${token}`

        },
        body: JSON.stringify(token)
    })
        .then(data => data.json())
        .catch(error => console.error('Error:', error))
} */
export function httpPostOrders(token, pedido) {
  const [orders, setOrders] = useState([])
 
  useEffect(() => {
    fetch(`${dominio}/orders`, pedido, {
      method: 'POST',
      headers: {
          'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(token)
    })
      .then(response => response.json())
      .then(datos => {
        setOrders(datos)
      })
  }, [])
 
  return orders
}

////get
// productos
 export function httpObtenerProductos(token) {
    const [product, setProductos] = useState([])
   
    useEffect(() => {
      fetch(`${dominio}/products`,{
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
        },
      })
        .then(response => response.json())
        .then(datos => {
          setProductos(datos)
        })
    }, [])
   
    return product
  }

  // extraer Orders
  export function httpObtenerOrders(token) {
    const [orders, setOrders] = useState([])
   
    useEffect(() => {
      fetch(`${dominio}/orders`,{
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
        },
      })
        .then(response => response.json())
        .then(datos => {
          setOrders(datos)
        })
    }, [])
   
    return orders
  }

