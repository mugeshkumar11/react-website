import React, { useState } from 'react'
import { useForm } from "react-hook-form";

const Form = () => {
    const [username, setusername, ]=useState('username');
    const [userpassword, setpassword]=useState('');
  


    const handleUserName = (eve) =>{
        console.log("eve", eve);
        setusername(eve.target.value);
    };
    const handleUserPassword = (eve) =>{
        setpassword(eve.target.value);
        
    };

    const handleSubmit = (eve) =>{
        console.log("state",username,userpassword);
       eve.preventDefault();
    };
     const handleInputChange = (eve)=>{
        console.log("eve", eve);
        if(eve.target.name === 'username'){
            setusername(eve.target.value)
        }else{
            setpassword(eve.target.value)
        }
     };

    

  return (
    <div>
        <form onSubmit={handleSubmit}>
            {/* <input value={username} onChange={handleUserName}/>
            <input value={userpassword} onChange={handleUserPassword}/> */}
            {/* <button onClick={(eve) => handleSubmit(eve)}>Submit</button> */}
            <input value={username} name="username" onChange={handleInputChange}/>
            <input value={userpassword} name="userpassword" onChange={handleInputChange}/>
            <input type='submit'/>
           
        </form>

    </div>
  );
};

export default Form;
