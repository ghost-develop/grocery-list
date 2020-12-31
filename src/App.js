import React, {useState} from 'react';
import Login from './components/Login/Login';
import Register from './components/Login/Register';
import styles from './App.module.css';


function App() {

  const [isLogged] = useState(false);
  
  return (
    <div>
       <Register />
    </div>
  );
}

export default App;