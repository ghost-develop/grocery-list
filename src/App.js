import React from 'react';
// import { MainButtons } from './components/Buttons/';
import Login from './components/Login/Login';
import Register from './components/Login/Register';
import styles from './App.module.css';


function App() {
  return (
    <div>
      
      <div className={styles.main_container}>
        <Register />
      </div>

    </div>
  );
}

export default App;