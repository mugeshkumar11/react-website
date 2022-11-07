import React from "react";
import "./addtask.css"
import { Link,useSearchParams } from "react-router-dom";
import { useState,useContext } from "react";
import {statecontext} from '../context/Context';

function Addtask() {
  const[param] = useSearchParams();

  const [text, settext] = useState("");
  const [des, setdes] = useState('');
  const [event, setevent] = useState([]);
 

  const {state, dispatch} = useContext(statecontext)
  console.log("statecontext",state.event);



  const handletext = (val) => {
    settext(val.target.value);
  };

  const handledesc = (val) => {
    setdes(val.target.value);
  };
 

  const handlesum = (val) => {
    val.preventDefault();
    
    const temp = {
      text,
      des,
    };
   
    // setevent ([...event, temp]);
    settext('');
    setdes('');
     dispatch({type:"setevent", payload:[...state.event, temp]})
   
    console.log("state", temp);

  };


  
  return (
   
    <div className="addta">
      <section className={'adnav'}>
        <section className={'container'}>
          <div className={'adnavbarflex'}>
            <div className={'adnavlogo'}>
              <Link to={"/header"}> <h2>TASKAPP</h2></Link>
            </div>
          </div>
        </section>
      </section>

      <section className={"addtask"}>
        <section className={"container"}>
          <div className={"addflex"}>
            <form>
              <div className={"title"}>
                <h3>Enter task name:</h3>
                <input value={text} placeholder={"taskname"} onChange={handletext} />
              </div>
              <div className={"taskdesc"}>
                <h3>Enter the description:</h3>
                <textarea value={des}  placeholder={"Message..."} onChange={handledesc} />
              </div>
              <div className={"taskbtn"}>
                <button onClick={(val) => handlesum(val)}>submit</button>
              </div>
            </form>
            {state.event?.map((item , index) =><p key={index}>{item.text}{item.des}</p>)}
          </div>
        </section>
      </section>
    </div>
  );
}

export default Addtask;
