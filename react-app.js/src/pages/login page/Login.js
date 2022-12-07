import React  from "react";
import { useState,useContext} from "react";
import './Login.css';
import User from './Credential.json';
import { useNavigate } from "react-router-dom";
import {TextField,Button} from '@mui/material';
import {statecontext} from '../context/Context';



function Login() {
  const Navigate = useNavigate();
  const [username, setusername,] = useState("mugeshk");
  const [userpassword, setpassword] = useState('mugesh');
  const [error, setError] = useState('');

  const { state, dispatch } = useContext(statecontext);
  console.log("statecontext", state.event);



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
    


     

      localStorage.setItem("islogged",JSON.stringify(true));
      JSON.filter((item)=>{
        if(item.username===username && item.password===userpassword){
          return Navigate("Header")

        }
      })

      dispatch({type:"login", payload:state.isAuthenticated})
    
      console.log("state",username,userpassword,JSON);
};


  return (
   
    <div className="mugesh">
       
      <section className={"loginmpform"}>
        <section className={"container"}>
          <div className={"loginflex"}>
            <h1>Login</h1>
            <form>
              <div className={"input"}>
               
                <TextField id="outlined-basic" label="username" variant="outlined" value={'mugeshk'} placeholder={"Username"} onChange={handleUserName} />
              </div>

              <div className={"input"}>
               
                <TextField id="outlined-basic" label="password" variant="outlined"  type={"password"} value={'mugesh'} placeholder={"Password"} onChange={handleUserPassword}/>
              </div>
              <div className={"btn"}>
                
                <Button variant="contained" onClick={(eve) => handleSubmit(eve)}>Submit</Button>
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
