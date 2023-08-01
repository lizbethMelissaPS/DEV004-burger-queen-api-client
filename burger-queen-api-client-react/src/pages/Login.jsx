import { useState, } from 'react'
import '../Login.css'
import logo from '/logo.png'
import { useNavigate } from 'react-router-dom';
import {  httpLogin } from '../httpApi/httpLogin';

export let token;
export let user;
function Login() {
  // me permite navegar a rutas
  const navigate = useNavigate();
  // variables de estado de los inputs de usuario y contraseña
  const [email, setUsuario] = useState('');
  const [password, setContrasena] = useState('');

  const clickLogin = async (e) => {
    e.preventDefault();
    const response =await httpLogin({email, password});  
    console.log('response', response.user.id); 
     token = response.accessToken
     user = response.user.id
     console.log(token);

    if ('accessToken' in response) {      
      response.user.role === 'admin'? navigate('/homeAdm'): navigate('/')
     
      
    } else {
      alert('Please check your login information.', );
    }
    
  }

  return (
    <>
    <div className="row mb-3">
        <a target="_blank">
          <img src={logo} className="logo" alt="Vite logo" />
        </a>
      </div>
      
      <div className='login'>
      
      <div className="card mb-3">

        <div className="row g-0 d-flex align-items-center">
          <div className="col-lg-8">
            <div className="card-body py-5 px-md-5">

              <form className='login-form' >

                {/* <!-- Email input --> */}
                <div className="form-outline mb-4">
                  <input type="email" id="email" className="login-info" placeholder="Email address" value={email} onChange={(e) => setUsuario(e.target.value)} />
                </div>

                {/*  <!-- Password input --> */}
                <div className="form-outline mb-4">
                  <input type="password" id="password" className="login-info" placeholder="Password" value={password} onChange={(e) => setContrasena(e.target.value)} />
                </div>

                {/* <!-- 2 column grid layout for inline styling --> */}
                <div className="row mb-4">
                  <div className="col">
                    {/* <!-- Simple link --> */}
                    <a href="#!">Forgot password?</a>
                  </div>
                </div>

                {/* <!-- Submit button --> */}
                <button type="button" className="btn btn-primary btn-block mb-4" onClick={clickLogin}>Sign in</button>

              </form>

            </div>
          </div>
        </div>
      </div>
      </div>
      


    </>

  );
}
export default Login;