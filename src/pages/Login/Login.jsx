import React, { useState } from 'react';
import './Login.css';
import logo from '../../assets/logo.png';
import { login, signup } from '../../firebase';
import netflix_spinner from '../../assets/netflix_spinner.gif';

const Login = () => {
  const [signState, setSignState] = useState("signIn");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const user_auth = async (e) => { 
    e.preventDefault();
    setLoading(true);
    if (signState === "signIn") {
      await login(email,password);
    } else {
      await signup(name, email, password);
    }
    setLoading(false);
    navigator("/");
  }

  return (

loading ?<div className="login-spinner">
  <img src={netflix_spinner} alt="" />
</div>:

    <div className='login'>
      <img src={logo} alt="" className="login-logo" />
      <div className="login-form">
        <h1>{signState}</h1>
        <form>
          {signState === "signUp" ?
            <input value={name} onChange={(e) => { setName(e.target.value )}}
              type="text" placeholder='Your name' /> : <></>}
          <input value={email} onChange={(e) => { setEmail(e.target.value )}}
            type="email" placeholder='Email' />
          <input value={password} onChange={(e) => { setPassword(e.target.value )}}
            type="password" placeholder='Password' />
          <button onClick={user_auth}  type="submit">Sign In</button>
          <div className='form-help'>
            <div className='remember'>
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">Remember me</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>

        <div className="form-switch">
          {signState === "signIn" ?
            <p>New to Netflix? <span onClick={() => setSignState("signUp")}>Sign Up Now</span></p> :
            <p>Already have an accounnt? <span onClick={() => setSignState("signIn")}>Sign In Now</span></p>
          }
        </div>
      </div>
    </div>
  )
}

export default Login;
