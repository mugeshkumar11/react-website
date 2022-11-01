import React  from "react";
import { useState,} from "react";
import './Login.css'
//import RouterComponent from './pages/router/Header.js';
import User from './Credential.json';


function Login() {
  const [username, setusername,] = useState('');
  const [userpassword, setpassword] = useState('');


  const handleUserName = (eve) => {
    console.log("eve", eve);
    setusername(eve.target.value);
  };
  const handleUserPassword = (eve) => {
    setpassword(eve.target.value);

  };
  const handleSubmit = (eve) => {
    console.log("state", username, userpassword,User);
    eve.preventDefault();
  };
  

  return (
    <div>
      <section className={"loginmpform"}>
        <section className={"container"}>
          <div className={"loginflex"}>
            <h1>Login</h1>
            <form>
              <div className={"input"}>
                <label for="username">Username</label>
                <input value={username} placeholder={"Username"} onChange={handleUserName} />
              </div>

              <div className={"input"}>
                <label for="password">Password</label>
                <input value={userpassword} placeholder={"Password"} onChange={handleUserPassword} />
              </div>
              <div className={"btn"}>
                <button onClick={(eve) => handleSubmit(eve)}>Submit</button>
              </div>
            </form>
          </div>
        </section>
      </section>
    </div>
  );
}

export default Login;
