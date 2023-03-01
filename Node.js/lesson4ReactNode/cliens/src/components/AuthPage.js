import React from 'react'
import { login_req } from '../components/requests/login_req';
import { register_req } from '../components/requests/register_req';

export default function AuthPage() {

  const login_submit = event => {
    event.preventDefault();
    const { email, password } = event.target;
    login_req({
      email: email.value,
      password: password.value,
    });
    email.value = '';
    password.value = '';
  }
        

  const register_submit = event => {
    event.preventDefault();
    const { email, password } = event.target;
    register_req({
      email: email.value,
      password: password.value,
    });
    email.value = '';
    password.value = '';
  }

  return (
    <div>
      <form onSubmit={login_submit}>
        <p>Login</p>
        <input type='text' placeholder='Email' name='email' />
        <input type='password' placeholder='Password' name='password' />
        <button>Login</button>
      </form>
      
      <br/> <br/> <br/>

      <form onSubmit={register_submit}>
        <p>Register</p>
        <input type='text' placeholder='Email' name='email' />
        <input type='password' placeholder='Password' name='password' />
        <button>Register</button>
      </form>
    </div>
  )
}