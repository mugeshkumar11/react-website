import React  from "react";
import { useState,} from "react";
import './Login.css'
import User from './Credential.json';
import { useNavigate } from "react-router-dom";


function Login() {
  const Navigate = useNavigate();
  const [username, setusername,] = useState('');
  const [userpassword, setpassword] = useState('');
  const [error, setError] = useState('');


  const handleUserName = (eve) => {
    console.log("eve", eve);
    setusername(eve.target.value);
  };
  const handleUserPassword = (eve) => {
    setpassword(eve.target.value);

  };

  const handleSubmit = (eve) => {
    eve.preventDefault();
    
   console.log("state", username, userpassword,User);
  User.filter((a)=>{
        if(a.username===username && a.password===userpassword){
            return Navigate('Header')
  
        }else{
         setError("invalid username and password")
          return;
         }
      })
  
      if(username===""||userpassword===""){
         setError("invalid username and password");
         return;
      }
      console.log("state",username,userpassword);
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
              <h4>{error}</h4>
            </form>
            
          </div>
        </section>
      </section>
    
    </div>
  );
}

export default Login;
