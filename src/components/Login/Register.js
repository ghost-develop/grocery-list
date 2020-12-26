import React from 'react';
import styles from './Register.module.css';

const Register = () => {
    

    return (
        <div>
            <div className={styles.login_container}>
                {/* <div className={styles.container_items}> */}
                    
                    <div className={styles.register}>
                        <h2>Register</h2>
                    </div>

                    <div className={styles.email_container}>
                        <h3 for='email'><b>Email</b></h3>
                        <input type='text' placeholder='Enter Email' name='email' id='email' required></input>
                    </div>

                    <div className={styles.password_container}>
                        <h3 for='psw'><b>Password</b></h3>
                        <input type='password' placeholder='Enter Password' name='psw' id='psw' required></input>
                    </div>

                    <div className={styles.repeat_container}>
                        <h3 for='psw-repeat'><b>Repeat Password</b></h3>
                        <input type='password' placeholder='Repeat Password' name='psw-repeat' id='psw-repeat' required></input>
                    </div>

                    <div className={styles.submit_container}>
                        <button type='submit'>Register</button>
                    </div>
                {/* </div> */}
            </div>
        </div>
    )
}

export default Register;