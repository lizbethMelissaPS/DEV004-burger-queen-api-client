


function Personal() {
  document.getElementById("tbl").onclick('click', 'button.replay', function () {

    const cliente = this.closest('tr').find('td:eq(0)').innerText;
    const cantidad = this.closest('tr').find('td:eq(1)').innerText;
    let id = this.closest('tr').find('input[name=id]').value;

    console.log('Cliente ' + cliente + ' id ' + id);

  });
 
  function name(params) {
    document.getElementById("tbl").addEventListener('click',)
  }
  return (
    <>
      <div className="table-responsive text-nowrap">
        <table className="table table-bordered table-hover" id="tbl">
          <thead>
            <tr>
              <th>Nomb</th>
              <th>Cantidad</th>
              <th>Comentario</th>
              <th></th>
            </tr>
          </thead>
          <tbody id="tbody_folio">
            <tr>
              <td>CL 1</td>
              <td>10</td>
              <td>Pedido 1</td>
              <td>
                <button className='btn btn-sm btn-warning replay' type='button' name='button'>
                  <input type="hidden" name="id" value="1" />
                  <i className='fas fa-chevron-circle-right'></i>agregar a pedido</button>
              </td>
            </tr>
            <tr>
              <td>CL 2</td>
              <td>100</td>
              <td>Pedido urgente</td>
              <td>
                <button className='btn btn-sm btn-warning replay' type='button' name='button'>
                  <input type="hidden" name="id" value="2" />
                  <i className='fas fa-chevron-circle-right'></i> agregar a pedido</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>



  );
}
export default Personal;