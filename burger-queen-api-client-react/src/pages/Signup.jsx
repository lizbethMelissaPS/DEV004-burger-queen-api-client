import logo from '/logo.png';
import menu from '/menu.png';
import ordenes from '/ordenes.png';
import personal from '/personal.png';
import { useNavigate } from 'react-router-dom';

//Enviar un mensaje en el chat es un evento porque es directamente causado por el usuario haciendo clic en un botón.
//establecer una conexión a un servidor es un Efecto


function HomeAdm() {

const navigate = useNavigate();

/* function onClickDesayuno() {
  navigate('/menu1');
} */
function onClickAlmuerzo() {
  navigate('/menu2');
}
function onClickOrdenes() {
  navigate('/ordenes');
}
function onClickPersonal() {
  navigate('/personal');
}
  
  return (
    <>
      <div className="row col-md-4">
        <a target="_blank">
          <img src={logo} className="col-md-4" alt="logo" />
        </a>
      </div>
      <br />
      <div className="container">
        <div className='card' >
          <img src={menu} alt="menu" />
          <div>
            {/* <button onClick={onClickDesayuno}>Desayuno</button> */}
            <button onClick={onClickAlmuerzo}>Menu</button>
          </div>
        </div>
        <br />
        <div className='card'>
          <img src={ordenes} alt="ordenes" />
          <button  onClick={onClickOrdenes}>Ordenes</button>
          </div>
        <br />
        <div className='card'>
          <img src={personal} alt="personal" />
          <button  onClick={onClickPersonal}>Personal</button>
        </div>
        <br />



      </div>
    </>



  );
}
export default HomeAdm;