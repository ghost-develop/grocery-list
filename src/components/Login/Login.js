import React from 'react';

const Login = () => {
    return (
        <div>
            <div className='form-container'>
                <label for='email'><b>Email</b></label>
                <input type='text' placeholder='Enter Email' name='email' id='email' required></input>

                <label for='psw'><b>Password</b></label>
                <input type='password' placeholder='Enter Password' name='psw' id='psw' required></input>

                <label for='psw-repeat'><b>Repeat Password</b></label>
                <input type='password' placeholder='Repeat Password' name='psw-repeat' id='psw-repeat' required></input>

                <hr></hr>

                <button type='submit' class='submit-btn'>Register</button>
            </div>
        </div>
    )
}

export default Login;