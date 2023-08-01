import './App.css';
import { Link } from 'react-router-dom';


function App() {
  

  return (
    <div>
      <div>
        <div>
          <Link to="/login">Log in</Link>
        </div>
        <div>
          <Link to="/signup">Sign up</Link>
        </div>
        <div>
          You are not logged in.
        </div>
      </div>
    </div>
  )
}

export default App
