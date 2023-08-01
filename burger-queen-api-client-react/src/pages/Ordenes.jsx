/* eslint-disable react/prop-types */
import { httpPostOrders } from "../httpApi/httpLogin";
import { token } from "./Login";
//import { MdDeleteForever } from "react-icons/md";
//import { HiMinusCircle } from "react-icons/hi";
/* import { useState } from "react";
import { actualizarData } from "./Menu1"; */
//import Desayuno from "./Menu1";


export function Orders({ producto })  {
  console.log('pedidos', { producto });

  function eliminarProducto() {
    //const indiceProducto = producto.findIndex((elementoProducto) => JSON.stringify(producto) === JSON.stringify(elementoProducto.product))

    console.log('eliminado', indiceProducto);
    // hago una copia de los productos del pedido
    const copiaProductosPedido = [...producto]
    // elimino un producto segun su indice
    copiaProductosPedido.splice(indiceProducto, 1)
    // actulizo los productos del pedido
    //setProductosPedido(copiaProductosPedido)
  }

  function priceRow(qty, unit) {
    return qty * unit;
  }
  
  function subtotal(producto) {
    return producto.reduce((acumulador, elemento) => acumulador + elemento.qty * elemento.product.price, 0)
  }
  function crearOrden() {
    const orders = httpPostOrders(token)
    console.log(orders);
  }

  function cancelarOrden() {
    console.log('cancelar orden');
  }

  return (
    <>
      <h4>Orden</h4>
      <div className="col-md-12">
        <div className="col-sm-6">
          <label htmlFor="Cliente">Mesa: </label>
          <input type="number" id="IdMesa" placeholder="nombre del cliente" />
        </div>
        <div className="col-sm-6">
          <label htmlFor="Cliente">Cliente: </label>
          <input type="text" id="idCliente" placeholder="N° de mesa" />
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
            {producto && producto.map(item => (
              <tr key={item.id} >
                <td>{item.qty}</td>
                <td>{item.product.name}</td>
                
                <td>{item.product.price}</td>
                <td>{priceRow(item.product.price, item.qty)}</td>
                {/* <td>
                
                <MdDeleteForever onClick={ eliminarProducto()} style={{color: 'red', fontSize: '25px'}}/>
                </td> */}
                <td>
                  <button onClick={ eliminarProducto()}>ELIMINAR</button>
                </td>
                
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={3}>Total a cancelar</td>
               <td>{subtotal(producto)}</td>

            </tr>
          </tfoot>
        </table>
        <div>

        </div>
      </div>


      <button onClick={crearOrden}>Crear Orden</button>
      <button onClick={cancelarOrden}>Cancelar Orden</button>

    </>

  )
}
//export default Orders;