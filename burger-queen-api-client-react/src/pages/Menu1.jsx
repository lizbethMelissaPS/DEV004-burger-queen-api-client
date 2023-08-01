
import { useState } from "react";

import { MdDeleteForever } from "react-icons/md";
import { HiMinusCircle } from "react-icons/hi";
import { httpPostOrders } from "../httpApi/httpLogin";
import { token } from "./Login";

function Desayuno({productos}) {
  //const productos = httpObtenerProductos(token);
  const [productosPedido, setProductosPedido] = useState([])
  const [cliente, setCliente] = useState('');
  console.log({ productosPedido }, productosPedido);
  let indiceProducto;
  function agregarAPedido(producto) {
    indiceProducto = productosPedido.findIndex((elementoProducto) => JSON.stringify(producto) === JSON.stringify(elementoProducto.product))
    console.log('indiceProducto ', indiceProducto);
    if (indiceProducto === -1) {
      setProductosPedido([...productosPedido, { qty: 1, product: producto }])
    } else {
      aumentar(indiceProducto)
    }
  }

  function aumentar(indiceProducto) {
    const copiaProductosPedido = [...productosPedido]
    copiaProductosPedido[indiceProducto].qty++
    setProductosPedido(copiaProductosPedido)
  }
  function disminuir(indiceProducto) {
    console.log('indice' ,indiceProducto);
   /* for (let i = indice; i < copiaProductosPedido.length; i--) {
    const element = copiaProductosPedido[i].qty;
    console.log('element :', element);
    setProductosPedido(element)
   } */
   if (indiceProducto.qty !== 1){
    console.log('------');
    const element = [...productosPedido]
    console.log('element ',element);
    element[indiceProducto].qty-1
    setProductosPedido(element)
   } else{
    console.log('solo un product--');
   }
   
  
  }
  function subtotal(producto) {
    return producto.reduce((acumulador, elemento) => acumulador + elemento.qty * elemento.product.price, 0)
  }
  
  const handleEliminar = (indexItem) => {  
    const updatedCart= productosPedido.filter(item => item.product.id !== indexItem.id)
    setProductosPedido(updatedCart)
  };

 /*  function crearOrden() {
    const orders = httpPostOrders(token)
    console.log(orders);
  } */

  function cancelarOrden() {
    console.log('cancelar orden');
  }
  async function crearOrden() {
    
    const today = new Date();
    const fechaHoraActual = today.toLocaleTimeString('en-US');
    const newOrder = {
      userId: "",
      client: cliente,
      products: productosPedido.map((product) => ({
        qty: product.quantity,
        product: {
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.image,
          type: product.type,
          dateEntry: fechaHoraActual
        }
      })),
      
      status: 'pending',
      dateEntry: fechaHoraActual
    };
    httpPostOrders(token, newOrder)
    /* setOrder(newOrder); */
    console.log('en cocina');
    
  }

  return (
    <>
      <div className="col-md-12">
        <table className="table table-bordered">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Nombre</th>
              <th scope="col">Precio</th>
              {/* <th scope="col">Opcion</th> */}
            </tr>
          </thead>
          <tbody>
            {productos && productos.map(item => (
              <tr key={item.id} onClick={() => agregarAPedido(item)} >
                <td>{item.name}</td>
                <td>{item.price}</td>
                {/* <td>
                  <button onClick={() => agregarAPedido(item)} >Agregar</button>
                </td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div>
        {/* <Orders producto={productosPedido} /> */}
        <h4>Orden</h4>
      <div className="col-md-12">
       
        <div className="col-sm-6">
          <label htmlFor="Cliente">Cliente: </label>
          <input type="text" id="idCliente" value={cliente} onChange={(e) => setCliente(e.target.value)}placeholder="Nombre del cliente" />
        </div>
        <table className="table table-bordered">
          <thead className="thead-dark">
            <tr>
            <th scope="col">cantidad</th>
              <th scope="col">Producto</th>
              
              <th scope="col">Precio</th>
              <th scope="col">Total</th>
              <th >opcion</th>
              
              
            </tr>
          </thead>
          <tbody>
            {productosPedido && productosPedido.map(item => (
              <tr key={item.id} >
                <td>
                <HiMinusCircle onClick={ () => disminuir(item) } />
                  {item.qty}
                  </td>
                <td>{item.product.name}</td>
                
                <td>{item.product.price}</td>
                <td>{item.product.price * item.qty}</td>
                <td>
                
                <MdDeleteForever onClick={ () => handleEliminar(item.product) } style={{color: 'red', fontSize: '25px'}}/>
                </td>
                
                
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={3}>Total a cancelar</td>
               <td>{subtotal(productosPedido)}</td>

            </tr>
          </tfoot>
        </table>
        <div>

        </div>
      </div>
      <button onClick={crearOrden}>Crear Orden</button>
      <button onClick={cancelarOrden}>Cancelar Orden</button>

      </div>
    </>



  );
}
export default Desayuno;