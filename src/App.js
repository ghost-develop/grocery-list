import React from 'react';
// import { MainButtons } from './components/Buttons/';
import Login from './components/Login/Login';
import styles from './App.module.css';


function App() {
  return (
    <div>
      {/* Header */}
      <div className={styles.main_container}>
        <h1> Shopping List </h1>
      </div>

      {/* Components */}
      <div className={styles.main_container}>
        <Login />
      </div>

    </div>
  );
}

export default App;